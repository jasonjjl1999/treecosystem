import * as React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({

  //////////////////// General //////////////////// 
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

  text: {
    backgroundColor: 'transparent',
    fontSize: 15,
    color: '#fff',
    fontFamily: 'Poppins_400Regular',
  },


  /////////////////// LOGIN ///////////////////////////

  button_container:
  {
    justifyContent: 'center',
    top: "36%",
  },
  button: {
    padding: 3,
    alignItems: 'center',
    borderRadius: 10,
    width: '30%',
    fontFamily: 'Poppins_600SemiBold',
  },

  login: {
    fontSize: 18,
    fontFamily: 'Poppins_600SemiBold',
  },

  username_container:
  {
    justifyContent: 'center',
    top: "23%",
    width: "60%",
  },

  password_container:
  {
    justifyContent: 'center',
    top: "25%",
    width: "60%",
  },

  user_info:
  {
    fontSize: 18,
    fontFamily: 'Poppins_500Medium',
    color: 'rgb(88, 41, 84)',
    padding: 2,
  },

  main_title: {
    fontSize: 40,
    top: "18%",
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
    top: "26%",
    color: '#3E183A',
    fontFamily: 'Poppins_500Medium',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: {width: 0, height: 3},
    textShadowRadius: 10
  },

  signup_link: {
    fontSize: 15,
    color: 'rgba(50,63,106,0.7)',
    fontFamily: 'Poppins_500Medium',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: {width: 0, height: 3},
    textShadowRadius: 10,
    textDecorationLine: 'underline'
  },

  user_image: {
    top: '18%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  banner_image: {
    top: '45%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  /////////////////// CREATE ///////////////////////////

  name_biome: {
    padding: 20,
    alignItems: 'center',
    borderRadius: 10,
    width: '30%',
    fontFamily: 'Poppins_600SemiBold',
    justifyContent: 'center',
    top: "25%",
    width: "60%",
  },

  name_biome_text_box: {
    alignItems: 'center',
    fontFamily: 'Poppins_600SemiBold',
    justifyContent: 'center',
    borderColor: "#E0DDF8",
    borderTopWidth: 1,
    borderBottomWidth: 5,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderRadius: 20,
    width: "100%",
  },

  name_biome_prompt:
  {
    fontSize: 18,
    fontFamily: 'Poppins_600SemiBold',
    color: 'rgb(88, 41, 84)',
    padding: 10,

  },

  name_biome_fill:
  {
    fontSize: 18,
    fontFamily: 'Poppins_600SemiBold',
    color: 'rgba(88, 41, 84, 0.5)',
  },

  category_chooser: {
    fontSize: 18,
    color: '#582954',
    fontFamily: 'Poppins_600SemiBold',
    top: '30%',
  },

  left_image: {
    top: "40%",
    width: "80%",
    height: undefined,
    justifyContent: 'center',
    alignItems: 'center',
    aspectRatio: 1,
    left: "25%",

  },

  right_image: {
    top: "35%",
    width: undefined,
    height: undefined,
    justifyContent: 'center',
    alignItems: 'center',
    aspectRatio: 1,
    right: "15%",
  },

  left_text: {
    top: "45%",
    left: "40%",
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 18,
    color: '#582954',
    fontFamily: 'Poppins_600SemiBold',
  },

  right_text: {
    top: "38%",
    left: "15%",
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 18,
    color: '#582954',
    fontFamily: 'Poppins_600SemiBold',
  },

  category_button:
  {
    justifyContent: 'center',
    padding: 3,
    alignItems: 'center',
    borderRadius: 10,
    width: '50%',
    fontFamily: 'Poppins_600SemiBold',
  },

  left_category_button:
  {
    top: "50%",
    left: "40%",
  },

  right_category_button: {
    top: "43%",
    left: "10%",
  },

  category_text:
  {
    fontSize: 18,
    fontFamily: 'Poppins_600SemiBold',
  },

});

export { styles }