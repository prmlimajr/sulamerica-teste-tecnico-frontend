import React from 'react';
import { FaUserAlt } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io';

import Input from '../../components/Input';
import { Button } from '../../components/Button';

import {
  Container, 
  BackgroundImage,
  Content,
  GreetingContainer,
  GreetingTitle,
  GreetingMessage,
  FormContainer,
  FormTitle
} from './styles';

export function SignIn() {
  return (
    <Container>
      <BackgroundImage />
      <Content>
        <GreetingContainer>
          <GreetingTitle>Bem vindo</GreetingTitle>
          <GreetingMessage>Acesse para alugar um carro</GreetingMessage>
        </GreetingContainer>

        <FormContainer>
          <FormTitle>LOGIN</FormTitle>
          <Input placeholder="Nome" icon={FaUserAlt}/>
          <Input placeholder="Email" icon={IoMdMail}/>

          <Button>Entrar</Button> 
        </FormContainer>
      </Content>
    </Container>
  )
}
