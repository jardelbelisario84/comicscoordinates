import styled from 'styled-components'

export const ContainerStyled = styled.div`
  background: ${(props) => props.theme['gray-900']} 
  padding: 2.5rem 0 7.5rem;
  width: 100%;
  max-width: 1120px;
  height: 100%;
  margin: auto; 
  padding: 0 1.5rem ;

  display: flex;
  justify-content: space-between;
  align-items: center;
`
