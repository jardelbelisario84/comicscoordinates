import { useEffect, useState } from "react";
import api from "../../service/axios";
import { HomeContainer, HomeContent } from "./style";


export default function Home() {


  const [dada, setData] = useState();

  const getComics = async () => {
    const response = await api.get("/v1/public/comics")
    setData(response.data)
    console.log(response.data)
  }

  useEffect(() => {

    getComics()

  },[])

  return (
    <HomeContainer>
      <HomeContent>

      <h1>HOME PAGE</h1>
      </HomeContent>
    </HomeContainer>
  )
}
