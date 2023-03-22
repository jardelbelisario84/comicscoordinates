import { useEffect, useState } from 'react'

import { Banner } from '../../components/Banner'
import { Container } from '../../components/layout/Container'
import { Loading } from '../../components/Loading/Loading'
import { ModalComponent } from '../../components/ModalC'
import api from '../../service/axios'
import { CardCharacter, CardCharacterBackground, CardCharacterBody, CardContent, Pagination, PaginationItem } from './style'

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
        <Loading />
      ) : (
        <div>
          <Banner titlePage="Listagem de Personagens" />

          <Container>
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
          </Container>
        </div>
      )}

      <div>
        {character && (
          <ModalComponent
            openModal={openModal}
            closeModal={closeModal}
            modal={modal}
            setModal={setModal}
            data={character}
          />
        )}
      </div>
    </>
  )
}
