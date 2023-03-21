import styled from 'styled-components'

type PropsBgCardCharacter = {
  bgCardCharacter: string
}

type PropsPaginationItem = {
  bgPagintationActive?: boolean
}

export const TitleComics = styled.div`
  font-size: 4rem;
  font-weight: bold;
  background-color: ${(props) => props.theme['red-900']};
  color: #fff;
`
export const TitleCoordinates = styled.div`
  font-size: 4rem;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
  border: 1px solid ${(props) => props.theme['red-900']};
  shadow: 2px 2px 1px ${(props) => props.theme['gray-900']};
`

export const BannerSubtitle = styled.h2`
  font-size: 1.5rem;
  color: #fff;
  margin: 1rem 0;
`

export const HomeContent = styled.div`
  background: ${(props) => props.theme['gray-900']};
  width: 100%;
  max-width: 1120px;
  height: 100%;
  margin: 5rem auto;
  padding: 0 1.5rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const HomeTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: ${(props) => props.theme['gray-100']};
`

export const CardContent = styled.div`
  margin: 4rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 40px;
`

export const CardCharacter = styled.div`
  width: 21rem;
  margin-bottom: 2rem;
  height: 17.5rem;
  border-radius: 10px;

  width: 224px;
  height: 336px;
  border: 1px solid #000000;
  overflow: hidden;
  cursor: pointer;

  display: flex;
  flex-direction: column;
`

export const CardCharacterBackground = styled.div<PropsBgCardCharacter>`
  width: 100%;
  height: 300px;
  background: url(${(props) =>
    props.bgCardCharacter ?? props.theme['gray-300']});
  background-repeat: no-repeat;
  background-size: cover;
  transition: 0.5s;

  :hover {
    transform: scale(1.1);
  }
`
export const CardCharacterBody = styled.div`
  width: 100%;
  height: 50px;
  background: ${(props) => props.theme['red-900']};

  display: flex;
  justify-content: center;
  align-items: center;

  & h1 {
    font-size: 1rem;
    margin: 5px 10px;
    color: #fff;
  }
`

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4;

  width: 100%;
`

export const PaginationItem = styled.div<PropsPaginationItem>`
  width: 40px;
  height: 40px;
  border-radius: 4px;
  background-color: ${(props) =>
    props.bgPagintationActive
      ? (props) => props.theme['red-900']
      : (props) => props.theme['gray-500']};
  margin: 0 5px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  :hover {
    background-color: ${(props) => props.theme['red-500']};
  }
`

export const OverlayStyled = styled.div`
  background-color: ${(props) => props.theme['green-500']};
`
