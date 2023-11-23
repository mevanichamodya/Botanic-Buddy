

import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const PlantDiseaseScreen = () => {
  return (
    <ImageBackground
      source={{ uri: "https://cdn.mos.cms.futurecdn.net/7sg7FXztWiRzCYGLmpbCmC-1200-80.jpg" }} 
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Diseases...</Text>
        </View>
      
            <Text style={styles.paragraphText}></Text>
    
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
  },
  titleContainer: {
    backgroundColor: '#32CD32',
    padding: 20,
    alignItems: 'center',
    borderRadius: 100,
    width: 200,
    marginBottom :500,
  },
  titleText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
   
  },

  paragraphText :{
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
   
  }
});

export default PlantDiseaseScreen;

