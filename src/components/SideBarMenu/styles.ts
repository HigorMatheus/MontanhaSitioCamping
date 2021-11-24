import styled, { css } from 'styled-components';

export const Container = styled.div`
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
  position: absolute;
  margin-top: -5rem;
  border: none;
  background: none;
  cursor: pointer;
  margin-left: 15rem;
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
      /* border-bottom: 1px solid rgba(0, 0, 0, 0.79); */
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
