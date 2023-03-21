import styled from 'styled-components'

export const AddressContainer = styled.div`
  background: ${(props) => props.theme['gray-900']};
  padding: 2.5rem 0 7.5rem;
  width: 100%;
  height: 100%;
`

export const AddressContent = styled.div`
  flex: 1;
  padding: 3.5rem;

  display: flex;
  flex-direction: column;

  background: ${(props) => props.theme['gray-900']};

  h1 {
    font-size: 1.2rem;
    color: ${(props) => props.theme.white};
    font-family: 'Marvel';
  }
`
export const AddressList = styled.div``
