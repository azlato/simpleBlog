import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import styleVariables from '../../styleVariables';

const Container = styled.nav`
    display: flex;

    position: fixed;
    left: 0;
    top: 0;
    padding: 0 8px;
    width: 100%;
    height: ${styleVariables.variables.navbarHeight}px;
    align-items: center;

    background: ${styleVariables.colors.white};
    box-shadow: 0 1px 4px 0 rgba(0,0,0,.1);

    @media ${styleVariables.viewport.desktop} {
        padding: 0 16px;
    }
`;

const Logo = styled(Link)`
    margin-right: 20px;

    color: ${styleVariables.colors.black};

    &:focus, &:hover {
        color: ${styleVariables.colors.gray400};
        text-decoration: underline;
    }

    @media ${styleVariables.viewport.desktop} {
        margin-right: 60px;
    }
`;

const NavLinkContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const NavLink = styled(Link)`
    margin-right: 10px;

    color: ${styleVariables.colors.black};

    &:focus, &:hover {
        color: ${styleVariables.colors.gray400};
        text-decoration: underline;
    }
`;

function Navbar() {
  return (
    <Container>
      <Logo to="/">🗒️ Simple blog</Logo>
      <NavLinkContainer>
        <NavLink to="/">Post list</NavLink>
      </NavLinkContainer>
    </Container>
  );
}

export default Navbar;
