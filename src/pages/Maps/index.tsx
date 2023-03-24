import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import axios from 'axios';
import { memo, useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { ModalCComponent } from '../../components/ModalCC';
import api from '../../service/axios';
import { dateToISOString } from '../../utils/dateUtils';
import { MapBody, MapContent, ModalButtonAction, ModalButtonCancel, ModalContent, ModalFooter } from './style';

const containerStyle = {
  width: '100%',
  height: '100vh',
  zIndex: '10',
}

const center = {
  lat: -7.22363,
  lng: -39.31474,
}

function MapsPage() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: `${import.meta.env.VITE_API_KEY_GOOGLE_MAPS}`,
  })

  // const [, setMap] = useState(null)

  // const onLoad = useCallback(function callback(map: any) {
  //   // This is just an example of getting and using the map instance!!! don't just blindly copy!
  //   const bounds = new window.google.maps.LatLngBounds(center)

  //   map.fitBounds(bounds)
  //   console.log('map: ', map)
  //   setMap(map)
  // }, [])

  // const onUnmount = useCallback(function callback(map: any) {
  //   setMap(null)
  // }, [])

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

  const getComics = async () => {

   
    try {
      const response = await api.get('/v1/public/comics/82970')
      setData(response.data.data.results[0])
    } catch (error) {
      console.log(error)
    }
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
    getComics()
    getMarkersStorages()
  }, [])

  const handleClickMap = async (markerPoint: any) => {
    setInstructions(false)
    const lat = markerPoint.latLng.lat()
    const lng = markerPoint.latLng.lng()
    setMarkerPointer({lat, lng})
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${import.meta.env.VITE_API_KEY_GOOGLE_MAPS}`,
      )
      
      setAddress(response.data.results[0].formatted_address)
      setAddressArray([...addressArray, {
        latLng: {lat, lng}, 
        address: response.data.results[0].formatted_address, 
        date: dateToISOString()
      }])

     setModal(true)
    } catch (error) {
      console.log(error)
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
        {data && (
          <ModalCComponent
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
          </ModalCComponent>
        )}
      </div>

      <div>
        {instructions && (
          <ModalCComponent
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
          </ModalCComponent>
        )}
      </div>
    </>
  )
}

export default memo(MapsPage)
