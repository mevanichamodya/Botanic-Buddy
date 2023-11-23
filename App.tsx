import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const PlantDiseaseScreen: React.FC = () => {
  const [searchText, setSearchText] = useState<string>('');

  const handleSearch = () => {
    // Add your logic for handling the search here
    alert('Searching for: ' + searchText);
  };

  return (
    <ImageBackground
      source={{ uri: 'https://eskipaper.com/images/flowers-sunlight-nature-1.jpg' }}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View style={styles.cloudContainer}>
          <Text style={styles.titleText}>Plant Diseases🍁 </Text>
        </View>

        <Text style={styles.paragraphText}>
          Plant diseases can affect various parts of plants including leaves, stems, roots, and fruits. They are often caused by
          pathogens such as fungi, bacteria, viruses, nematodes, and other microorganisms.🍂🥀
          Explore and learn about common plant diseases. Select a disease to view details.
        </Text>

        {/* Small Search Bar */}
        <View style={styles.searchContainer}>
          <Icon name="search" size={15} color="black" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor="gray"
            value={searchText}
            onChangeText={(text) => setSearchText(text)}
            onSubmitEditing={handleSearch}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    opacity: 0.85,
  },
  cloudContainer: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 50,
    marginBottom: 20,
    opacity: 1,
    position: 'absolute',
    top: 40,
  },
  titleText: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
  },
  paragraphText: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
    padding: 10,
    borderRadius: 40,
    maxWidth: 250,
    backgroundColor: '#FFFFE0',
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginTop: 400,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 25,
    paddingHorizontal: 10,
    paddingVertical: 5, 
    bottom: 450,
    marginBottom: 150,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: 'black',
    paddingVertical:2, 
    },
});

export default PlantDiseaseScreen;

