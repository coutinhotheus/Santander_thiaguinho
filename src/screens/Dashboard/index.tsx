import React from 'react';

import { Header } from '../../components/Header';
import { ButtonList, Container, Title } from './styles';

import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

import { ScrollView, StatusBar } from 'react-native';

export function Dashboard() {
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header />

      <ScrollView>
        <ButtonList>
          <AntDesign name="creditcard" size={24} color="red" />
          <Title>Cartões</Title>
        </ButtonList>
        <ButtonList>
          <FontAwesome5 name="hand-holding-usd" size={24} color="red" />
          <Title>Empréstimos</Title>
        </ButtonList>
        <ButtonList>
          <FontAwesome5 name="chart-pie" size={24} color="red" />
          <Title>Santander On</Title>
        </ButtonList>
        <ButtonList>
          <FontAwesome5 name="globe" size={24} color="red" />
          <Title>Open Finance</Title>
        </ButtonList>
        <ButtonList>
          <AntDesign name="codepen" size={24} color="red" />
          <Title>Pix</Title>
        </ButtonList>
        <ButtonList>
          <FontAwesome5 name="box" size={24} color="red" />
          <Title>Poupança</Title>
        </ButtonList>
      </ScrollView>
    </Container>
  );
}
