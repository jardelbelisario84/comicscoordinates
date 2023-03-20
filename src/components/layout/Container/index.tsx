import { ReactNode } from "react";
import { ContainerStyled } from "./style";
type Props = {
  children: ReactNode
}
export function Container({children}: Props) {
  return (
    <>
    <ContainerStyled>
      {children}
    </ContainerStyled>
    </>
  );
}
