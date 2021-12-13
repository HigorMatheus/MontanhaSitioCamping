import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  width: 90%;
  margin: 24px auto;
  max-width: 1024px;
  min-height: 70vh;
  background: #c8f68c;
  border-radius: 16px;
  padding: 24px;
`;

export const ImgBanner = styled.img`
  width: 100%;
  border-radius: 16px;
`;

export const Highlights = styled.div`
  .Highlight {
    margin: 0 1.6rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    img {
      margin: 0 auto;
    }
    h1 {
      width: 100%;
      font-size: 2.4rem;
      line-height: 3rem;
      margin: 1.6rem auto;
      font-family: Roboto Arial, Helvetica, sans-serif;
      @media (max-width: 600px) {
        text-align: center;
      }
    }
    aside {
      margin: 1.6rem auto;
      padding: 0.8rem;
      width: 38.4rem;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      p {
        font-size: 2.4rem;
        font-weight: 200;
        /* font-family: Roboto Arial, Helvetica, sans-serif; */
        font-family: 'Lobster', cursive;
        /* font-family: 'Roboto', sans-serif; */
      }
    }
  }
`;

export const Img = styled.img`
  width: 38.4rem;
  height: 38.4rem;
  border-radius: 1.6rem;
  /* @media (max-width: 500px) {
    width: 100%;
    height: auto;
  } ; */
`;
