import styled from 'styled-components';

export const Container = styled.div`
  header {
    height: 169px;
    background-color: rgba(32, 57, 11, 0.47);
    div {
      width: 90%;
      max-width: 1024px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      padding: 16px;
      h1 {
        margin-left: -50px;
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 57px;
        line-height: 42px;
        color: #2a2e14;
      }
      div {
        width: auto;

        display: flex;
        flex-direction: column;
        button {
          width: 150px;
          height: 40px;
          background: rgba(0, 0, 0, 0.79);
          border-radius: 16px;
          border: none;
          margin-bottom: 16px;
          p {
            color: #fbfbfb;
          }
        }
      }
    }
  }
`;

export const Content = styled.div`
  width: 90%;
  margin: 24px auto;
  max-width: 1024px;
  height: 3510px;

  background: #c8f68c;
  border-radius: 16px;
  padding: 24px;
`;

export const ImgBanner = styled.img`
  width: 100%;
  border-radius: 16px;
`;
