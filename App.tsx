import React from 'react';
import { ThemeProvider } from 'styled-components'
import AppLoading from 'expo-app-loading'

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins'

import theme from './src/global/styles/theme';

import { NavigationContainer } from '@react-navigation/native'

import { Register } from './src/screens/Register';
import { AppRoutes } from './src/routes/app.routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_500Medium,
    Poppins_400Regular
  })

  if(!fontsLoaded) {
    return <AppLoading/>
  }

  return ( 
    <ThemeProvider theme={theme}>
      <NavigationContainer>
         <AppRoutes />
      </NavigationContainer>
    </ThemeProvider>
  )
}


