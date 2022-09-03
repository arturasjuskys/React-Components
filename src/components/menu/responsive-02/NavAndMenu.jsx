import { useRef } from "react";
import styled from "styled-components";

const Container = styled.nav`
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1;

  .left {
    display: flex;
    align-items: center;

    h1 {
      border: solid 1px white;
      padding: 10px 30px;
      margin-right: 15px;
      font-size: 20px;
      border-radius: 5px;
      font-weight: 500;
      cursor: pointer;
    }

    ul {
      display: flex;

      @media (max-width: 768px) {
        display: none;
      }

      li {
        font-size: 16px;
        padding: 10px 30px;
        margin-right: 15px;
        list-style: none;
        border: 1px solid white;
        border-radius: 5px;
        font-weight: 500;
        font-size: 20px;
        cursor: pointer;
      }
    }
  }

  .hamburger {
    width: 32px;
    height: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;

    span {
      width: 100%;
      height: 3px;
      background-color: white;
      transform-origin: left;
      transition: all 1s ease;
    }
  }
`;
const Menu = styled.div`
  height: 100vh;
  width: 300px;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  right: -300px;
  transition: all 1s ease;

  &.active {
    right: 0;
  }

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 2;
    margin-left: 40px;
    padding: 0;
    list-style: none;
    font-size: 30px;
    font-weight: 300;
    color: white;
    width: 70%;

    li {
      margin-bottom: 25px;

      a {
        font-size: inherit;
        color: inherit;
        text-decoration: none;
      }

      &:hover {
        font-weight: 500;
      }
    }
  }
`;

export default function Nav() {
  const menuRef = useRef();

  return (
    <>
      <Container>
        <div className="left">
          <h1>sfMove.</h1>
          <ul>
            <li>Intro</li>
            <li>Content</li>
            <li>About</li>
          </ul>
        </div>
        <div
          className="hamburger"
          onClick={() => menuRef.current.classList.toggle("active")}
        >
          <span className="lin1"></span>
          <span className="lin2"></span>
          <span className="lin3"></span>
        </div>
      </Container>
      <Menu ref={menuRef} className="active">
        <ul>
          <li>Home</li>
          <li>Intro</li>
          <li>Content</li>
          <li>About</li>
        </ul>
      </Menu>
    </>
  );
}
