import * as React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LinearGradient } from 'expo-linear-gradient';
import AppLoading from 'expo-app-loading';
import { Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { useFonts } from 'expo-font';


function Home({ navigation }) {
  return (
    <View style={styles.container}>
      
      <LinearGradient
        colors={['#abc8f2', '#cfc8e4' ]}
        style={styles.background}
      />

      <Text style={[styles.text, styles.main_title]}>TreeCosystem</Text>

      <Image
        style={styles.user_image}
        source={require('./assets/favicon.png')}
      />

      <Text style={[styles.text, styles.sub_title]}>LOGIN</Text>

      <LinearGradient
        colors={['#ee7861', '#ed9a62']}
        style={[styles.button, styles.button_container]}>
        <Text
          style={styles.text}
          onPress={() => navigation.navigate('Biomes')}
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

function Biomes({ navigation }) {
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

const Stack = createStackNavigator();

function App() {
  let [loaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
  });
  if (!loaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Biomes" component={Biomes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },

  button_container:
  {
    justifyContent: 'center',
    top: "50%",
  },
  button: {
    padding: 10,
    alignItems: 'center',
    borderRadius: 10,
  },


  username_container:
  {
    justifyContent: 'center',
    top: "20%",
    width: "60%",
  },


  password_container:
  {
    justifyContent: 'center',
    top: "22.5%",
    width: "60%",
  },

  user_info:
  {
    fontSize: 18,
    fontFamily: 'Poppins_500Medium',
    color: 'rgba(88, 41, 84, 0.5)',

  },

  text: {
    backgroundColor: 'transparent',
    fontSize: 15,
    color: '#fff',
    fontFamily: 'Poppins_400Regular',
  },

  main_title: {
    fontSize: 40,
    top: "10%",
    color: '#3E183A',
    fontFamily: 'Poppins_600SemiBold',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: {width: 0, height: 4},
    textShadowRadius: 10
  },

  sub_title: {
    fontSize: 25,
    top: "20%",
    color: '#3E183A',
    fontFamily: 'Poppins_500Medium',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: {width: 0, height: 3},
    textShadowRadius: 10
  },

  signup: {
    fontSize: 15,
    top: "45%",
    color: '#3E183A',
    fontFamily: 'Poppins_500Medium',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: {width: 0, height: 3},
    textShadowRadius: 10
  },

  signup_link: {
    fontSize: 15,
    top: "45%",
    color: 'rgba(50,63,106,0.7)',
    fontFamily: 'Poppins_500Medium',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: {width: 0, height: 3},
    textShadowRadius: 10,
    textDecorationLine: 'underline'
  },

  user_image: {
    width: 50,
    height: 50,
    top: '15%',
  },

});

export default App;