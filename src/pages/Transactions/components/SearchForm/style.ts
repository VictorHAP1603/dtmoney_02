import { styled } from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    background-color: ${({ theme }) => theme['gray-900']};
    color: ${({ theme }) => theme['gray-300']};
    padding: 1rem;
    transition: all 0.4s;

    &::placeholder {
      color: ${({ theme }) => theme['gray-500']};
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme['green-300']};
    background-color: ${({ theme }) => theme['gray-800']};
    color: ${({ theme }) => theme['green-300']};
    gap: 0.75rem;
    font-weight: bold;
    padding: 1rem;
    transition: all 0.4s;
    cursor: pointer;

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    &:not(:disabled):hover,
    &:focus {
      background-color: ${({ theme }) => theme['green-500']};
      border-color: ${({ theme }) => theme['green-500']};
      color: ${({ theme }) => theme.white};
    }
  }
`
