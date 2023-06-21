import styled from "styled-components";

export const SearchContainer = styled.div`
  width: 100%;
  max-width: 400px;

  display: flex;
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
  margin: 20px 0;
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
    outline: 0 none;
    /* border-color: "#AB222E"; */
    border-color: red;
    transition-duration: 0.3s;
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
 
`;
