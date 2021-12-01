import React from 'react';

import { Container, Icon } from './styles';

import Logo from '../../assets/Santander-Logo.png';
import { Image } from 'react-native';

export function Header() {
  return (
    <Container>
      <Icon name="menu-outline" size={24} />

      <Image source={Logo} style={{ width: 200, height: 30 }} />

      <Icon name="ios-location-outline" size={24} />
    </Container>
  );
}
