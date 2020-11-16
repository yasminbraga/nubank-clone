import React from 'react'
import { StyleProp, ViewStyle } from 'react-native'

import {Container} from './styles'

interface CardPropos {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>
}

const Card: React.FC<CardPropos> = ({children, style}) => {
  return (
    <Container style={style}>{children}</Container>
  )
}

export default Card