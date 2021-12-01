import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.button};

  justify-content: center;
  align-items: center;

  border-radius: 3px;
  width: 120px;
  height: 25px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.title};
`;
