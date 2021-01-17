import * as React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';

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
    top: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },

});

export { styles }