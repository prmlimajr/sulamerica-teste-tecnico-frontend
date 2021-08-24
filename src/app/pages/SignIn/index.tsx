import React, { useCallback, useState } from 'react';
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { FaUserAlt } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io';

import Input from '../../components/Input';
import { Button } from '../../components/Button';
import Loader from '../../components/Loader';

import {
  Container, 
  BackgroundImage,
  Content,
  GreetingContainer,
  GreetingTitle,
  GreetingMessage,
  FormContainer,
  FormTitle,
  Column,
  ValidationError
} from './styles';
import { useAuth } from '../../hooks/auth';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um email válido')
    .required('Favor informar o email cadastrado'),
  name: Yup.string().required('Favor informar o seu nome').min(3, 'Nome muito curto'),
});

interface IForm {
  name: string;
  email: string;
}

export function SignIn() {
  const [loading, setLoading] = useState(false);

  const { signIn } = useAuth();
  
  const handleSubmit = useCallback(async ({ name, email }: IForm) => {
    try {
      setLoading(true);

      await signIn({ name, email });
    } catch (err) {
      alert("Falha na requisição!")
    } finally {
      setLoading(false);
    }
  }, [signIn]);

  return (
    <Container>
      <BackgroundImage />
      <Content>
        <GreetingContainer>
          <GreetingTitle>Bem vindo</GreetingTitle>
          <GreetingMessage>Acesse para alugar um carro</GreetingMessage>
        </GreetingContainer>

        <FormContainer>
        <Formik
              initialValues={{ name: '', email: '' }}
              onSubmit={data => handleSubmit(data)}
              validationSchema={schema}
            >
              <Form>
                <Column>
                  <FormTitle>LOGIN</FormTitle>
                    <Field
                      type='text'
                      name='name'
                      placeholder='Nome'
                      icon={FaUserAlt}
                      as={Input}
                    />
                    <ErrorMessage
                      component={ValidationError}
                      name='name'
                    />
                </Column>
                
                <Column>
                  <Field
                    type='email'
                    name='email'
                    placeholder='Email'
                    icon={IoMdMail}
                    as={Input}
                  />
                  <ErrorMessage
                    component={ValidationError}
                    name='email'
                  />
                </Column>
                
                  <Button type='submit' disabled={loading}>
                    {loading ?  <Loader color='#fff' /> : 'Entrar'}
                  </Button>
              </Form>
          </Formik>
        </FormContainer>
      </Content>
    </Container>
  )
}
