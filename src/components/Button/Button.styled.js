import styled from 'styled-components';

export const ButtonFB = styled.button`
  min-width: 70px;
  padding: ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii.sm};
  cursor: pointer;

  &:active {
    background-color: ${p => p.theme.colors.accent};
  }
`;
