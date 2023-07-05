import styled from 'styled-components'

export const TransactionsContainer = styled.main`
  max-width: 1120px;
  margin: 0 auto;

  padding: 0rem 1.5rem;
`

export const TransactionsTable = styled.table`
  width: 100%;
  border-spacing: 0 0.5rem;
  border-collapse: separate;
  margin-top: 1.5rem;

  td {
    padding: 1.25rem 2rem;
    border: 0;
    background-color: ${({ theme }) => theme['gray-700']};

    color: ${({ theme }) => theme['gray-300']};

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`

interface PriceHighlightProps {
  type: 'income' | 'outcome'
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
  color: ${({ type, theme }) => (type === 'income' ? theme['green-300'] : theme['red-300'])};
`
