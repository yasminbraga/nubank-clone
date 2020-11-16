import React from 'react'
import styled from 'styled-components/native'
import { Feather } from "@expo/vector-icons"

export const IconContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  padding: 8px;
  background: #9824c7;
  border-radius: 26px;
  width: 52px;
  height: 52px;
  justify-content: center;
  align-items: center;
  margin-left: 8px;
`

interface IconProps {
  name: string
}

export const Icon: React.FC<IconProps> = ({name}) => {
  return (
    <IconContainer>
      <Feather name={name} size={24} color="#fff"/>
    </IconContainer>
  )
}

export default Icon