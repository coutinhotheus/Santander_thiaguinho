import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { FontAwesome5 } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const Content = styled.View`
  flex-direction: row;
`;

export const IconView = styled.View`
  margin-top: 290px;
`;

export const Description = styled.View`
  margin-top: 220px;
`;

export const Subtitle = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-size: 8px;
  letter-spacing: 5px;
`;

export const Title = styled.Text`
  margin-top: 5px;
  color: ${({ theme }) => theme.colors.title};
  font-size: 25px;
`;

export const TitleBold = styled.Text`
  font-size: 25px;
  color: ${({ theme }) => theme.colors.title};
  font-weight: bold;
`;

export const Descript = styled.Text`
  margin-left: 40px;
  margin-top: 5px;
  color: ${({ theme }) => theme.colors.title};
  font-size: 12px;
`;

export const NavBar = styled.View`
  width: 100%;
  height: 135px;

  margin-top: 230px;

  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.background_ter};
`;

export const ButtonView = styled.View`
  align-items: center;
`;

export const ButtonMenu = styled.TouchableOpacity`
  margin-top: 20px;
  margin-left: 10px;

  width: 100px;
  height: 100px;

  border-radius: 5px;

  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.title};
`;

export const ButtonTitle = styled.Text`
  margin-top: 15px;
  color: ${({ theme }) => theme.colors.title_secondary};
`;

export const ButtonMenuRed = styled.TouchableOpacity`
  margin-top: 20px;
  margin-left: 10px;

  width: 100px;
  height: 100px;

  border-radius: 5px;

  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const ButtonTitleRed = styled.Text`
  margin-top: 15px;
  color: ${({ theme }) => theme.colors.title};
  text-align: center;
`;
