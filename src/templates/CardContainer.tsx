import React from 'react';
import styled from 'styled-components';
import styleVariables from '../styleVariables';

const Container = styled.div`
  margin-top: 12px;
  border-radius: 18px;
  padding: 14px 12px 28px;

  background-color: ${styleVariables.colors.white};

  @media ${styleVariables.viewport.desktop} {
    padding: 16px 22px 32px;
  }
`;

function CardContainer({ children }: { children: React.ReactNode }) {
  return <Container>{children}</Container>;
}

export default CardContainer;
