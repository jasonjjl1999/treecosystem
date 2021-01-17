import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from '../styles/styles.js'


export function Biomes({ navigation }) {
  return (
    <View style={styles.container}>

    <LinearGradient
        colors={['#abc8f2', '#cfc8e4' ]}
        style={styles.background}
      />

      <Text>Biomes Here</Text>
    </View>
  )
}