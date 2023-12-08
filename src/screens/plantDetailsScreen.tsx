// src/PlantDetailsScreen.tsx

import React from 'react';
import { View, StyleSheet } from 'react-native';

const PlantDetailsScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.border}>
        {/* Your content goes here */}
      </View>
      <View style={styles.lightGreenSquare} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  border: {
    flex: 1,
    borderWidth: 9,
    borderColor: 'green',
    padding: 174,
  },
  lightGreenSquare: {
    width: 335,
    height: 350,
    backgroundColor: '#4ACDF87',
    borderRadius: 20,
    position: 'absolute',
    bottom: 15,
  },
});

export default PlantDetailsScreen;