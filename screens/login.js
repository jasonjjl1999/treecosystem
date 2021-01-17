import * as React from 'react';
import { Image, View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from '../styles/styles.js'
import { BottomTab } from '../components/tab.js'

const Stack = createStackNavigator();

export function LoginNav(){
  return(
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Logout" component={BottomTab} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

export function Login({ navigation }){
    return (
      <View style={styles.container}>
        
        <LinearGradient
          colors={['#abc8f2', '#cfc8e4' ]}
          style={styles.background}
        />
  
        <Text style={[styles.text, styles.main_title]}>TreeCosystem</Text>
  
        <Image
          style={styles.user_image}
          source={require('../assets/favicon.png')}
        />
  
        <Text style={[styles.text, styles.sub_title]}>LOGIN</Text>
  
        <LinearGradient
          colors={['#ee7861', '#ed9a62']}
          style={[styles.button, styles.button_container]}>
          <Text
            style={styles.text}
            onPress={() => navigation.navigate('Logout')}
          >View my Biomes</Text>
        </LinearGradient>
  
        <LinearGradient
          colors={['#FDFCFD', '#FDFCFD']}
          style={[styles.button, styles.username_container]}>
          <Text
            style={[styles.text, styles.user_info]}
          >username</Text>
        </LinearGradient>
  
        <LinearGradient
          colors={['#FDFCFD', '#FDFCFD']}
          style={[styles.button, styles.password_container]}>
          <Text
            style={[styles.text, styles.user_info]}
          >password</Text>
        </LinearGradient>
  
        <Text style={[styles.text, styles.signup]}>Not a member? <Text style={[styles.text, styles.signup_link]}>Sign up now!</Text></Text>
  
      </View>
    );
  }