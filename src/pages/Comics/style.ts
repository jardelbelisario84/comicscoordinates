// CardCharacter, CardCharacterBackground, CardCharacterBody, CardContent, ModalBody, ModalContent, ModalImage

import styled from "styled-components";

type PropsBgCardComic = {
  bgCardComic: string;
};



export const ContainerComic = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 1.5rem;
    margin: 1rem 0;
  }

  @media (max-width: 32rem) {
    h1 {
      font-size: 1rem;
    }
    p {
      font-size: 0.95rem;
      text-align: center;
    }
  }

  @media (min-width: 32rem) and (max-width: 48rem) {
    h1 {
      font-size: 1.5rem;
      margin: 1rem 0;
    }
  }
`;

export const CardContent = styled.div`
  margin: 4rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 40px;
`;

export const CardComic = styled.div`
  width: 21rem;
  margin-bottom: 2rem;
  height: 17.5rem;
  border-radius: 10px;

  width: 224px;
  height: 336px;

  border: 1px solid #000000;
  overflow: hidden;
  cursor: pointer;

  display: flex;
  flex-direction: column;
`;

export const CardComicBackground = styled.div<PropsBgCardComic>`
  width: 100%;
  height: 300px;

  background: url(${(props) => props.bgCardComic ?? props.theme["gray-300"]});
  background-repeat: no-repeat;
  background-size: cover;

  transition: 0.5s;

  :hover {
    transform: scale(1.1);
  }
`;
export const CardComicBody = styled.div`
  width: 100%;
  height: 50px;
  background: ${(props) => props.theme["red-900"]};

  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 1rem;
    margin: 5px 10px;
    color: #fff;
  }
`;

export const ModalContent = styled.div`
  width: 100%;
  height: 400px;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 40px;
  padding: 1rem;

  h1 {
    font-size: 1.3rem;
    margin: 5px 0;
    color: ${(props) => props.theme["red-900"]};
  }

  @media (max-width: 32rem) {
    height: 450px;

    display: flex;
    flex-direction: column;
  }

  @media (min-width: 32rem) and (max-width: 48rem) {
    height: 100%;
    height: 450px;

    overflow-y: auto;

    display: flex;
    flex-direction: column;
  }
`;
export const ModalImage = styled.div`
  width: 40%;
  height: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 48rem) {
    width: 100%;
    height: 50%;

    img {
      width: 100%;
      height: 100%;
    }
  }

  @media (min-width: 32rem) and (max-width: 48rem) {
    height: 90%;
    overflow-y: auto;

    display: flex;
    flex-direction: column;
  }
`;

type Props = {
  numberComics: any;
};

export const ModalBody = styled.div<Props>`
  width: 60%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  overflow-y: auto;
  max-height: 350px;

  div {
    margin-top: 1rem;

    h2 {
      display: flex;
      justify-content: flex-start;
      align-items: center;

      font-size: 1rem;
      color: ${(props) => props.theme["white"]};

      span {
        margin: 1rem 0;
        padding: 0.8rem;

        background-color: ${(props) => props.theme["gray-600"]};
        border-radius: 4px;

        font-weight: normal;
      }

      ::after {
        content: "${(props) => props.numberComics}";

        width: 10px;
        height: 10px;
        display: flex;
        justify-content: center;
        align-items: center;

        padding: 0.5rem;
        margin-top: -45px;
        margin-left: -15px;

        background-color: ${(props) => props.theme["gray-300"]};
        color: ${(props) => props.theme["gray-900"]};
        border-radius: 4px;

        text-align: center;
        font-weight: normal;
        font-size: 0.85rem;
      }
    }
    p {
      font-size: 0.85rem;
      margin: 5px 0;
      color: ${(props) => props.theme["gray-100"]};
    }
  }

  @media (max-width: 48rem) {
    width: 100%;

    overflow-y: auto;

    h2 {
      span {
        font-size: 0.85rem;
      }

      ::after {
        width: 20px;
        height: 20px;

        padding: 0.5rem;
        margin-top: -45px;
        margin-left: -20px;
      }
    }
  }
`;
