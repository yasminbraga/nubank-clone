import React from 'react'

import {Container, Title, HeaderActions} from './styles'

import Icon from '../Icon'

export default function Header() {
  return (
    <Container>
      <Title>Olá, Yasmin Braga</Title>

      <HeaderActions>
        <Icon name="eye" />
        <Icon name="settings" />
      </HeaderActions>

    </Container>
  )
}