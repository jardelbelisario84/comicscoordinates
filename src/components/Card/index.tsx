import { CardBackground, CardBody, CardStyled } from "./style";

type Props = {
  onClick: (param: object) => void;
  data: any;
  key: any
}

export function Card ({onClick, data, key}: Props) {

const handleLimitString = (dataProps: any) => {  

  if(dataProps){
    if(dataProps.length > 40){
      const string = dataProps.substr(0,20)
      return `${string}...`
    }
  }

  const string = dataProps.substr(0,40)
  return `${string}`



}  

  return (
     
      <CardStyled onClick={onClick} key={key}>
        <CardBackground
          bgCard={`${data.thumbnail.path}.${data.thumbnail.extension}`}
        />
        <CardBody>
          <h1>{data?.title ? handleLimitString(data?.title) : handleLimitString(data?.name) }</h1>
        </CardBody>
      </CardStyled>

  )
}