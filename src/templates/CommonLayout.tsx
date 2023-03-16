import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    width: 1040px;
    max-width: 100%;

    margin: auto;
`;

function CommonLayout() {
  return (
    <Container>
      <Outlet />
    </Container>
  );
}

export default CommonLayout;
