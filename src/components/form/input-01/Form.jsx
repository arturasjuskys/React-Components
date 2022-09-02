import styled from "styled-components";

const Wrapper = styled.div`
  height: 60vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;

  /* this prevents animation to block input text, if there is any */
  .form input:focus + .label-name .content-name,
  .form input:valid + .label-name .content-name {
    transform: translateY(-150%);
    font-size: 14px;
    color: #5fa8d3;
  }
  /* animating blue line */
  .form input:focus + .label-name::after,
  .form input:valid + .label-name::after {
    transform: translateX(0%);
  }

  .form {
    width: 50%;
    position: relative;
    height: 50px;
    overflow: hidden;

    input {
      width: 100%;
      height: 100%;
      color: #595f6e;
      padding-top: 20px;
      border: none;
      outline: none;
    }

    label {
      position: absolute;
      bottom: 0;
      left: 0;
      height: 100%;
      width: 100%;
      /* this enables to click through label element */
      pointer-events: none;
      border-bottom: 1px solid black;

      &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -1px;
        height: 100%;
        width: 100%;
        border-bottom: 3px solid #5fa8d3;
        transform: translateX(-100%);
        transition: transform 0.3s ease;
      }
    }

    .content-name {
      position: absolute;
      bottom: 5px;
      left: 0;
      transition: all 0.3s ease;
    }
  }
`;

export default function Form() {
  return (
    <Wrapper className="body">
      <h1>Animated Input</h1>
      <div className="form">
        <input type="text" name="name" autoComplete="off" required />
        <label htmlFor="name" className="label-name">
          <span className="content-name">Name</span>
        </label>
      </div>
    </Wrapper>
  );
}
