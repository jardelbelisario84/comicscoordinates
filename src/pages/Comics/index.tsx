import { useCallback, useEffect, useState } from 'react'

import { Card } from '../../components/Card'
import { Loading } from '../../components/Loading/Loading'
import { ModalCComponent } from '../../components/ModalCC'
import { Pagination } from '../../components/Pagination'
import { Container } from '../../components/layout/Container'
import api from '../../service/axios'
import { CardContent, ContainerComic, ModalBody, ModalContent, ModalImage } from './style'



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



type ComicProps = {
  title: string;
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


export default function Comics() {
  const [data, setData] = useState<any>()
  const [page, setPage] = useState(1)
  const [comics, setComics] = useState<ComicProps[]>([])
  const [comic, setComic] = useState<ComicProps>()
  const [modal, setModal] = useState(false)
  const [loading, setLoading] = useState(false)

  const openModal: any = (param: any) => {
    setComic(param)
    console.log(param)
    setModal(true)
  }

  const closeModal: any = () => {
    setModal(false)
  }

  const getComics = async () => {
    try {
      setLoading(true)
      const response = await api.get('/v1/public/comics')
      setComics(response.data.data.results)
      setData(response.data.data)
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
  }


  useEffect(() => {
    getComics()
  }, [])

  const updatePage = useCallback( async (nextPage: number) => {

    try {
      setLoading(true)
      const pageOffset = (nextPage * 20) - 20;

      const response = await api.get(`/v1/public/comics?offset=${pageOffset}`)
      setComics(response.data.data.results)
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
  }, []);

  return (
    <>
      {loading ? (
        <Loading type={"bars"} color="#fff"/>
      ) : (
        <div>

         <Container>
          
            {comics.length > 0 ? (
              <>
            <ContainerComic>
              <h1>Listagem de Quadrinhos</h1>
              <p>
                Conheça dezenas de Quadrinhos da Marvel
              </p>
            </ContainerComic>
            
              <CardContent>
                {comics.map((comic: any, key: number) => (
                  <Card onClick={() => openModal(comic)} data={comic} key={key}/>
                  ))}
              </CardContent>

              <Pagination 
              itemsPorPagina = {data?.limit}
              totalItems = {data?.total}
              paginate = {updatePage}
              maxPagesVisible={7}
              pageAction={page}
              />
            </>

            ): (
              <ContainerComic>
                <h1>Não foi encontrado nenhum resultado.</h1>
              </ContainerComic>
            )}

          </Container>
        </div>
      )}

      <div>
        {comic && (
          <ModalCComponent
            openModal={openModal}
            closeModal={closeModal}
            modal={modal}
          >

            
            <ModalContent>
              <ModalImage>
                 <img src={`${comic?.thumbnail?.path}.${comic?.thumbnail?.extension}`}  alt={comic?.title} />
              </ModalImage>
              <ModalBody numberComics={comic?.characters?.returned}>
                <h1>{comic?.title}</h1>
                <div>
                  <p>{comic?.description ? comic?.description: "Sem descrição cadastrada."}</p>
                </div>
                <div>
                  <h2>
                     <span>Personagens desse quadrinho</span></h2>
                     {comic?.characters?.items.length > 0 ? (
                      <div>
                       {comic?.characters?.items?.map((character: CharacterProps, key: number) => (
                         <p key={key}>{character?.name}</p>
                         ))}
                         </div>
                       ): (
                         <>
                         <p>Sem personagens cadastrados até o momento.</p>
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
