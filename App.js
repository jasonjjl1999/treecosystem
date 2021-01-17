import * as React from 'react';
import AppLoading from 'expo-app-loading';
import { Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { useFonts } from 'expo-font';

import { LoginNav } from './screens/login.js'


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
    <LoginNav />
  );
}

export default App;