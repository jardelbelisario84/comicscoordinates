import { HeaderContainer, HeaderContent, HeaderLogo, HeaderMenu } from "./style";

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
          <li className="active">Quadrinhos</li>
          <li>Personagens</li>
          <li>Mapa</li>
          <li>Lista de endereços</li>
        </HeaderMenu>
          
      </HeaderContent>
    </HeaderContainer>
 
   
  );
}
