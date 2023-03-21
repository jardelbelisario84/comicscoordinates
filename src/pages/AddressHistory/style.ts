import styled from 'styled-components'

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
