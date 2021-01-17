import * as React from 'react';
import { Image, View, Text, TextInput  } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome5  } from '@expo/vector-icons';

import { styles } from '../styles/styles.js'
import { BottomTab } from '../components/tab.js'

const Stack = createStackNavigator();

export function LoginNav(){
  return(
  <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="BottomTab" component={BottomTab} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

let text = '';
export function Login({ navigation }){
  const [value, onChangeText] = React.useState('')

  function textChangeHandler(event){
    onChangeText(event.target.value)
     text = event.target.value;
  }

    return (
      <View style={styles.container}>
        
        <LinearGradient
          colors={['#d7e7ff', '#E4E1FE' ]}
          style={styles.background}
        />
  
        <Text style={[styles.text, styles.main_title]}>TreeCosystem</Text>
  
        
        <FontAwesome5 style={styles.user_image} name="user" size={40} color="#3E183A" />
  
        <Text style={[styles.text, styles.sub_title]}>LOGIN</Text>
  
        <LinearGradient
          colors={['#FDFCFD', '#FDFCFD']}
          style={[styles.button, styles.username_container]}>
          <TextInput 
            style={[styles.text, styles.user_info]}
            placeholderTextColor="rgba(88, 41, 84, 0.5)"
            placeholder="username"
            onChange={textChangeHandler}
            value = {value}
          ></TextInput>
        </LinearGradient>
  
        <LinearGradient
          colors={['#FDFCFD', '#FDFCFD']}
          style={[styles.button, styles.password_container]}>
          <TextInput
            style={[styles.text, styles.user_info]}
            placeholder="password"
            placeholderTextColor="rgba(88, 41, 84, 0.5)"
            onChange={textChangeHandler}
            value = {value}
          ></TextInput>
        </LinearGradient>
  
        <Text style={[styles.text, styles.signup]}>Not a member? <Text style={[styles.text, styles.signup_link]}>Sign up now!</Text></Text>
  
        <LinearGradient
          colors={['#ee7861', '#ed9a62']}
          style={[styles.button, styles.button_container]}>
          <Text
            style={[styles.text, styles.login]}
            onPress={() => navigation.navigate('BottomTab')}
          >Log In</Text>
        </LinearGradient>
  

        <Image
          style={styles.banner_image}
          source={require('../assets/grass_banner.png')}
        />

      </View>
    );
  }