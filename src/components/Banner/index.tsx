// import { SBanner, SBody, SContainer, STitle } from '../Loading/Loading'
import { SBanner, SBody, SContainer, STitle } from './style'

type Props = {
  titlePage?: string
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
       <SBody>
       <h1>
          Conheça diversos Quadrinhos e Personagens da Marvel.
        </h1>
       <p>
          Envie seus quadrinhos favoritos para um endereço
          aleatório no nosso mapa interativo.
        </p>
       </SBody>
        <h2>{titlePage}</h2>
      </SContainer>
    </SBanner>
  )
}
