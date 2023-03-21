import styled from 'styled-components'

export const ModalMain = styled.div`
  background: ${(props) => props.theme['gray-900']} 
  padding: 2.5rem 0 7.5rem;
  width: 100%;
  position: absolute;
`

export const ModalContent = styled.div`
  background: ${(props) => props.theme['gray-900']} 
  padding: 2.5rem 0 7.5rem;
  width: 100%;
`

export const ModalHeader = styled.div`
  width: 100%;
`

export const ModalBody = styled.div`
  width: 100%;
`
