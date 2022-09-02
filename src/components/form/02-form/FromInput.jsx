import { useState } from "react";
import styled from "styled-components";

const Input = styled.input`
  padding: 15px;
  margin: 10px 0px;
  border-radius: 5px;
  border: 1px solid gray;

  /* styling error messages, by accessing data-focused attribute */
  &:invalid[data-focused="true"] {
    border: 1px solid red;
  }
  &:invalid[data-focused="true"] ~ span {
    display: block;
  }
`;
const Label = styled.label`
  font-size: 12px;
  color: gray;
`;
const Span = styled.span`
  font-size: 12px;
  padding: 3px;
  color: red;
  display: none;
`;

export default function FromInput(props) {
  const { label, onChange, errorMessage, id, ...inputProps } = props;
  const [focused, setFocused] = useState(false);

  const handleFocus = e => {
    setFocused(true);
  };

  return (
    <div className="formInput">
      <Label>{label}</Label>
      <Input
        // passes over all props and saves the trouble of typing everying out
        {...inputProps}
        onChange={onChange}
        // handle error messages
        onBlur={handleFocus}
        // to check confirm password before Submit
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        // needs to be named data-... to work
        data-focused={focused.toString()}
      />
      <Span>{errorMessage}</Span>
    </div>
  );
}
