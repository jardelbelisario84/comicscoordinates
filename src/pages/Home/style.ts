import styled from "styled-components";

type PropsBgCardCharacter = {
  bgCardCharacter: string;
};

type PropsPaginationItem= {
  bgPagintationActive?: boolean;
};

export const HomeContainer = styled.div`
  background: ${(props) => props.theme["gray-900"]} 
  padding: 2.5rem 0 7.5rem;
  width: 100%;

`;

export const HomeContent = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100%;
  margin: 5rem auto;
  padding: 0 1.5rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const HomeTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: ${(props) => props.theme["gray-100"]};
`;

export const CardContent = styled.div`
  margin: 4rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 4;
`;

export const CardCharacter = styled.div`
  width: 21rem;
  margin-bottom: 2rem;
  height: 17.5rem;
  /* background-color: ${(props) => props.theme["gray-300"]}; */
  border-radius: 10px;

  width: 300px;
  height: 200px;
  border: 1px solid #000000;
  overflow: hidden;
  position: relative;
`;


export const CardCharacterBackground = styled.div<PropsBgCardCharacter>`
  width: 100%;
  height: 100%;
  background: url(${(props) =>
    props.bgCardCharacter ?? props.theme["gray-300"]});
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  transition: 0.5s;
  cursor: pointer;
  :hover {
    transform: scale(1.2);
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4;

  width: 100%;
`;


export const PaginationItem = styled.div<PropsPaginationItem>`
  width: 40px;
  height: 40px;
  border-radius: 4px;
  background-color: ${props => props.bgPagintationActive ? 
  (props) => props.theme["green-500"] : (props) => props.theme["gray-500"]};
  margin: 0 5px;

 
  display: flex;
  justify-content: center;
  align-items: center;
  
  cursor: pointer;

  :hover{
    background-color: ${(props) => props.theme["green-300"]};
  }
  
  
`;
