import React from 'react';

import { Header } from '../../components/Header';
import {
  Container,
  Content,
  Descript,
  Description,
  IconView,
  Subtitle,
  Title,
  TitleBold,
  ButtonView,
  ButtonMenu,
  ButtonTitle,
  NavBar,
  ButtonTitleRed,
  ButtonMenuRed
} from './styles';

import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'

import { ScrollView, StatusBar } from 'react-native';
import { Button } from '../../components/Button';
import { useNavigation } from '@react-navigation/native';

export function Home() {
  const navigation = useNavigation()

  function handleSubmit() {
    navigation.navigate('SignIn')
  }

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header />

      <Content>
        <IconView>
          <FontAwesome5 name="hand-holding-usd" size={130} color="white" />
        </IconView>
        <Description>
          <Subtitle>PREVIDÊNCIA SANTANDER</Subtitle>
          <Title>Buscando mais</Title>
          <TitleBold>
            tranqulidade {'\n'}
            para seu futuro?
          </TitleBold>

          <Descript>
            > Os beneficios da Previdência{'\n'}
            Santander vão muito além{'\n'}
            da aposentadoria.{'\n'}
          </Descript>
        </Description>
      </Content>

      <ButtonView>
      <Button name="INVISTA JÁ" />
      </ButtonView>


    <NavBar>
    <ScrollView horizontal>
      <ButtonMenu> 
      <Ionicons name="ios-chatbox-ellipses-outline" size={24} color="red" />
        <ButtonTitle>
          Atendimento
        </ButtonTitle>
      </ButtonMenu>
      <ButtonMenu> 
      <Ionicons name="lock-open-outline" size={24} color="red" />
        <ButtonTitle>
          ID Santander
        </ButtonTitle>
      </ButtonMenu>
      <ButtonMenuRed onPress={handleSubmit}>  
      <Ionicons name="arrow-redo-outline" size={24} color="white" />
        <ButtonTitleRed>
          Acessar sua conta
        </ButtonTitleRed>
      </ButtonMenuRed>
    </ScrollView>
    </NavBar>
    </Container>
  );
}
