import React from "react";
import styled from "styled-components";

import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

const Page = styled.main`
  display: flex;
  width: 900px;
  justify-content: space-between;
  margin: 30px auto;
`;

const SigninPage = () => {
  return (
    <Page>
      <SignInForm />
      <SignUpForm />
    </Page>
  );
};

export default SigninPage;
