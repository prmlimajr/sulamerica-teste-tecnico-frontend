import React from 'react'
import { FiLogOut } from 'react-icons/fi';
import { useAuth } from '../../hooks/auth';

import {
  Container,
  Brand,
  SettingsContainer,
  Greeting,
  Clickable
} from './styles'

export function Header() {
  const { user, signOut } = useAuth();

  return (
    <Container>
      <Brand>ReservarVeículo</Brand>

      <SettingsContainer>
        <Greeting>Olá, {user && user.name}</Greeting>
        <Clickable onClick={signOut}>
          <FiLogOut size={20} />
        </Clickable>
      </SettingsContainer>
    </Container>
  )
}
