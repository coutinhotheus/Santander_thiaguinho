import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container, Title } from './styles';

type Props = TouchableOpacityProps & {
  name: string;
};

export function Button({ name, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Title>{name}</Title>
    </Container>
  );
}
