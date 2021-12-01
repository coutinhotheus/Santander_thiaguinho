import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;

  padding: 15px 25px;
  padding-top: 40px;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const Icon = styled(Ionicons)`
  color: ${({ theme }) => theme.colors.title};
`;
