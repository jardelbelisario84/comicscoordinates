import styled from 'styled-components'

export const HeaderContainer = styled.div`
  width: 100%;
  background: ${(props) => props.theme['gray-900']};
  z-index: 9999;
  position: fixed;
  top: 0;
`

export const HeaderContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  max-width: 1120px;
  height: 100%;
  margin: auto;
  padding: 1rem;
`

export const HeaderLogo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: 1px red solid;

  margin-right: 1rem;

  & img {
    width: 70px;
  }

  & h1 {
    text-transform: uppercase;
    font-size: 1.4rem;

    padding: 0 4px 0 0;
  }

  & ul {
    display: flex;
    justify-content: start;
    list-style: none;
  }
`

export const HeaderMenu = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  list-style: none;

  cursor: pointer;

  a {
    margin: 0 10px;
    font-family: Marvel;
    font-size: 1.4rem;
    font-weight: bold;
    color: #fff;
    text-decoration: none;
  }

  a:hover {
    color: #fff;
    text-decoration: underline;
  }

  a:focus {
    outline: 0px;
    box-shadow: none;
  }

  a.active {
    color: ${(props) => props.theme['red-900']};
  }
`
