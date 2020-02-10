import React from "react";
import styled, { css } from "styled-components";

const shrinkLabelCss = css`
  top: -14px;
  font-size: 12px;
  color: #333333;
`;

const Container = styled.div`
  position: relative;
  margin: 45px 0;
`;

const Label = styled.label`
  color: grey;
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;
  ${props => props.shrink && shrinkLabelCss}
`;

const Input = styled.input`
  background: none;
  background-color: white;
  color: #333333;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid grey;
  margin: 25px 0;
  ${props => props.type === "password" && `letter-spacing: 0.3em;`}

  &:focus {
    outline: none;
  }
  &:focus ~ label {
    ${shrinkLabelCss}
  }
`;

const FormInput = ({ handleChange, label, value, ...otherProps }) => {
  return (
    <Container>
      <Input onChange={handleChange} value={value} {...otherProps} />
      {label && <Label shrink={Boolean(value.length)}>{label}</Label>}
    </Container>
  );
};

export default FormInput;
