import styled from 'styled-components'

export const SBanner = styled.div`
  width: 100%;
  height: 100%;

  background: url("./banners/banner01_comics_coordinates.jpg");
  background-color: rgba(0,0,0,0.5);
  background-position: bottom: ;
  background-repeat: no-repeat;
  background-size: cover;
  /* padding: 20rem 0; */

  margin-top: -250px;
  `

export const SContainer = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25rem 0 8rem 0;

  background-color: rgba(0, 0, 0, 0.5);

  p {
    margin: 1rem;
    padding: 0 0.5rem;
    font-size: 1rem;
  }

  h2 {
    font-size: 2rem;
    margin-top: 2rem;

    /* padding: 2rem 0 2rem 0; */
  }
`

export const STitle = styled.div`
  display: flex;
  padding: 0 0.5rem;
  h1 {
    font-size: 4rem;
    border: 1px solid ${(props) => props.theme['red-900']};
    padding: 0 0 0 0.5rem;
  }

  span {
    font-size: 4rem;
    font-weight: bold;
    background-color: ${(props) => props.theme['red-900']};
    color: ${(props) => props.theme['gray-100']};
    margin: 0 0 0 0.5rem;
    padding: 0 0.5rem;
  }
`
