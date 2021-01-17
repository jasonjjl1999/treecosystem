import * as React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppLoading from 'expo-app-loading';
import { Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { useFonts } from 'expo-font';

import { Biomes } from './screens/biomes.js'
import { Index } from './screens/index.js'
import { styles } from './styles/styles.js'

const Stack = createStackNavigator();

function App() {
  let [loaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
  });
  if (!loaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Index} />
        <Stack.Screen name="Biomes" component={Biomes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;