import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CollectionItem from "../CollectionItem/CollectionItem";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const Title = styled.h2`
  font-size: 28px;
  margin-bottom: 25px;
`;

const Preview = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CollectionPreview = ({ title, items }) => {
  const [previewContent, setPreviewContent] = useState([]);

  useEffect(() => {
    setPreviewContent(items.filter((item, idx) => idx < 4));
  }, [items]);

  return (
    <Container>
      <Title>{title.toUpperCase()}</Title>
      <Preview>
        {previewContent.map(({ id, ...props }) => {
          return <CollectionItem key={id} {...props} />;
        })}
      </Preview>
    </Container>
  );
};

export default CollectionPreview;
