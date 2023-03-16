import React from 'react';
import styled from 'styled-components';
import styleVariables from '../../styleVariables';

const Head = styled.h2`
    margin: 8px;
    padding: 14px;

    font-size: 18px;
    font-weight: ${styleVariables.fontWeight[500]};
`;

function Head2({ children }: { children: JSX.Element | string }) {
  return (
    <Head>{children}</Head>
  );
}

export default Head2;
