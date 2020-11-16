import React from 'react'
import {View} from 'react-native'
import {Feather} from '@expo/vector-icons'

import Header from '../../components/Header'
import AccountInfo from '../../components/AccountInfo'
import AccountActions from '../../components/AccountActions'


export default function Home() {
  return (
    <View style={{ flex: 1, backgroundColor: "#8a05be"}}>
      <Header />
      <AccountInfo />
      <AccountActions />
    </View>
  )
}