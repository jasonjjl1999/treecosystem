import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function Index({ navigation }) {
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

function Biomes({ navigation }) {
  return (
    <View>
      <Text>Biomes Here</Text>
    </View>
  )
}

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