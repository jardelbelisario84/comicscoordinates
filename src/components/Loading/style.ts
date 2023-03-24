import styled from "styled-components";

export const LoadingMessage = styled.div`
  width: 100wh;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background: rgba(0, 0, 0, 0.9);

  z-index: 9999;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
      font-size: 1.5rem;
      color: #fff;
      font-family: "Marvel";
    }

    @media (max-width: 28.625rem) {
      h2 {
        font-size: 1rem;
      }
    }

    @media (min-width: 28.625rem) and (max-width: 48rem) {
      h2 {
        font-size: 1.1rem;
      }
    }
  }
`;
