import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Button,
  Image,
  Modal,
  TextInput,
  TouchableOpacity,
} from 'react-native';

interface Species {
  id: number;
  common_name: string;
  scientific_name: string[];
  section: Array<{ id: number; type: string; description: string }>;
}

interface SpeciesDetailsProps {
  species: Species;
  onClose: () => void;
}

const SpeciesDetails: React.FC<SpeciesDetailsProps> = ({ species, onClose }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openImageModal = (image: string) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <Modal animationType="slide" transparent={false} visible={true}>
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>{species.common_name}</Text>

        <FlatList
          data={species.section}
          renderItem={({ item }) => (
            <View style={styles.modalContent}>
              <Text style={styles.subtitle}>{item.type}</Text>
              <Text>{item.description}</Text>
            </View>
          )}
          keyExtractor={(item, index) => `section_${index.toString()}`}
        />

        <Button title="Close" onPress={onClose} />
      </View>

      <Modal animationType="slide" transparent={false} visible={selectedImage !== null}>
        <View style={styles.modalContainer}>
          <Image style={styles.largeImage} source={{ uri: selectedImage || '' }} />
          <TouchableOpacity onPress={closeImageModal} style={styles.backButton}>
            <Text style={styles.backButtonText}>Back</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </Modal>
  );
};

const PlantGuideScreen: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<Species[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedSpecies, setSelectedSpecies] = useState<Species | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError('');

      const response = await fetch(
        'https://perenual.com/api/species-care-guide-list?key=sk-5nBP656328744c5ae3004'
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();

      if (result.data && Array.isArray(result.data)) {
        setSearchResults(result.data);
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
    if (searchTerm.trim() !== '') {
      fetchData();
    } else {
      setSearchResults([]);
    }
  };

  const handleKeyPress = (event: any) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const openSpeciesDetails = (species: Species) => {
    setSelectedSpecies(species);
  };

  const closeSpeciesDetails = () => {
    setSelectedSpecies(null);
  };

  const renderItem = ({ item }: { item: Species }) => (
    <TouchableOpacity
      style={styles.searchItemContainer}
      onPress={() => openSpeciesDetails(item)}
    >
      <View style={styles.searchItemContent}>
        <Text style={styles.searchItemText}>{item.common_name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search for a species"
        value={searchTerm}
        onChangeText={text => setSearchTerm(text)}
        onSubmitEditing={handleSearch}
        onKeyPress={handleKeyPress}
      />

      <Button title="Search" onPress={handleSearch} />

      {loading ? (
        <ActivityIndicator style={styles.loader} size="large" color="#0000ff" />
      ) : error ? (
        <Text>{error}</Text>
      ) : (
        <FlatList
          data={searchResults}
          renderItem={renderItem}
          keyExtractor={(item) => item.id ? item.id.toString() : Math.random().toString()}
          style={styles.searchList}
        />
      )}

      {selectedSpecies && (
        <SpeciesDetails species={selectedSpecies} onClose={closeSpeciesDetails} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
        height: 10,  // Adjust the height as needed
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 16,
        paddingLeft: 8,
        flex: 1,
    },
  loader: {
    marginTop: 20,
  },
  searchList: {
    marginTop: 10,
  },
  searchItemContainer: {
    backgroundColor: 'black',
    borderRadius: 10,
    marginBottom: 8,
    padding: 10,
    fontWeight: 'bold',
  },
  searchItemContent: {
    fontWeight: 'bold',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchItemText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
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
  largeImage: {
    width: '100%',
    height: 300,
    marginBottom: 16,
  },
  backButton: {
    marginTop: 10,
    backgroundColor: 'green',
    borderRadius: 10,
    padding: 5,
    width: 80,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default PlantGuideScreen;
