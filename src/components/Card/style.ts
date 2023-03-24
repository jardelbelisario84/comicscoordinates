import styled from "styled-components";



type PropsBgCard = {
  bgCard: string;
};


// export const CardContent = styled.div`
//   margin: 4rem auto;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-wrap: wrap;
//   gap: 40px;
// `;

export const CardStyled = styled.div`
  width: 21rem;
  margin-bottom: 2rem;
  height: 17.5rem;
  border-radius: 10px;

  width: 224px;
  height: 336px;

  border: 1px solid #000000;
  overflow: hidden;
  cursor: pointer;

  display: flex;
  flex-direction: column;
`;

export const CardBackground = styled.div<PropsBgCard>`
  width: 100%;
  height: 300px;

  background: url(${(props) => props.bgCard ?? props.theme["gray-300"]});
  background-repeat: no-repeat;
  background-size: cover;

  transition: 0.5s;

  :hover {
    transform: scale(1.1);
  }
`;
export const CardBody = styled.div`
  width: 100%;
  height: 50px;
  background: ${(props) => props.theme["red-900"]};

  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 1rem;
    margin: 5px 10px;
    color: #fff;
  }
`;