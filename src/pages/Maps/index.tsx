/* eslint-disable no-undef */
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api'
import axios from 'axios'
import { memo, useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import { ModalCComponent } from '../../components/ModalCC'
import api from '../../service/axios'
import { MapBody, MapContent, ModalButtonAction, ModalButtonCancel, ModalContent, ModalFooter } from './style'

import 'react-toastify/dist/ReactToastify.css'

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
  const [markers, setMarkers] = useState<any>([])
  const [address, setAddress] = useState('')
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

  useEffect(() => {
    getComics()
  }, [])

  const handleClickMap = async (markerPoint: any) => {
    const lat = markerPoint.latLng.lat()
    const lng = markerPoint.latLng.lng()

    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyBEydqnAzNae6JDOStWGCxvg3R3o8KFXPk`,
      )
      const center = {
        lat,
        lng,
      }

      const markerPointer = center
      setMarkers([...markers, markerPointer])

      console.log(response.data.results[0].formatted_address)
      setAddress(response.data.results[0].formatted_address)
      setModal(true)
    } catch (error) {
      console.log(error)
    }
  }

  const handleSaveAddres = async () => {
    toast.success('Enviado com sucesso!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    })

    closeModal()
  }

  return (
    <>
      {isLoaded && (
        <>
          <MapContent>
            <h1>INSTRUÇÕES</h1>
            <MapBody>
              <div>
                <p>1. Clique em qualquer ponto para selecionar um endereço</p>
              </div>
              <div>
                <p>
                  2. Após ma janela pop-up aparecer, verifique se o endereço
                  está correto.
                </p>
              </div>
              <div>
                <p>
                  3. Confirme o envio e veja a localidade no histórico de
                  endereços.
                </p>
              </div>
            </MapBody>
          </MapContent>

          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            onClick={(event) => handleClickMap(event)}
            // onUnmount={onUnmount}
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
                  icon={`./markerMarvel2.png`}
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
            setModal={setModal}
            data={address}
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
                  onClick={handleSaveAddres}
                >
                  ENVIAR QUADRINHOS PARA ENDEREÇO NO MAPA
                </ModalButtonAction>
              </ModalFooter>
            </ModalContent>
          </ModalCComponent>
        )}
      </div>
    </>
  )
}

export default memo(MapsPage)
