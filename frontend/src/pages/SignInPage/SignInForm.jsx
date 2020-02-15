import React, { useState } from "react";
import styled from "styled-components";

import Button from "../../components/Button";
import Input from "../../components/Input";

import { auth, signInWithGoogle } from "../../libs/firebase";

const Container = styled.div`
  width: 425px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  margin: 10px 0px;
`;

const Subtitle = styled.span``;

const GoogleButton = styled(Button)`
  background-color: #4285f4;
  &:hover {
    background-color: #357ae8;
    color: white;
    border: none;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ErrorText = styled.span`
  display: block;
  color: red;
  margin: 20px 0px;
`;

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setEmail("");
      setPassword("");
      setError("");
    } catch (error) {
      if (error.message) {
        setError(error.message);
        return;
      }
      console.error(error);
    }
  };

  const handleChange = ({ target: { value, name } }) => {
    if (name === "password") {
      setPassword(value);
    }
    if (name === "email") {
      setEmail(value);
    }
  };

  return (
    <Container>
      <Title>I already have an account</Title>
      <Subtitle>Sign in with your email and password</Subtitle>
      <form onSubmit={handleSubmit}>
        <Input
          name="email"
          type="email"
          label="Email"
          handleChange={handleChange}
          value={email}
          required
        />
        <Input
          name="password"
          type="password"
          label="Password"
          handleChange={handleChange}
          value={password}
          required
        />
        <ButtonContainer>
          <Button>Sign in</Button>
          <GoogleButton type="button" onClick={signInWithGoogle}>
            Sign in with Google
          </GoogleButton>
        </ButtonContainer>
        {error && <ErrorText>{error}</ErrorText>}
      </form>
    </Container>
  );
};

export default SignInForm;
