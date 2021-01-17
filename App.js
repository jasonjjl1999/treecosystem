import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import { Biomes } from './screens/biomes.js'
import { Index } from './screens/index.js'

const Stack = createStackNavigator();

function App() {
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