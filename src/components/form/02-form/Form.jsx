import FormInput from "./FromInput";
import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.7),
      rgba(255, 255, 255, 0.3)
    ),
    url("https://images.pexels.com/photos/114979/pexels-photo-114979.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500");
  background-size: cover;
  background-position: center;
`;
const FormElement = styled.form`
  background-color: white;
  padding: 0px 60px;
  border-radius: 10px;

  .formInput {
    display: flex;
    flex-direction: column;
    width: 280px;
  }
`;
const Title = styled.h1`
  color: rgb(77, 1, 77);
  text-align: center;
  margin: 20px 0;
`;
const Button = styled.button`
  width: 100%;
  height: 50px;
  padding: 10px;
  border: none;
  background-color: rebeccapurple;
  color: white;
  border-radius: 5px;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
  margin-top: 15px;
  margin-bottom: 30px;
`;

export default function Form() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });
  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
      focused: "false",
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      // to check if entered password is matching
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = e => {
    e.preventDefault();
  };

  const onChange = e => {
    // takes in existing values and adds new value to the state
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <Container>
      <FormElement onSubmit={handleSubmit}>
        <Title>Register</Title>
        {inputs.map(input => (
          <FormInput
            key={input.id}
            // spread all input values
            {...input}
            // grabs name value from values state
            values={input.name}
            onChange={onChange}
          />
        ))}
        <Button>Submit</Button>
      </FormElement>
    </Container>
  );
}
