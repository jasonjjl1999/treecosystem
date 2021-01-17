import * as React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from '../../styles/styles.js'
import { AntDesign } from '@expo/vector-icons';

import { Biomes } from './biomes.js'

const Stack = createStackNavigator();

export function CreateNav({ navigation }) {
  return (
    <Stack.Navigator screenOptions={{
      headerTransparent: true,
      title: '',
      headerBackImage: () => (<AntDesign name="left" size={40} color='#582954' />),
    }}>
      <Stack.Screen name="Create" component={Create} options={{headerShown: false}}/>
      <Stack.Screen name="Biomes" component={Biomes}/>
    </Stack.Navigator>
  );
}

function Create({ navigation }){
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#abc8f2', '#cfc8e4' ]}
        style={styles.background}
      />
      <Text style={[styles.text, styles.main_title]}>CREATE</Text>

      {/* Element to show navigation animation, can be deleted later*/}
      <LinearGradient
        colors={['#ee7861', '#ed9a62']}
        style={[styles.button, styles.button_container]}>
        <Text
          style={styles.text}
          onPress={() => navigation.navigate('Biomes')}
        >Progress to Next Screen</Text>
      </LinearGradient>

    </View>
  );
}