import * as React from 'react';
import { Image, View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from '../styles/styles.js'

export function Friends({ navigation }){
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#abc8f2', '#cfc8e4' ]}
        style={styles.background}
      />
      <Text style={[styles.text, styles.main_title]}>FRIENDS</Text>
    </View>
  );
}