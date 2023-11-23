import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const PlantGuideScreen = () => {
  return (
    <ImageBackground
      source={{ uri: "https://jooinn.com/images/green-leaf-plant-18.jpg" }} 
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>How to Guide Your Plants</Text>
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

export default PlantGuideScreen;