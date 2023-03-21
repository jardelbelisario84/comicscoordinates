import styled from 'styled-components'

export const ContainerStyled = styled.div`
  background: ${(props) => props.theme['gray-900']};
  width: 100%;
  max-width: 1120px;
  height: 100%;
  margin: 5rem auto;
  padding: 0 1.5rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
