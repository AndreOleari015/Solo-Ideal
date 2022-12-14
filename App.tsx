import React from 'react';
import { StatusBar } from 'react-native';

import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { Montserrat_700Bold, Montserrat_600SemiBold } from '@expo-google-fonts/montserrat';

import StackRoute from './src/routes/Stack.routes';
import LoadingConfiguration from './src/components/LoadingConfiguration/LoadingConfiguration';


export default function App() {
  const [fontsLoading] = useFonts({
    Montserrat_700Bold,
    Montserrat_600SemiBold
  })
  if (!fontsLoading) {
    return <LoadingConfiguration />
  }
  return (
    <NavigationContainer>
      <>
        <StatusBar
          barStyle="default"
          backgroundColor="transparent"
          translucent />
        <StackRoute />
      </>
    </NavigationContainer>
  );
}
