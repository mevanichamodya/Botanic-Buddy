import React from 'react';
import { View, StyleSheet } from 'react-native';
import PlantDiseaseScreen from './src/screens/plantDiseasesScreen'; 

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      
      <PlantDiseaseScreen />
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
