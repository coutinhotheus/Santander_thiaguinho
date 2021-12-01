import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const ButtonList = styled.TouchableOpacity`
  padding: 15px 25px;
  flex-direction: row;

  border-style: solid;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.colors.title_secondary};
`;

export const Title = styled.Text`
  margin-left: 10px;
`;
