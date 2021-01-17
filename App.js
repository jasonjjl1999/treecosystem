import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens
import { Biomes } from './screens/biomes.js'
import { Index } from './screens/index.js'
import { Create } from './screens/create.js'

const Tab = createBottomTabNavigator();

function App() {
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