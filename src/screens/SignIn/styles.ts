import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Form = styled.View`
  margin: 15px 15px;
`;

export const Title = styled.Text``;

export const Input = styled.TextInput`
  margin-top: 40px;
  height: 60px;

  border-style: solid;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.colors.title_secondary};
`;

export const Lembret = styled.View`
  margin-top: 10px;
  margin-bottom: 25px;

  flex-direction: row;
  justify-content: space-between;
`;

export const TitleLembret = styled.Text``;
