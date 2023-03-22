import styled, { css } from 'styled-components'

export const MapContent = styled.div`
  width: 800px;
  height: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: ${(props) => props.theme['gray-900']};

  position: fixed;
  top: 70px;
  left: calc(50% - 400px);
  margin-top: 20px;

  z-index: 555;

  padding: 1rem;

  border-radius: 8px;

  h1 {
    font-size: 0.95rem;
  }
`

export const MapBody = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: ${(props) => props.theme['gray-900']};

  padding: 1rem;
  div {
    width: 40%;
    margin: 0 20px;
  }
  p {
    font-size: 0.75rem;
  }
`

export const AddressContainer = styled.div`
  background: ${(props) => props.theme['gray-900']};
  padding: 2.5rem 0 7.5rem;
  width: 100%;
  height: 100%;
  h1 {
    font-size: 1.2rem;
    color: ${(props) => props.theme['gray-100']};
    font-family: 'Marvel';
  }
`

export const AddressList = styled.div`
  flex: 1;
  overflow: auto;
  margin-top: 2rem;

  table {
    flex: 1;
    width: 100%;
    border-collapse: collapse;

    min-width: 600px;

    th {
      flex: 1;
      background-color: ${(props) => props.theme['gray-600']};
      padding: 1rem;
      text-align: left;
      color: ${(props) => props.theme['gray-100']};
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }
      &:last-child {
        border-top-right-radius: 8px;
        padding-left: 1.5rem;
      }
    }

    td {
      background-color: ${(props) => props.theme['gray-700']};
      border-top: 4px solid ${(props) => props.theme['gray-800']};

      padding: 1rem;

      color: ${(props) => props.theme['gray-100']};
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        width: 70%;
        padding-left: 1.5rem;
      }
      &:last-child {
        padding-left: 1.5rem;
      }
    }
  }
`

export const ModalContent = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding: 1rem;

  h1 {
    font-size: 1rem;
    margin: 1rem 0;
  }

  p {
    padding: 2rem;
    text-align: center;
    line-height: 1.5rem;
  }
`

const CommonStyles = css`
  border: 0;
  padding: 1rem;
  border-radius: 8px;

  font-weight: bold;
  cursor: pointer;

  font-size: 0.85rem;

  :focus {
    outline: 0;
    box-shadow: none;
  }
`
export const ModalFooter = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1rem;
`
export const ModalButtonCancel = styled.button`
  ${CommonStyles};
  background-color: ${(props) => props.theme['gray-500']};
  color: ${(props) => props.theme.white};
  :hover {
    background-color: ${(props) => props.theme['gray-600']};
  }
`
export const ModalButtonAction = styled.button`
  ${CommonStyles};
  background-color: ${(props) => props.theme['red-500']};
  color: ${(props) => props.theme.white};

  :hover {
    background-color: ${(props) => props.theme['red-900']};
  }
`
