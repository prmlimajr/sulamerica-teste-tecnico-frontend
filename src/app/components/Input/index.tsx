import React, { InputHTMLAttributes } from 'react'
import { IconBaseProps } from 'react-icons/lib';

import {Container, TextInput} from './styles'

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ComponentType<IconBaseProps>
}

export default function Input({ icon: Icon, ...rest}: IInputProps) {
  return (
    <Container>
      {Icon && <Icon size={20} />}
      <TextInput {...rest} />
    </Container>
  )
}
