import React, { useState } from 'react';

import { Header } from '../../components/Header';
import { Container, Form, Input, Lembret, Title, TitleLembret } from './styles';

import { Ionicons } from '@expo/vector-icons';

import { StatusBar, TouchableOpacity } from 'react-native';
import { Button } from '../../components/Button';
import { useNavigation } from '@react-navigation/native';

export function SignIn() {
  const [lembrete, setLembrete] = useState(false);
  const [CPF, setCPF] = useState('');

  const navigation = useNavigation();

  function handleLembrete() {
    setLembrete(!lembrete);
  }

  function handleSubmit() {
    if (CPF !== '') {
      navigation.navigate('Dashboard');
    }
  }

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header />

      <Form>
        <Title>Acessar sua conta</Title>

        <Input placeholder="CPF" value={CPF} onChangeText={setCPF} />

        <Lembret>
          <TitleLembret>Lembrar meu CPF</TitleLembret>
          <TouchableOpacity onPress={handleLembrete}>
            {lembrete ? (
              <Ionicons
                name="ios-radio-button-on-outline"
                size={24}
                color="black"
              />
            ) : (
              <Ionicons
                name="ios-radio-button-off-sharp"
                size={24}
                color="black"
              />
            )}
          </TouchableOpacity>
        </Lembret>

        <Button name="Entrar" onPress={handleSubmit} />
      </Form>
    </Container>
  );
}
