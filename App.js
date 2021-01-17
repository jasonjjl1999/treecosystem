import * as React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AppLoading from 'expo-app-loading';
import { Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { useFonts } from 'expo-font';

import { Index } from './screens/index.js'
import { Create } from './screens/create.js'
import { styles } from './styles/styles.js'

const Tab = createBottomTabNavigator();

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
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Index} />
        <Tab.Screen name="Create" component={Create} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;