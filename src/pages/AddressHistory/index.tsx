import { useEffect, useState } from 'react';

import { Container } from '../../components/layout/Container';
import { AddressContainer, AddressList } from './style';

export default function AddressHistory() {


  const [ addressStorage, setAddressStorage ] = useState<any>();
  
  const getAddress = () => {

    const storedArray: any = localStorage.getItem("address");

    const parseAddress = JSON.parse(storedArray)
    setAddressStorage(parseAddress);
  }


  useEffect(() => {
    getAddress();
  },[])

  return (
    <Container>
      <AddressContainer>
        <h1> Endereços com recebimento de quadrinhos </h1>

        <AddressList>
          <table>
            <thead>
              <tr>
                <th>Endereço</th>
                
              </tr>
            </thead>
            <tbody>

              {addressStorage?.map((address:any, key: number) => (

              <tr key={key}>
                <td>
                {address.address}
                </td>
                
              </tr>
              ))}
              
            </tbody>
          </table>
        </AddressList>
      </AddressContainer>
    </Container>
  )
}
