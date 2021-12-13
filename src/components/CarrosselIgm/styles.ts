import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 34rem;
  display: flex;
  text-align: center;
  align-items: center;
  margin: 0 auto;

  #items {
    display: flex;
    width: 100%;
    max-width: 34rem;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    scroll-behavior: smooth;
    /* width */
    ::-webkit-scrollbar {
      width: 20px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      /* box-shadow: inset 0 0 5px grey; */
      border-radius: 10px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      /* background: rgba(32, 57, 11, 0.47); */
      border-radius: 10px;
    }
    ::-webkit-scrollbar {
      width: 10 px;
      height: 10 px;
    }

    ::-webkit-scrollbar-thumb {
      /* border: 2 px solid white; */
      /* border-radius: 4 px; */
      background-color: rgba(0, 0, 0, 0.3);
    }

    ::-webkit-scrollbar-thumb {
      background: #c4c4c4;
      border-radius: 6 px;
    }

    ::-webkit-scrollbar-track {
      background: rgba(196, 196, 196, 0.3);
    }
  }

  .item {
    flex: none;
    width: 100%;
    max-width: 40rem;
    height: 34rem;
    max-height: 400px;
    scroll-snap-align: start;
    pointer-events: none;
  }
`;

export const Img = styled.img`
  flex: none;
  width: 100%;
  height: 100%;
  max-width: 40rem;
  object-fit: cover;
  border-radius: 1.6rem;
  flex: none;
`;
