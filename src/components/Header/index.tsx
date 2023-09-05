import * as Dialog from '@radix-ui/react-dialog'

import { HeaderContainer, HeaderContent, NewTransactionButton } from './style'

import LogoImg from '../../assets/img/logo.png'
import { NewTransactionModal } from '../NewTransactionModal'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={LogoImg} alt="Logo" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
