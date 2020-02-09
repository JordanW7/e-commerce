import React from "react";
import styled from "styled-components";
import HomePageDirectory from "./HomePageDirectory";

const Page = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 80px;
`;

const HomePage = () => {
  return (
    <Page>
      <HomePageDirectory />
    </Page>
  );
};

export default HomePage;
