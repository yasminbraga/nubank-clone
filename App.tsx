import { StatusBar } from 'expo-status-bar';
import React, { Fragment } from 'react';
import { View, Image, ActivityIndicator } from 'react-native';
import {useFonts, NunitoSans_300Light, NunitoSans_400Regular, NunitoSans_600SemiBold, NunitoSans_700Bold, NunitoSans_800ExtraBold} from '@expo-google-fonts/nunito-sans'

import Routes from './src/routes'

import nubank from './src/assets/nubank.png'

function Loader() {
  return (
  <View style={{backgroundColor: "#8a05be", flex: 1, alignItems: "center", justifyContent: "space-between", paddingVertical: 32}}>
    <View />
    <Image source={nubank} />
    <ActivityIndicator size="small" color="#fff"/>
  </View>)  
}

export default function App() {
  const [fontsLoaded, error] = useFonts({
    'nunito-sans-light': NunitoSans_300Light,
    'nunito-sans-regular': NunitoSans_400Regular,
    'nunito-sans-semibold': NunitoSans_600SemiBold,
    'nunito-sans-bold': NunitoSans_700Bold,
    'nunito-sans-extrabold': NunitoSans_800ExtraBold,
  })

  if (!fontsLoaded) {
    return <Loader />
  }
  
  return (
    <Fragment>
      <StatusBar style="light" backgroundColor="#8a05be"/>
      <Routes />
    </Fragment>
  );
}
