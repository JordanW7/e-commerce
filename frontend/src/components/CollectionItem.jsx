import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 22%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
`;

const Background = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${props => `url(${props.imageUrl})`};
`;

const Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

const ProductName = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

const ProductPrice = styled.span`
  width: 10%;
`;

const CollectionItem = ({ id, name, price, imageUrl }) => {
  return (
    <Container>
      <Background imageUrl={imageUrl} />
      <Footer>
        <ProductName>{name}</ProductName>
        <ProductPrice>{price}</ProductPrice>
      </Footer>
    </Container>
  );
};

export default CollectionItem;
