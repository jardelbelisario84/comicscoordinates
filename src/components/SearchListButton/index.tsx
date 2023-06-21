import { ButtonSearchResult } from './style';

type Props = {
    onClick: any,

}

export function SearchListButton ({ onClick }: Props) {
    

  return (
    <ButtonSearchResult onClick={() => onClick()}>Listar todos</ButtonSearchResult>
  );
};