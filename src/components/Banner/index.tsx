// import { Loading } from '../Loading/Loading'
import { SBanner, SContainer, STitle } from './style'

type Props = {
  titlePage: string
}

export function Banner({ titlePage }: Props) {
  return (
    <SBanner>
      <SContainer>
        <STitle>
          <h1>
            COMICS
            <span>COORDINATES</span>
          </h1>
        </STitle>
        <p>
          Acesse o Mapa. Envie seus quadrinhos favoritos para um endereço
          aleatório no mapa
        </p>
        <h2>{titlePage}</h2>
      </SContainer>
    </SBanner>
  )
}
