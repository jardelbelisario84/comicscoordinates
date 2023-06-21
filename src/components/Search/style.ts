import styled from "styled-components";

export const SearchContainer = styled.div`
  width: 100%;
  max-width: 400px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 1rem;

  @media (max-width: 32rem) {
    width: 100%;
    flex-wrap: wrap;
  }
  @media (min-width: 32rem) and (max-width: 48rem) {
    width: 100%;
    flex-wrap: wrap;
  }
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0 10px 0;
`;

export const SearchInput = styled.input`
  margin-right: 5px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  ::placeholder {
    font-size: 0.9rem;
  }
  &:focus {
    box-shadow: 0 0 10px  ${(props) => props.theme["red-900"]};
    border: 0 none;
    outline: 0;
    border-color: red;
    transition-duration: 0.2s;
  }
`;
export const SearchButton = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  outline: 0 none;
  background-color: ${(props) => props.theme["red-500"]};
  color: ${(props) => props.theme["white"]};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme["red-900"]};
  }

  &:focus{
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
  }
 
`;
export const ButtonSearchResult = styled.button`
  padding: 1rem;
  border-radius: 5px;
  background-color: transparent;
  color: ${(props) => props.theme["red-500"]};
  font-size: 0.9rem;
  cursor: pointer;
  
  &:focus{
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
  }
`;

