import ReactLoading, { LoadingType } from 'react-loading';

import { LoadingMessage } from './style';

type Props = {
  type?: LoadingType | undefined
  color?: string;
}

export function Loading({ type, color }: Props) {
  return (
    <LoadingMessage>
      <div>
      <ReactLoading type={type} color={color} height={'30px'} width={'30px'} />
      <h2>Aguarde, carregando dados</h2>

      </div>

    </LoadingMessage>
  )
}
