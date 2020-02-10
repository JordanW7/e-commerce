import React from "react";
import styled from "styled-components";

import SHOP_DATA from "./shopData";
import CollectionPreview from "../../components/CollectionPreview/CollectionPreview";

const Page = styled.main``;

const ShopPage = () => {
  return (
    <Page>
      {SHOP_DATA.map((props, id) => {
        return <CollectionPreview key={id} {...props} />;
      })}
    </Page>
  );
};

export default ShopPage;
