import React from "react";
import styled from "styled-components";
import HomePageDirectoryItem from "./HomePageDirectoryItem";

const DirectoryMenu = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const HomePageDirectory = () => {
  const menuItems = [
    {
      title: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      linkUrl: "shop/hats"
    },
    {
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      linkUrl: "shop/jackets"
    },
    {
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      linkUrl: "shop/sneakers"
    },
    {
      title: "womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      size: "large",
      linkUrl: "shop/womens"
    },
    {
      title: "mens",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      size: "large",
      linkUrl: "shop/mens"
    }
  ];

  return (
    <DirectoryMenu>
      {menuItems.map(({ title, imageUrl, size }, id) => {
        return (
          <HomePageDirectoryItem
            key={id}
            title={title}
            size={size}
            imageUrl={imageUrl}
          />
        );
      })}
    </DirectoryMenu>
  );
};

export default HomePageDirectory;
