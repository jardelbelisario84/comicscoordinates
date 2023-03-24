import { CardBackground, CardBody, CardStyled } from "./style";

type Props = {
  onClick: (param: object) => void;
  data: any;
  key: any
}

export function Card ({onClick, data, key}: Props) {

  
  return (
     
      <CardStyled onClick={onClick} key={key}>
        <CardBackground
          bgCard={`${data.thumbnail.path}.${data.thumbnail.extension}`}
        />
        <CardBody>
          <h1>{data?.title ? data?.title : data?.name}</h1>
        </CardBody>
      </CardStyled>

  )
}