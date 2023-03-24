import { useEffect, useState } from 'react'

import { Card } from '../../components/Card'
import { Loading } from '../../components/Loading/Loading'
import { ModalCComponent } from '../../components/ModalCC'
import { Pagination } from '../../components/Pagination'
import { Container } from '../../components/layout/Container'
import api from '../../service/axios'
import { CardContent, ContainerCharacter, ModalBody, ModalContent, ModalImage } from './style'


type ComicProps = {
  name: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  description: string;
  characters: {
    items: [];
    returned: number
  };
  dates: []
}



type CharacterProps = {
  name: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  description: string;
  comics: {
    items: [];
    returned: number
  }
}


export default function Comics() {
  const [characters, setCharacters] = useState<CharacterProps[]>([])
  const [character, setCharacter] = useState<CharacterProps>()
  const [modal, setModal] = useState(false)
  const [loading, setLoading] = useState(false)

  const openModal: any = (param: any) => {
    setCharacter(param)
    setModal(true)
  }

  const closeModal: any = () => {
    setModal(false)
  }

  const getCharacters = async () => {
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
    getCharacters()
  }, [])

  return (
    <>
      {loading ? (
        <Loading type={"bars"} color="#fff"/>
      ) : (
        <div>
         <Container>
            <ContainerCharacter>
              <h1>Listagem de Personagens</h1>
              <p>
                Fique viciado em uma porção generosa de heróis e vilões da humilde
                House of Ideas!
              </p>
            </ContainerCharacter>
            
            {characters.length > 0 && (
              
              <CardContent>
                {characters.map((character: any, key: number) => (
                  <Card onClick={() => openModal(character)} data={character} key={key}/>
                ))}
              </CardContent>
            )}

            <Pagination />
          
          </Container>
        </div>
      )}

      <div>
        {character && (
          <ModalCComponent
            openModal={openModal}
            closeModal={closeModal}
            modal={modal}
          >

            <ModalContent>
              <ModalImage>
                 <img src={`${character?.thumbnail?.path}.${character?.thumbnail?.extension}`}  alt={character?.name} />
              </ModalImage>
              <ModalBody numberComics={character?.comics?.returned}>
                <h1>{character?.name}</h1>
                <div>
                  <p>{character?.description ? character?.description: "Sem descrição cadastrada."}</p>
                </div>


                <div>
                  <h2>
                    <span>Quadrinhos desse personagem</span></h2>
                     {character?.comics?.items.length > 0 ? (
                      <div>
                       {character?.comics?.items?.map((comic: ComicProps, key: number) => (
                         <p key={key}>{comic?.name}</p>
                         ))}
                         </div>
                       ): (
                         <>
                         <p>Sem quadrinhos cadastrados até o momento.</p>
                       </>

                     )}

                </div>
              </ModalBody>
            </ModalContent>
            
          </ModalCComponent>
        )}
      </div>
    </>
  )
}
