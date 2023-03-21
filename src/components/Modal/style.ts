import styled from 'styled-components'

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
`

export const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const ModalBody = styled.div`
  display: flex;
  justify-content: flex-start;

  flex: 1;

  & img {
    width: 250px;
    height: 350px;
    margin-right: 10px;
  }
`

export const ModalBodyContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  & ul {
    list-style: none;
  }

  & li {
    list-style: none;
  }
  & h2 {
    margin-bottom: 10px;
  }

  & li:last-child {
    margin-top: 40px;
  }
`

export const ModalTitle = styled.h1`
  font-size: 1.4rem;
  margin-bottom: 2rem;
  color: ${(props) => props.theme['red-900']};
`

export const ModalHeaderButton = styled.button`
  width: 30px;
  height: 30px;
  cursor: pointer;
  border-radius: 4px;
  border: none;
  background-color: ${(props) => props.theme['red-500']};
`
