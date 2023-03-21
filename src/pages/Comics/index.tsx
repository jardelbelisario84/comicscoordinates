import { format, parseISO } from 'date-fns'
import { useEffect, useState } from 'react'
import Modal from 'react-modal'

import { Loading } from '../../components/Loading/Loading'
import api from '../../service/axios'
import {
  Banner,
  BannerContainer,
  BannerTitle,
  CardCharacter,
  CardCharacterBackground,
  CardCharacterBody,
  CardContent,
  HomeContent,
  HomeTitle,
  ModalBody,
  ModalBodyContent,
  ModalContent,
  ModalHeader,
  ModalHeaderButton,
  ModalTitle,
  Pagination,
  PaginationItem,
} from './style'

const customStyles = {
  content: {
    top: '20%',
    left: '10%',
    right: '10%',
    bottom: '10%',
    border: 'none',
    backgroundColor: '#121214',
  },
}

Modal.setAppElement('#root')

export default function Comics() {
  const [characters, setCharacters] = useState<any>({})
  const [character, setCharacter] = useState<any>({})
  const [modal, setModal] = useState(false)
  const [loading, setLoading] = useState(false)

  const openModal: any = (param: any) => {
    setCharacter(param)
    setModal(true)
  }

  const closeModal: any = () => {
    setModal(false)
  }

  const getComics = async () => {
    try {
      setLoading(true)
      const response = await api.get('/v1/public/comics')
      setCharacters(response.data.data.results)
      setLoading(false)
      console.log(response.data.data.results)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getComics()
  }, [])

  return (
    <>
      <Banner>
        <BannerContainer>
          <BannerTitle>
            <h1>COMICS</h1>
            <span>COORDINATES</span>
          </BannerTitle>

          <p>Envie seus quadrinhos favoritos para um endereço no mapa</p>

          {loading && <Loading />}
        </BannerContainer>
      </Banner>

      <HomeContent>
        <HomeTitle>Listagem de quadrinhos</HomeTitle>

        {characters.length > 0 && (
          <CardContent>
            {characters.map((character: any, key: number) => (
              <CardCharacter key={key} onClick={() => openModal(character)}>
                <CardCharacterBackground
                  bgCardCharacter={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                />
                <CardCharacterBody>
                  <h1>{character.title}</h1>
                </CardCharacterBody>
              </CardCharacter>
            ))}
          </CardContent>
        )}

        <Pagination>
          <PaginationItem bgPagintationActive={true}>1</PaginationItem>
          <PaginationItem>2</PaginationItem>
          <PaginationItem>3</PaginationItem>
          <PaginationItem>4</PaginationItem>
          <PaginationItem>5</PaginationItem>
          <PaginationItem>6</PaginationItem>
          <PaginationItem>7</PaginationItem>
          <PaginationItem>8</PaginationItem>
        </Pagination>
      </HomeContent>

      <div>
        <Modal
          isOpen={modal}
          onRequestClose={closeModal}
          style={customStyles}
          shouldCloseOnOverlayClick={true}
        >
          <ModalContent>
            <ModalHeader>
              <ModalHeaderButton onClick={closeModal}>X</ModalHeaderButton>
            </ModalHeader>

            <ModalBody>
              <img
                src={`${character?.thumbnail?.path}.${character?.thumbnail?.extension}`}
                alt=""
              />

              <ModalBodyContent>
                <ModalTitle>{character?.title}</ModalTitle>

                <li>
                  <h2>Publicados:</h2>
                  <span>
                    Data:{' '}
                    {character?.dates?.[0]?.date &&
                      format(
                        parseISO(character?.dates?.[0]?.date),
                        'dd/MM/yyyy',
                      )}
                  </span>
                </li>

                <li>
                  <h2>Versão digital:</h2>
                  <span>
                    {character?.prices?.[1]
                      ? 'Preço: $ ' + character?.prices?.[1]?.price
                      : 'A edição digital não está disponível no momento'}
                  </span>
                </li>
              </ModalBodyContent>
            </ModalBody>
          </ModalContent>
        </Modal>
      </div>
    </>
  )
}
