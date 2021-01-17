import * as React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from '../../styles/styles.js'
import { Entypo } from '@expo/vector-icons';

import { Biomes } from './biomes.js'

const Stack = createStackNavigator();

export function CreateNav({ navigation }) {
  return (
    <Stack.Navigator screenOptions={{
      headerTransparent: true,
      title: '',
      headerBackImage: () => (<Entypo name="chevron-thin-left" size={40} color="#582954" />),
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
          colors={['#d7e7ff', '#E4E1FE' ]}
          style={styles.background}
        />

      <LinearGradient
          colors={['#FDFCFD', '#FDFCFD']}
          style={styles.name_biome}>
          <Text
            style={[styles.text, styles.name_biome_prompt]}
          >Welcome to TreeCosystem! Build your first biome by clicking "CREATE"</Text>
        </LinearGradient>

      {/* Element to show navigation animation, can be deleted later*/}
      <LinearGradient
        colors={['#ee7861', '#ed9a62']}
        style={[styles.button, styles.button_container]}>
        <Text
          style={[styles.text, styles.category_text]}
          onPress={() => navigation.navigate('Biomes')}
        >CREATE</Text>
      </LinearGradient>

    </View>
  );
}