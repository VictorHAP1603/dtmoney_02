import styled from 'styled-components'

import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const NewTransactionModalContainer = styled.div``

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.5);
`

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background-color: ${({ theme }) => theme['gray-800']};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;

  gap: 1rem;

  z-index: 101;

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    margin-top: 2rem;

    input {
      border-radius: 6px;
      border: 0;
      background-color: ${({ theme }) => theme['gray-900']};
      color: ${({ theme }) => theme['gray-300']};
      padding: 1rem;
    }

    button[type='submit'] {
      height: 50px;
      border: 0;
      background-color: ${({ theme }) => theme['green-500']};
      color: ${({ theme }) => theme.white};
      border-radius: 6px;
      font-weight: bold;
      padding: 0 1.25rem;
      cursor: pointer;
      margin-top: 1.5rem;

      transition: all 0.2s;

      &:not(:disabled):hover {
        background-color: ${({ theme }) => theme['green-700']};
      }

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
    }
  }
`

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  border: 0;
  cursor: pointer;
  color: ${({ theme }) => theme['gray-300']};
`

export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 0%.5rem;
`

interface TransactionTypeButtonProps {
  variant: 'income' | 'outcome'
}

export const TransactionTypeButton = styled(
  RadioGroup.Item,
)<TransactionTypeButtonProps>`
  background-color: ${({ theme }) => theme['gray-700']};
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 6px;
  border: 0;
  color: ${({ theme }) => theme['gray-300']};
  cursor: pointer;

  transition: all 0.4s;

  svg {
    transition: all 0.4s;
    color: ${({ theme, variant }) =>
      variant === 'income' ? theme['green-500'] : theme['red-500']};
  }

  &[data-state='unchecked'] {
    &:hover {
      background-color: ${({ theme }) => theme['gray-600']};
    }
  }

  &[data-state='checked'] {
    color: ${({ theme }) => theme.white};
    background-color: ${(p) =>
      p.variant === 'income' ? p.theme['green-500'] : p.theme['red-500']};

    svg {
      color: ${({ theme }) => theme.white};
    }
  }
`
