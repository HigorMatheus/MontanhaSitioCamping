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
  div {
    margin: 0 1.6rem;
    display: flex;
    flex-wrap: wrap;
    img {
      margin: 0 auto;
    }
    h1 {
      width: 100%;
      font-size: 2.4rem;
      line-height: 3rem;
      margin: 1.6rem auto;
      @media (max-width: 600px) {
        text-align: center;
      }
    }
    aside {
      margin: 1.6rem auto;
      padding: 0.8rem;
      width: 38.4rem;
      display: flex;
      align-items: center;
      justify-content: center;
      p {
        font-size: 2.4rem;
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
