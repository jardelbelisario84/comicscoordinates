import styled from "styled-components";

export const HomeContainer = styled.div`
  background: ${props => props.theme['gray-900']} 
  padding: 2.5rem 0 7.5rem;
  width: 100%;

`
export const HomeContent = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100%;
  margin: 5rem auto; 
  padding: 0 1.5rem ;

  display: flex;
  justify-content: space-between;
  align-items: center;
`