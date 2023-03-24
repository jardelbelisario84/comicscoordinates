
import { useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { NavLink } from 'react-router-dom'
import { ButtonIcon, HeaderContainer, HeaderContent, HeaderContentMobile, HeaderLogo, HeaderMenuDesktop, HeaderMenuMobile } from './style'
export function Header() {

  const [menuMobile, setMenuMobile] = useState(false)

  const handleMenuMobile = () => {
    setMenuMobile(!menuMobile)
  } 

  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderLogo>
          <img src="./marvel.svg" alt="" />
          <h1>API WEB</h1>
        </HeaderLogo>

        <ButtonIcon onClick={handleMenuMobile}> 
          <RxHamburgerMenu size={30} color="#fff"/>
        </ButtonIcon>

        <HeaderMenuDesktop>
          <NavLink to="/">Início</NavLink>
          <NavLink to="/comics">Quadrinhos</NavLink>
          <NavLink to="/characters">Personagens</NavLink>
          <NavLink to="/maps">Mapa</NavLink>
          <NavLink to="/address">Histórico de endereços</NavLink>
        </HeaderMenuDesktop>
        



      </HeaderContent>
      <HeaderContentMobile visible={menuMobile}>

        <HeaderMenuMobile>
          <NavLink to="/">Início</NavLink>
          <NavLink to="/comics">Quadrinhos</NavLink>
          <NavLink to="/characters">Personagens</NavLink>
          <NavLink to="/maps">Mapa</NavLink>
          <NavLink to="/address">Histórico de endereços</NavLink>
        </HeaderMenuMobile>

      </HeaderContentMobile>
    </HeaderContainer>
  )
}
