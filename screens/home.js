import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from '../styles/styles.js'


export function Home({ navigation }){
  return (
    <View style={styles.container}>
        <LinearGradient
          colors={['#d7e7ff', '#E4E1FE' ]}
          style={styles.background}
        />
      <Text style={[styles.text, styles.main_title]}>Calc101</Text>

      <View style={{flex:1,justifyContent:'center'}} >
      <Image
          style={styles.main_image}
          source={require('../assets/grass_eco.png')}
          resizeMode={'contain'}
      />
      </View>

    </View>
  );
}