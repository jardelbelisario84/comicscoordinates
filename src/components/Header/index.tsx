import { NavLink } from 'react-router-dom'

import { HeaderContainer, HeaderContent, HeaderLogo, HeaderMenu } from './style'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderLogo>
          <img src="./marvel.svg" alt="" />
          {/* <h1>Comics Coordinates</h1> */}
          <h1>API WEB</h1>
        </HeaderLogo>

        <HeaderMenu>
          <NavLink to="/">Início</NavLink>
          <NavLink to="/comics">Quadrinhos</NavLink>
          <NavLink to="/characters">Personagens</NavLink>
          <NavLink to="/maps">Mapa</NavLink>
          <NavLink to="/address">Histórico de endereços</NavLink>
        </HeaderMenu>
      </HeaderContent>
    </HeaderContainer>
  )
}
