import React, { useState } from "react";
import styled from "styled-components";

import Input from "../../components/Input";
import Button from "../../components/Button";
import { auth, createUserProfileDocument } from "../../firebase/firebase";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
`;

const Title = styled.h2`
  margin: 10px 0;
`;

const Subtitle = styled.span``;

const Form = styled.form``;

const ErrorText = styled.span`
  display: block;
  color: red;
  margin: 20px 0px;
`;

const SignUpForm = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = async event => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("Oops! Passwords don't match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      createUserProfileDocument(user, { displayName });
      setDisplayName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setError("");
    } catch (error) {
      if (error.message) {
        return setError(error.message);
      }
      console.error(error);
    }
  };

  const handleChange = ({ target: { name, value } }) => {
    const functions = {
      password: setPassword,
      confirmPassword: setConfirmPassword,
      displayName: setDisplayName,
      email: setEmail
    };
    const setValue = functions[name];
    if (setValue) {
      setValue(value);
    }
  };

  return (
    <Container>
      <Title>I do not have an account</Title>
      <Subtitle>Sign up with your email and password</Subtitle>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <Input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <Input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />
        <Input
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <Button type="submit">SIGN UP</Button>
        {error && <ErrorText>{error}</ErrorText>}
      </Form>
    </Container>
  );
};

export default SignUpForm;
