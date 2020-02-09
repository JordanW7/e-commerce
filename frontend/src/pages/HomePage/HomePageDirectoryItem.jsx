import React from "react";
import styled from "styled-components";

const MenuItem = styled.div`
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  background-image: ${props => `url(${props.imageUrl})`};
  background-position: center;
  background-size: cover;

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }
`;

const MenuItemContent = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
`;

const MenuItemContentTitle = styled.h2`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: #4a4a4a;
`;

const MenuItemContentSubTitle = styled.span`
  font-weight: lighter;
  font-size: 16px;
`;
const HomePageDirectoryItem = ({ title, imageUrl }) => {
  return (
    <MenuItem imageUrl={imageUrl}>
      <MenuItemContent>
        <MenuItemContentTitle>{title}</MenuItemContentTitle>
        <MenuItemContentSubTitle>SHOP</MenuItemContentSubTitle>
      </MenuItemContent>
    </MenuItem>
  );
};

export default HomePageDirectoryItem;
