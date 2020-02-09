import React from "react";
import styled from "styled-components";

const MenuItemContent = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;
`;

const MenuItemContentTitle = styled.h2`
  font-weight: bold;
  margin: 0px 0px 6px 0px;
  font-size: 22px;
  color: #4a4a4a;
`;

const MenuItemContentSubTitle = styled.span`
  font-weight: lighter;
  font-size: 16px;
`;

const MenuItemBackground = styled.div`
  width: 100%;
  height: 100%;
  background-image: ${props => `url(${props.imageUrl})`};
  background-position: center;
  background-size: cover;
`;

const MenuItem = styled.div`
  min-width: 30%;
  height: ${props => (props.size === "large" ? "380px" : "240px")};
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;

  @media screen and (max-width: 690px) {
    height: 240px;
  }

  &:hover {
    cursor: pointer;
    ${MenuItemBackground} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
    ${MenuItemContent} {
      opacity: 0.9;
    }
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }
`;

const HomePageDirectoryItem = ({ title, imageUrl, size }) => {
  return (
    <MenuItem size={size}>
      <MenuItemBackground imageUrl={imageUrl} />
      <MenuItemContent>
        <MenuItemContentTitle>{title.toUpperCase()}</MenuItemContentTitle>
        <MenuItemContentSubTitle>SHOP NOW</MenuItemContentSubTitle>
      </MenuItemContent>
    </MenuItem>
  );
};

export default HomePageDirectoryItem;
