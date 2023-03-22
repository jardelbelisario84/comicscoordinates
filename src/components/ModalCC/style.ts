import styled from 'styled-components'

type PropsIsOpen = {
  isOpen: boolean
}

export const Modal = styled.div<PropsIsOpen>`
  display: flex;
  flex-direction: column;
  width: 100wh;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background: rgba(255, 255, 255, 0.85);
  /* background: rgba(235, 0, 0, 0.5); */

  transition: 2s all linear;

  z-index: 9999;
`

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;

  background-color: ${(props) => props.theme['gray-900']};
  width: 100%;
  max-width: 600px;

  padding: 1.5rem;

  box-shadow: 2px 5px 10px ${(props) => props.theme['gray-900']};

  z-index: 99999;
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

export const ModalHeaderButton = styled.button`
  width: 20px;
  height: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border-radius: 4px;
  border: none;
  background-color: ${(props) => props.theme['red-500']};

  :hover {
    background-color: ${(props) => props.theme['red-900']};
  }
  :focus {
    outline: 0;
    box-shadow: none;
  }
`
