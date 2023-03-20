import { useEffect, useState } from "react";
import api from "../../service/axios";
import { CardCharacter, CardCharacterBackground, CardContent, HomeContainer, HomeContent, HomeTitle, Pagination, PaginationItem } from "./style";


export default function Home() {


  const [characters, setCharacters] = useState<any>({});

  const getComics = async () => {

    try {
          const response = await api.get("/v1/public/characters")
          setCharacters(response.data.data.results)
          console.log(response.data)
          console.log(response.data.data.results)
      
    } catch (error) { 
      console.log(error)
      
    }
  }

  useEffect(() => {
    getComics()
  },[])

  return (
    <HomeContainer>

      <HomeContent>

       <HomeTitle>Listagem de quadrinhos</HomeTitle>


    	  {characters.length > 0 && (

          <CardContent>

            {characters.map((character: any, key: number) =>(
              <CardCharacter key={key} >
                <CardCharacterBackground bgCardCharacter={`${character.thumbnail.path}.${character.thumbnail.extension}`}>

                
                </CardCharacterBackground>
                {/* <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt="" /> */}
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
    </HomeContainer>
  )
}
