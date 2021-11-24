import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 40rem;
  display: block;
  text-align: center;
  align-items: center;

  div {
    width: 90%;
    max-width: 40rem;
    display: flex;
    flex-direction: row;
    position: relative;

    button {
      position: absolute;
      margin: auto;
      width: 3rem;
      height: 3rem;
      z-index: 2;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #333;
      background-color: rgba(255, 255, 255, 0.4);
      border: 1px solid #333;
      &.prev {
        margin-top: 14rem;
        left: 4rem;
      }
      &.next {
        margin-top: 14rem;
        right: 4rem;
      }
    }
  }
`;
interface ImgProps {
  isActive: boolean;
}
export const Img = styled.img<ImgProps>`
  width: 30rem;
  height: 30rem;
  border-radius: 1.6rem;

  ${({ isActive }) =>
    isActive
      ? css`
          display: block;
          opacity: 1;
          transition: 350ms;
        `
      : css`
          display: none;
          opacity: 0;
          transition: 350ms;
        `}
`;

export const ActiveIndex = styled.span<ImgProps>`
  width: 6px;
  height: 6px;
  margin: 2px;
  border-radius: 50%;
  ${({ isActive }) =>
    isActive
      ? css`
          background-color: #000;
          transition: 350ms;
        `
      : css`
          background-color: rgba(255, 255, 255, 0.6);
          transition: 350ms;
        `}
`;
