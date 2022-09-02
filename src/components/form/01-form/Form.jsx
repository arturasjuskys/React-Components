import styled from "styled-components";

const Container = styled.form`
  max-width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  input {
    width: 300px;
  }
`;

export default function Form() {
  return (
    <Container>
      <label htmlFor="email">Email</label>
      <input
        required
        pattern="[a-zA-Z0-9._+-]+@[a-zA-Z0-9 -]+\.[a-z]{2,}"
        id="email"
        type="email"
        title="must be a valid email"
      ></input>
      <label htmlFor="password">Password</label>
      <input
        title="Must be at least 8 characters"
        pattern="[a-zA-Z0-9]{8,}"
        type="text"
        required
        id="passwrod"
      />
      <p>Must be at least 8 characters</p>
      <button type="submit">Submit</button>
    </Container>
  );
}
