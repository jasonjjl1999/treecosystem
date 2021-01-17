import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export function Index({ navigation }) {
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