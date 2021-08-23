import React from 'react'
import { FiLogOut } from 'react-icons/fi';

import {
  Container,
  Brand,
  SettingsContainer,
  Greeting,
  Clickable
} from './styles'

export function Header() {
  return (
    <Container>
      <Brand>ReservarVeículo</Brand>

      <SettingsContainer>
        <Greeting>Olá, Paulo</Greeting>
        <Clickable>
          <FiLogOut size={20} />
        </Clickable>
      </SettingsContainer>
    </Container>
  )
}
