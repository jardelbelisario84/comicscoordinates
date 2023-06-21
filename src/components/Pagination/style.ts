import styled from "styled-components";

type PropsPaginationItem = {
  bgPaginationActive?: boolean;
};

export const PaginationContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;

  @media (max-width: 32rem) {
    width: 100%;
    flex-wrap: wrap;
  }
  @media (min-width: 32rem) and (max-width: 48rem) {
    width: 100%;
    flex-wrap: wrap;
  }
`;

export const PaginationItem = styled.div<PropsPaginationItem>`
  width: 40px;
  height: 40px;
  border-radius: 4px;
  background-color: ${(props) =>
    props.bgPaginationActive ? (props) => props.theme["red-900"] : (props) => props.theme["gray-500"]};

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  :hover {
    background-color: ${(props) => props.theme["red-500"]};
  }

  @media (max-width: 32rem) {
    flex-wrap: wrap;
  }

  @media (min-width: 32rem) and (max-width: 48rem) {
    flex-wrap: wrap;
  }
`;


export const PaginationButton = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  outline: 0 none;
  background-color: ${(props) => props.theme["red-500"]};
  color: ${(props) => props.theme["white"]};
  cursor: pointer;
 
`;