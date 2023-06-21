import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import axios from 'axios';
import { memo, useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { Modal } from '../../components/Modal';
import { dateToISOString } from '../../utils/dateUtils';
import { MapBody, MapContent, ModalButtonAction, ModalButtonCancel, ModalContent, ModalFooter } from './style';

const containerStyle = {
  width: '100%',
  height: '100vh',
  zIndex: '10',
}

const center = {
  lat: Number(`${import.meta.env.VITE_PUBLIC_LAT_GOOGLE_MAPS}`) || -23.533610585815875,
  lng: Number(`${import.meta.env.VITE_PUBLIC_LOG_GOOGLE_MAPS}`) || -46.67203963833708,
}

function MapsPage() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: `${import.meta.env.VITE_API_KEY_GOOGLE_MAPS}`,
  })


  const [data, setData] = useState<any>()
  const [instructions, setInstructions] = useState(false)
  
  const [markers, setMarkers] = useState<any>([])
  const [markerPointer, setMarkerPointer] = useState<any>({})
  const [activeMarker, setActiveMarker] = useState(false)


  const [address, setAddress] = useState('')
  const [addressArray, setAddressArray] = useState<any>([])
  const [modal, setModal] = useState(false)

  const openModal: any = (param: any) => {
    setData(param)
    setModal(true)
  }

  const closeModal: any = () => {
    setModal(false)
  }

  const getMarkersStorages =  useCallback(() => {
    const storedArray = localStorage.getItem("address");
    if(storedArray) {    

      const parseAddress = JSON.parse(storedArray)

      parseAddress.forEach((element: any) => {
        markers.push(element.latLng)
      });
    }
  },[markers])

  useEffect(() => {
    getMarkersStorages()
  }, [])

  const handleClickMap = async (markerPoint: any) => {
    setInstructions(false)
    const lat = markerPoint.latLng.lat()
    const lng = markerPoint.latLng.lng()
    setMarkerPointer({lat, lng})
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyAbm-M5r8u_jznJ1AZy7j0GhHl3zv4JmAQ`,
        // `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${import.meta.env.VITE_API_KEY_GOOGLE_MAPS}`,
      )
      
      setAddress(response.data.results[0].formatted_address)
      setAddressArray([...addressArray, {
        latLng: {lat, lng}, 
        address: response.data.results[0].formatted_address, 
        date: dateToISOString()
      }])

     setModal(true)
    } catch (error) {
      
    toast.error('Erro ao marcar no mapa. Tente mais tarde.', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    })
    }
  }

  const handleSaveAddress = () => {
    
    const storedArray = localStorage.getItem("address");
    if(storedArray) {    
      const parseAddress = JSON.parse(storedArray)
      parseAddress.push({latLng: markerPointer, address: address, date: dateToISOString()})
      localStorage.setItem("address",JSON.stringify(parseAddress));

      setActiveMarker(true)
      setMarkers([...markers, markerPointer])
    }else{   
      localStorage.setItem("address",JSON.stringify(addressArray));
      setMarkers([...markers, markerPointer])
    }

    toast.success('Enviado com sucesso!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    })

    closeModal()
  }


  const handleClickInstructions =  () => { 
     setModal(true)
     setInstructions(true)
  }

  

  return (
    <>
      {isLoaded && (
        <>
          <MapContent onClick={handleClickInstructions}>
            <h1>INSTRUÇÕES</h1>
          </MapContent>

          <GoogleMap
            clickableIcons={false}
            mapContainerStyle={containerStyle}
            center={center}
            onClick={(event) => handleClickMap(event)}
            zoom={15}
            options={{
              zoomControl: true,
              streetViewControl: false,
              mapTypeControl: false,
              fullscreenControl: false,
            }}
          >
            {/* Child components, such as markers, info windows, etc. */}
            <>
              {markers.map((marker: any, key: number) => (
                
                <Marker
                  position={marker}
                  icon={`./markerMarvel.png`}
                  key={key}
                />
              
              ))}

            </>
          </GoogleMap>
        </>
      )}

      <div>
        
          <Modal
            openModal={openModal}
            closeModal={closeModal}
            modal={modal}
          >
            <ModalContent>
              <h1>DESEJA ENVIAR QUADRINHOS PARA O ENDEREÇO ABAIXO?</h1>
              <p>{address}</p>

              <ModalFooter>
                <ModalButtonCancel className="secondary" onClick={closeModal}>
                  Cancelar
                </ModalButtonCancel>
                <ModalButtonAction
                  className="primary"
                  onClick={handleSaveAddress}
                >
                  ENVIAR QUADRINHOS PARA ENDEREÇO NO MAPA
                </ModalButtonAction>
              </ModalFooter>
            </ModalContent>
          </Modal>
        
      </div>

      <div>
        {instructions && (
          <Modal
            openModal={openModal}
            closeModal={closeModal}
            modal={modal}
            title="INSTRUÇÕES"
          >
            <ModalContent>
             
              <MapBody>
                <div>
                  <img src="./markerMarvel.png" alt="" />
                  <p>1. Clique em qualquer ponto para selecionar um endereço</p>
                </div>
                <div>
                <img src="./modal.jpg" alt="" />
                  <p>
                    2. Verifique se o endereço
                    está correto na janela POPUP que irá aparecer.
                  </p>
                </div>
                <div>
                <img src="./enviar.jpg" alt="" />
                <p>
                  3. Clique no botão "ENVIAR QUADRINHOS PARA O ENDEREÇO NO MAPA"
                </p>
              </div>
                <div>
                <img src="./historico.jpg" alt="" />
                <p>
                  4. Acesse o menu "Histórico de Endereços" para visualizar todos os endereços que enviou lista de quadrinhos
                </p>
              </div>
            </MapBody>
            </ModalContent>
          </Modal>
        )}
      </div>
    </>
  )
}

export default memo(MapsPage)
