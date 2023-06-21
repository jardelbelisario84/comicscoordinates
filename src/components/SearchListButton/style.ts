import styled from "styled-components";

export const ButtonSearchResult = styled.button`
padding: 0.5rem;
border-radius: 5px;
border: none;
outline: 0;
background-color: transparent;
color: ${(props) => props.theme["red-500"]};
font-size: 0.9rem;
cursor: pointer;

:hover{
  text-decoration: underline;
  color: ${(props) => props.theme["red-900"]}
}
:focus{
  box-shadow: 0 0 0 0;
  border: 0 none;
  outline: 0;
}
`;