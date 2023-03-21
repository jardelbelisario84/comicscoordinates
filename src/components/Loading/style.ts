import styled from 'styled-components'

export const LoadingMessage = styled.div`
  width: 100wh;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background: rgba(0, 0, 0, 0.9);

  z-index: 9999;

  h2 {
    font-size: 2rem;
    color: #fff;
    font-family: 'Marvel';
  }
`
