import styled from 'styled-components/native'
import Constants from 'expo-constants'
import {Feather} from '@expo/vector-icons'

export const Container = styled.View`
  margin-top: ${Constants.statusBarHeight}px;
  padding: 32px 16px;
  padding-bottom: 26px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.Text`
  color: #ffffff;
  font-size: 26px;
  font-family: "nunito-sans-extrabold";
`

export const HeaderActions = styled.View`
  flex-direction: row;
`
