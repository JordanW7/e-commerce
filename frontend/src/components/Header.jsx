import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { auth } from "../libs/firebase";
import { useSelector } from "react-redux";
import { ReactComponent as Logo } from "../assets/crown.svg";

const Container = styled.header`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

const NavigationOptions = styled.nav`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const LogoLink = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

const NavLink = styled(Link)`
  padding: 10px 15px;
`;

const SignoutButton = styled.button`
  padding: 10px 15px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: "Raleway", sans-serif;
  border: none;
  cursor: pointer;
`;

const Header = () => {
  const currentUser = useSelector(state => state.user.currentUser);
  return (
    <Container>
      <LogoLink to="/">
        <Logo />
      </LogoLink>
      <NavigationOptions>
        <NavLink to="/shop">SHOP</NavLink>
        <NavLink to="/shop">CONTACT</NavLink>
        {currentUser ? (
          <SignoutButton type="button" onClick={() => auth.signOut()}>
            SIGN OUT
          </SignoutButton>
        ) : (
          <NavLink to="/signin">SIGN IN</NavLink>
        )}
      </NavigationOptions>
    </Container>
  );
};

export default Header;
