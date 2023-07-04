import { HeaderContainer, HeaderContent, NewTransactionButton } from "./style";

import LogoImg from '../../assets/img/logo.png'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={LogoImg} />
        <NewTransactionButton>Nova Transação</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  )
}
