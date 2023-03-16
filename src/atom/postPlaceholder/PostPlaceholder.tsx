import React from 'react';
import styled from 'styled-components';
import styleVariables from '../../styleVariables';

const Container = styled.div`
  margin: 0 0 36px 0;
  width: 100%;
`;

const Line = styled.div`
  margin: 14px 0px;
  height: 10px;

  background-color: ${styleVariables.colors.gray200};

  &:nth-child(3n+1) {
    width: 60%;
  }

  &:nth-child(3n+2) {
    width: 80%;
  }

  &:nth-child(3n+3) {
    width: 40%;
  }
}
`;

function PostPlaceholder() {
  return (
    <Container>
      <Line />
      <Line />
      <Line />
    </Container>
  );
}

export default PostPlaceholder;
