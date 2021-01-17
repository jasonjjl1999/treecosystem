import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import { Biomes } from '../screens/biomes.js'

const Stack = createStackNavigator();

export function Index({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Render} />
      <Stack.Screen name="Biomes" component={Biomes} />
    </Stack.Navigator>
  );
}

function Render({ navigation }){
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome to TreeCosystem!</Text>
      <Button
        title="View my Biomes"
        onPress={() => navigation.navigate('Biomes')}
      />
    </View>
  );
}