import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
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
      <TouchableOpacity
        onPress={onClose}
        style={styles.backButton}
        activeOpacity={0.7}
      >
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>

      <Text style={styles.modalTitle}>{careGuide.common_name}</Text>

      {careGuide.section.map((section) => (
        <View key={section.id} style={styles.modalContent}>
          <Text style={styles.subtitle}>{section.type}</Text>
          <Text>{section.description}</Text>
        </View>
      ))}
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
    <TouchableOpacity
      onPress={() => openCareGuideDetails(item)}
      style={styles.searchedItem}
    >
      <View style={styles.itemContainer}>
        <Text style={styles.itemText}>{item.common_name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <ImageBackground
      source={require('./android/Images/redf.jpg')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.titleText}>How to Care Your Plants</Text>

        <View style={styles.searchContainer}>
          <TextInput
            style={styles.input}
            placeholder="Search for a plant"
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
          />
          <TouchableOpacity
            style={styles.searchButton}
            onPress={handleSearch}
            activeOpacity={0.7}
          >
            <Text style={styles.searchButtonText}>Search</Text>
          </TouchableOpacity>
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

        <Text style={styles.introText}>
          Welcome to the Plant Care Guide! Explore detailed care instructions for various plants.
        </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderWidth: 6, 
    borderColor: 'green', 
    borderRadius: 15,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  titleText: {
    fontSize: 40,
    color: 'green',
    fontWeight: 'bold',
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  introText: {
    fontSize: 35,
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'darkslategray',
  },
  searchContainer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center',
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginRight: 8,
    paddingLeft: 12,
  },
  searchButton: {
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
  },
  searchButtonText: {
    color: 'white',
    fontWeight: 'bold',
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
  itemText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
  searchedItem: {
    backgroundColor: 'white',
    fontSize: 25,
  },
  searchedItemText: {
    color: 'white',
    fontWeight: 'bold',
    borderColor: 'black',
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  backButton: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    padding: 16,
    backgroundColor: 'green',
    borderTopRightRadius: 10,
  },
  backButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default plantGuideScreen;

