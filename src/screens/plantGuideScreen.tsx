import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Button,
  Modal,
  ScrollView,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

interface Section {
  id: number;
  type: string;
  description: string;
}

interface CareGuide {
  id: number;
  species_id: number;
  common_name: string;
  scientific_name: string[];
  section: Section[];
}

interface CareGuideDetailsProps {
  careGuide: CareGuide;
  onClose: () => void;
}

const CareGuideDetails: React.FC<CareGuideDetailsProps> = ({ careGuide, onClose }) => (
  <Modal animationType="slide" transparent={false} visible={true}>
    <ScrollView style={styles.modalContainer}>
      <Text style={styles.modalTitle}>{careGuide.common_name}</Text>

      {careGuide.section.map((section) => (
        <View key={section.id} style={styles.modalContent}>
          <Text style={styles.subtitle}>{section.type}</Text>
          <Text>{section.description}</Text>
        </View>
      ))}

      <Button title="Close" onPress={onClose} />
    </ScrollView>
  </Modal>
);

const plantGuideScreen: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<CareGuide[]>([]);
  const [allResults, setAllResults] = useState<CareGuide[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedCareGuide, setSelectedCareGuide] = useState<CareGuide | null>(null);
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError('');

      const response = await fetch(
        `https://perenual.com/api/species-care-guide-list?key=sk-5nBP656328744c5ae3004`
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();

      if (result.data && Array.isArray(result.data)) {
        setAllResults(result.data);
      } else {
        throw new Error('Unexpected data format in the API response');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred while fetching data.');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    const filteredResults = allResults.filter((item) =>
      item.common_name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(filteredResults);
    setSearched(true);
  };

  const openCareGuideDetails = (careGuide: CareGuide) => {
    setSelectedCareGuide(careGuide);
  };

  const closeCareGuideDetails = () => {
    setSelectedCareGuide(null);
  };

  const renderItem = ({ item }: { item: CareGuide }) => (
    <TouchableOpacity onPress={() => openCareGuideDetails(item)}>
      <View style={styles.itemContainer}>
        <Text>{item.common_name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <ImageBackground
      source={require('./assets/image/plantguide.jpg')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.titleText}> Plant Care Guide </Text>

        <View style={styles.searchContainer}>
          <TextInput
            style={styles.input}
            placeholder="Search for a plant"
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
          />
          <Button title="Search" onPress={handleSearch} />
        </View>

        {loading ? (
          <ActivityIndicator style={styles.loader} size="large" color="#0000ff" />
        ) : error ? (
          <Text>{error}</Text>
        ) : searched ? (
          <FlatList
            data={searchResults}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
          />
        ) : null}

        {selectedCareGuide && (
          <CareGuideDetails careGuide={selectedCareGuide} onClose={closeCareGuideDetails} />
        )}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginRight: 8,
    paddingLeft: 8,
  },
  loader: {
    marginTop: 20,
  },
  itemContainer: {
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#ddd',
    borderWidth: 1,
    padding: 8,
    borderRadius: 5,
  },
  modalContainer: {
    flex: 1,
    padding: 16,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  modalContent: {
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default plantGuideScreen;