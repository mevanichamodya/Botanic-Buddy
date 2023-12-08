import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Image,
  Modal,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

interface Disease {
  id: number;
  common_name: string;
  scientific_name: string;
  description: Array<{ subtitle: string; description: string }>;
  solution: Array<{ subtitle: string; description: string }>;
  host: string[];
  images: Array<{
    original_url: string;
    thumbnail: string;
  }>;
}

interface DiseaseDetailsProps {
  disease: Disease;
  onClose: () => void;
}

const DiseaseDetails: React.FC<DiseaseDetailsProps> = ({ disease, onClose }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [displayedSection, setDisplayedSection] = useState<string | null>(null);
  const [hiddenButtons, setHiddenButtons] = useState<string[]>([]);

  const openImageModal = (image: string) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const showSection = (section: string) => {
    setDisplayedSection(section);
    setHiddenButtons([...hiddenButtons, section]);
  };

  const isButtonHidden = (buttonName: string) => hiddenButtons.includes(buttonName);

  return (
    <Modal animationType="slide" transparent={false} visible={true}>
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>{disease.common_name}</Text>

        {!isButtonHidden('description') && (
          <TouchableOpacity onPress={() => showSection('description')} style={styles.button}>
            <Text style={styles.buttonText}>Show Description</Text>
          </TouchableOpacity>
        )}

        {displayedSection === 'description' && (
          <View style={styles.modalContent}>
            <Text style={styles.subtitle}>Description:</Text>
            {disease.description.map((item, index) => (
              <View key={`desc_${index.toString()}`}>
                <Text style={styles.subtitle}>{item.subtitle}</Text>
                <Text>{item.description}</Text>
              </View>
            ))}
          </View>
        )}

        {/* ... (Similar changes for other sections) */}

        <TouchableOpacity onPress={onClose} style={styles.backButton}>
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
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

const plantDiseasesScreen: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<Disease[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedDisease, setSelectedDisease] = useState<Disease | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError('');

      const response = await fetch(
        `https://perenual.com/api/pest-disease-list?key=sk-5nBP656328744c5ae3004`
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

  const openDiseaseDetails = (disease: Disease) => {
    setSelectedDisease(disease);
  };

  const closeDiseaseDetails = () => {
    setSelectedDisease(null);
  };

  const filteredResults = searchResults.filter(item =>
    item.common_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderItem = ({ item }: { item: Disease }) => (
    <TouchableOpacity
      style={styles.searchItemContainer}
      onPress={() => openDiseaseDetails(item)}
    >
      <View style={styles.searchItemContent}>
        <Text style={styles.searchItemText}>{item.common_name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.containerWithBorder}>
      <ImageBackground
        source={require('./android/Images/flower.jpg')}
        style={styles.backgroundImage}
      >
        <Text style={styles.titleText}>Plant Diseases🍀 </Text>

        <View style={styles.container}>
          <Text style={styles.paragraphText}>
            Explore and learn about common plant diseases. Select a disease to view details.🍂🥀
          </Text>

          <View style={styles.searchContainer}>
            <TextInput
              style={styles.input}
              placeholder="Search for a disease"
              value={searchTerm}
              onChangeText={text => setSearchTerm(text)}
              onSubmitEditing={handleSearch}
              onKeyPress={handleKeyPress}
            />

            <TouchableOpacity onPress={handleSearch} style={styles.searchButton}>
              <Text style={styles.searchButtonText}>Search</Text>
            </TouchableOpacity>
          </View>

          {loading ? (
            <ActivityIndicator style={styles.loader} size="large" color="#0000ff" />
          ) : error ? (
            <Text>{error}</Text>
          ) : (
            <FlatList
              data={filteredResults}
              renderItem={renderItem}
              keyExtractor={(item) => item.id ? item.id.toString() : Math.random().toString()}
              style={styles.searchList}
            />
          )}

          {selectedDisease && (
            <DiseaseDetails disease={selectedDisease} onClose={closeDiseaseDetails} />
          )}
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  containerWithBorder: {
    flex: 1,
    borderRadius: 30,
    borderWidth: 6,
    borderColor: 'green',
    overflow: 'hidden',
  },
  container: {
    flex: 1,
    padding: 10,
  },
  titleText: {
    color: 'black',
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: 35,
    textAlign: 'center',
  },
  paragraphText: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
    padding: 10,
    borderRadius: 50,
    maxWidth: 250,
    backgroundColor: '#FFFFE0',
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginBottom: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  searchContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    height: 10,
    borderColor: 'white',
    borderWidth: 10,
    marginBottom: 16,
    paddingLeft: 20,
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
    borderRadius: 15,
    marginBottom: 8,
    padding: 10,
    fontWeight: 'bold',
  },
  searchItemContent: {
    fontWeight: 'bold',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  searchItemText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  itemContainer: {
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  modalTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  modalContent: {
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  thumbnail: {
    width: 100,
    height: 100,
    marginRight: 8,
  },
  largeImage: {
    width: '100%',
    height: 300,
    marginBottom: 16,
  },
  searchButton: {
    marginTop: 10,
    padding: 5,
    backgroundColor: 'green',
    borderRadius: 5,
  },
  searchButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
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
  button: {
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default plantDiseasesScreen;