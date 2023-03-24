import { useEffect, useState } from 'react'

import { Container } from '../../components/layout/Container'
import { Loading } from '../../components/Loading/Loading'
import Modal from '../../components/Modal'
import api from '../../service/axios'
import { CardCharacter, CardCharacterBackground, CardCharacterBody, CardContent, Pagination, PaginationItem } from './style'

type ComicProps = {
  title: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  dates: []
}


export default function Comics() {
  const [characters, setCharacters] = useState<ComicProps[]>([])
  const [character, setCharacter] = useState<ComicProps | {}>({})
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
      console.log(response)
      console.log(response.data.data.results)
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
            <h1>Listagem de Quadrinhos</h1>
            <p>Vários quadrinhos para você conhecer</p>
            {characters.length > 0 && (
              <CardContent>
                {characters.map((character: ComicProps, key: number) => (
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
          <Modal
            openModal={openModal}
            closeModal={closeModal}
            modal={modal}
            data={character}
          />
        )}
      </div>
    </>
  )
}
