import styled from "styled-components";

export const ContainerStyled = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  background: ${(props) => props.theme["gray-900"]};

  margin: 5rem auto;
  padding: 4rem 1.5rem;
`;
