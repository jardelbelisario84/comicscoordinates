import { format, parseISO } from 'date-fns'
import { useEffect, useState } from 'react'
import Modal from 'react-modal'

import api from '../../service/axios'
import { BannerSubtitle, BannerTitle, CardCharacter, CardCharacterBackground, CardCharacterBody, CardContent, HomeBanner, HomeBannerContent, HomeContainer, HomeContent, HomeTitle, ModalBody, ModalBodyContent, ModalContent, ModalHeader, ModalHeaderButton, ModalTitle, Pagination, PaginationItem, TitleComics, TitleCoordinates } from './style'

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

export default function Characters() {
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
      const response = await api.get('/v1/public/characters')
      setCharacters(response.data.data.results)
      console.log(response.data.data.results)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getComics()
  }, [])

  return (
    <HomeContainer>
      <HomeBanner>
        <HomeBannerContent>
          <BannerTitle>
            <TitleComics>COMICS</TitleComics>
            <TitleCoordinates>COORDINATES</TitleCoordinates>
          </BannerTitle>
          <BannerSubtitle>
            Envie seus quadrinhos favoritos para um endereço no mapa
          </BannerSubtitle>

        </HomeBannerContent>
      </HomeBanner>

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
                  <h1>{character.name}</h1>
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
    </HomeContainer>
  )
}
