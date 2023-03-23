import styled from "styled-components";

export const SBanner = styled.div`
  width: 100wh;
  height: 100vh;

  background: url("./banners/banner01_comics_coordinates.jpg");
  background-color: rgba(0, 0, 0, 0.5);
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;

  margin-top: 0px;

  @media (max-width: 28.625rem) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-position: center center;
    background-size: cover;

    margin-top: 0px;
  }

  @media (min-width: 28.625rem) and (max-width: 48rem) {
    margin-top: 0px;
    width: 100%;

    p {
      font-size: 0.85rem;
      text-align: center;
    }
  }

  @media (min-width: 48rem) and (max-width: 64rem) {
    margin-top: 0px;
    width: 100%;

    p {
      font-size: 1rem;
      text-align: center;
    }
  }
`;

export const SContainer = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 0;

  background-color: rgba(0, 0, 0, 0.5);

  p {
    margin: 1rem;
    padding: 0 0.5rem;
    font-size: 1rem;
  }

  h2 {
    font-size: 1rem;
    margin-top: 2rem;
  }

  @media (max-width: 28.625rem) {
    width: 100%;
    padding: 10rem 0 3rem 0;

    p {
      font-size: 0.85rem;
      text-align: center;
    }
  }

  @media (min-width: 28.625rem) and (max-width: 48rem) {
    margin: 0px;
    width: 100%;
    padding: 10rem 0 3rem 0;

    p {
      font-size: 0.85rem;
      text-align: center;
    }
  }
  @media (min-width: 48rem) and (max-width: 64rem) {
    margin: 0px;
    width: 100%;
    padding: 10rem 0 5rem 0;

    p {
      font-size: 0.85rem;
      text-align: center;
    }
  }
`;

export const STitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0 0.5rem;

  h1 {
    font-size: 3rem;
    border: 1px solid ${(props) => props.theme["red-900"]};
    padding: 0 0 0 0.5rem;
  }

  span {
    font-size: 3rem;
    font-weight: bold;
    background-color: ${(props) => props.theme["red-900"]};
    color: ${(props) => props.theme["gray-100"]};
    margin: 0 0 0 0.5rem;
    padding: 0 0.5rem;
  }

  @media (max-width: 28.625rem) {
    width: 100%;
    display: flex;
    h1 {
      font-size: 1.5rem;
    }
    span {
      font-size: 1.5rem;
    }
  }

  @media (min-width: 28.625rem) and (max-width: 48rem) {
    width: 100%;
    display: flex;
    h1 {
      font-size: 1.5rem;
    }
    span {
      font-size: 1.5rem;
    }
  }

  @media (min-width: 48rem) and (max-width: 64rem) {
    h1 {
      font-size: 2.5rem;
    }
    span {
      font-size: 2.5rem;
    }
  }
`;

export const SBody = styled.div`
  width: 100%;
  max-width: 36rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin-top: 1rem;
    font-size: 1.2rem;
    text-align: center;
  }
  p {
    text-align: center;
  }

  @media (max-width: 28.625rem) {
    width: 100%;
    max-width: 19rem;
  }

  @media (min-width: 28.625rem) and (max-width: 48rem) {
    width: 100%;
  max-width: 22rem;
  }

  @media (min-width: 48rem) and (max-width: 64rem) {
    width: 100%;
    max-width: 36rem;
  }
`;
