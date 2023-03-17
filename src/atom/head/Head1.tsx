import React from 'react';
import styled from 'styled-components';
import styleVariables from '../../styleVariables';

const Head = styled.h1`
    margin: 10px 10px 24px;
    border-bottom: 1px solid ${styleVariables.colors.gray200};
    padding: 16px;

    font-size: 20px;
    font-weight: ${styleVariables.fontWeight[500]};
`;

function Head1({ children }: { children: JSX.Element | string }) {
  return (
    <Head>{children}</Head>
  );
}

export default Head1;
