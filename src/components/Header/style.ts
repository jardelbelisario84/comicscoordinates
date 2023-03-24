import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  background: ${(props) => props.theme["gray-900"]};
  z-index: 9999;
  position: fixed;
  top: 0;
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  max-width: 1120px;
  height: 100%;
  margin: auto;
  padding: 1rem;

  @media (max-width: 26.563rem) {
    max-width: 100%;
  }
  @media (min-width: 26.563rem) and (max-width: 48rem) {
    max-width: 100%;
     div {
       max-width: 100%;

     }
  }
`;

export const ButtonIcon = styled.button`

  display: none;
  justify-content: center;
  align-items: center;

  width: 40px;
  height: 40px;

  background-color: transparent;
  border: 0;

  :hover {
    svg {
      stroke: red
    }
  }

  :focus {
    outline: none;
    border: 0;
    box-shadow: none;
  }

  :active {
    outline: none;
    border: 0;
  }

  @media (max-width: 26.563rem) {
    display: flex;
    max-width: 100%;

  }
  @media (min-width: 26.563rem) and (max-width: 48rem) {
    display: flex;
    max-width: 100%;

  }
`;

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
`;

export const HeaderMenuDesktop = styled.div`
  flex: 1;

  display: flex;
  justify-content: flex-start;
  list-style: none;

  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);

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
    background-color: none;
  }

  a.active {
    color: ${(props) => props.theme["red-900"]};
  }

  @media (max-width: 28.625rem) {
    display: none;
    margin-top: 1rem;
    a {
      font-size: 0.85rem;
    }
  }

  @media (min-width: 28.625rem) and (max-width: 48rem) {
    display: none;
    a {
      font-size: 1.1rem;
    }
    margin-top: 0.85rem;
  }
`;



type VisibleMenuMobile = {
  visible: boolean;
}
export const HeaderContentMobile = styled.div<VisibleMenuMobile>`
  display: ${props => props.visible ? "block" : "none"};
  
`;

export const HeaderMenuMobile = styled.div`
 
  width: 100%;

  display: none;
  justify-content: flex-start;

  padding: 1rem 0;

  list-style: none;

  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);

  a {
    
    width: 100%;

    display: block;

    margin: 2px 0;
    padding: 0.9rem;

    font-family: Marvel;
    font-size: 1rem;
    font-weight: bold;
    text-decoration: none;
    color: #fff;
    background-color: ${(props) => props.theme["gray-700"]};
  }

  a:hover {
    color: #fff;
    text-decoration: underline;
  }

  a:focus {
    outline: 0px;
    box-shadow: none;
    background-color: none;
  }

  a.active {
    color: ${(props) => props.theme["red-900"]};
  }

  @media (max-width: 28.625rem) {
    display: block;

    margin-top: 1rem;
    
  }

  @media (min-width: 28.625rem) and (max-width: 48rem) {
    display: block;
    margin-top: 0.85rem;
  }
`;
