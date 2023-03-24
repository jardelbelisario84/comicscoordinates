import { useEffect, useState } from 'react'

import { Container } from '../../components/layout/Container'
import { Loading } from '../../components/Loading/Loading'
import { ModalCComponent } from '../../components/ModalCC'
import api from '../../service/axios'
import { CardCharacter, CardCharacterBackground, CardCharacterBody, CardContent, ModalBody, ModalContent, ModalImage, Pagination, PaginationItem } from './style'

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
      const response = await api.get('/v1/public/characters')
      setCharacters(response.data.data.results)
      setLoading(false)
    } catch (error) {
      setLoading(false)

    }
  }

  useEffect(() => {
    getComics()
  }, [])

  return (
    <>
      {loading ? (
        <Loading type={"bars"} color="#fff"/>
      ) : (
        <div>
          {/* <Banner /> */}

          <Container>
            <h1>Listagem de Personagens</h1>
            <p>
              Fique viciado em uma porção generosa de heróis e vilões da humilde
              House of Ideas!
            </p>
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
          </Container>
        </div>
      )}

      <div>
        {character && (
          <ModalCComponent
            openModal={openModal}
            closeModal={closeModal}
            modal={modal}
            setModal={setModal}
            data={character}
          >

            <ModalContent>
              <ModalImage>
                 <img src={`${character?.thumbnail?.path}.${character?.thumbnail?.extension}`}  alt="" />
              </ModalImage>
              <ModalBody numberComics={character?.comics?.returned}>
                <h1>{character?.name}</h1>
                <div>
                  <p>{character?.description ? character?.description: "Sem descrição cadastrada."}</p>
                </div>
                <div>
                  <h2>
                     <span>Quadrinhos desse personagem</span></h2>
                    {character?.comics?.items?.map((comic: any, key: number) => (
                      <p key={key}>{comic?.name ? comic?.name : "Sem quadrinhos cadastrados."}</p>
                    ))}
                </div>
              </ModalBody>
            </ModalContent>
            
          </ModalCComponent>
        )}
      </div>
    </>
  )
}
