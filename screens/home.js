import * as React from 'react';
import { Image, View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from '../styles/styles.js'
import { Biomes } from './biomes.js'

const HomeStack = createStackNavigator();

export function HomeNav({ navigation }) {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} options={{headerShown: false}}/>
      <HomeStack.Screen name="Biomes" component={Biomes} />
    </HomeStack.Navigator>
  );
}

function Home({ navigation }){
  return (
    <View style={styles.container}>
        <LinearGradient
          colors={['#d7e7ff', '#E4E1FE' ]}
          style={styles.background}
        />
      <Text style={[styles.text, styles.main_title]}>MAIN</Text>
    </View>
  );
}