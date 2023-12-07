import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PlantGuideScreen from './src/screens/plantGuideScreen';
import PlantDiseaseScreen from './src/screens/plantDiseasesScreen';

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PlantGuide">
        <Stack.Screen name="PlantGuide" component={PlantGuideScreen} />
        <Stack.Screen name="Disease" component={PlantDiseasesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
