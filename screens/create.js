import * as React from 'react';
import { Image, View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from '../styles/styles.js'

export function Create({ navigation }){
  return (
    <View style={styles.container}>
      <LinearGradient
          colors={['#d7e7ff', '#E4E1FE' ]}
          style={styles.background}
       />
  
      <Text style={[styles.text, styles.main_title]}>CREATE</Text>
    </View>
  );
}