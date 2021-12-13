import styled, { css } from 'styled-components';

export const Container = styled.div`
  height: 169px;
  background-color: rgba(32, 57, 11, 0.47);
  div {
    width: 90%;
    max-width: 1024px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    padding-top: 16px;

    h1 {
      margin-left: -50px;
      font-family: Roboto;
      font-style: normal;
      font-weight: bold;
      font-size: 4rem;
      margin-right: auto;
      color: #2a2e14;
      @media (max-width: 700px) {
        margin-top: 4rem;
      }
    }
    span {
      width: auto;
      margin: 0px;
      display: flex;
      width: 100px;

      justify-content: space-between;
      @media (max-width: 700px) {
        flex-direction: column;
        height: 100px;
      }
    }

    div {
      width: auto;
    }
  }
`;
export const Menu = styled.div`
  position: relative;
  width: 100%;
  height: 1rem;
  nav {
    margin-top: -1rem;
    position: absolute;
    display: flex;
    left: 20px;
    @media (max-width: 700px) {
      display: none;
    }
    button {
      margin-top: -4.3rem;
      width: 15rem;
      height: 4rem;
      background: none;
      border: none;
      border-right: 1px solid rgba(0, 0, 0, 0.79);

      cursor: pointer;

      &:last-child {
        border: none;
      }

      p {
        color: #fbfbfb;
      }
    }
  }
`;

interface Props {
  isActive: boolean;
}
export const ButtonMenu = styled.button`
  width: 0;
  border: none;
  background: none;
  cursor: pointer;
  @media (min-width: 700px) {
    display: none;
  }
`;

export const MobileMenu = styled.div<Props>`
  @media (min-width: 700px) {
    display: none;
  }
  section {
    top: 0;
    width: 300px;
    padding: 1rem;
    position: fixed;
    height: auto;
    background-color: #333;
    flex-direction: column;
    height: 100%;

    ${({ isActive }) =>
      isActive
        ? css`
            left: 0px;
            transition: 350ms;
          `
        : css`
            left: -300px;
            transition: 350ms;
          `}

    button {
      width: 15rem;
      height: 4rem;
      background: none;
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      &:last-child {
        border: none;
      }

      p {
        color: #fbfbfb;
      }
    }
  }
`;
