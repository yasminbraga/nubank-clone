import React from 'react'
import { View, ScrollView, StyleProp, ViewStyle } from 'react-native'
import { Feather} from '@expo/vector-icons'

import {Container, ActionContainer, ActionContent} from './styles'

interface ActionProps {
  content: string;
  iconName: string;
  style?: StyleProp<ViewStyle>
}

const Action: React.FC<ActionProps> = ({ content, iconName, style}) => {
  return (
    <ActionContainer style={style}>
      <Feather size={24} name={iconName} color="#fff"/>
      <ActionContent>{content}</ActionContent>
    </ActionContainer>
  )
}

const AccountActions = () => {
  return (
    <Container horizontal showsHorizontalScrollIndicator={false}>
      <Action style={{marginLeft: 16}} content="Indicar Amigo" iconName="user-plus"/>
      <Action content="Indicar Amigo" iconName="user-plus"/>
      <Action content="Indicar Amigo" iconName="user-plus"/>
      <Action content="Indicar Amigo" iconName="user-plus"/>
      <Action content="Indicar Amigo" iconName="user-plus"/>      
      <Action content="Indicar Amigo" iconName="user-plus"/>      
      <Action content="Indicar Amigo" iconName="user-plus"/>      

    </Container>
  )
}

export default AccountActions
