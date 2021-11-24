import styled from 'styled-components';

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
      @media (max-width: 500px) {
        margin-top: 4rem;
      }
    }
    span {
      width: auto;
      margin: 0px;
      display: flex;
      width: 100px;

      justify-content: space-between;
      @media (max-width: 500px) {
        flex-direction: column;
        height: 100px;
      }
    }

    div {
      width: auto;
    }
  }
`;
