import { css, styled } from 'styled-components'

export const SummaryContainer = styled.header`
  padding: 2.5rem 0 0;
  margin-bottom: 4rem;
`

export const SummaryContent = styled.div`
  width: 100%;
  max-width: 1120px;

  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  margin-top: -7.5rem;
`

interface SummaryCardProps {
  variant?: 'green'
}

export const SummaryCard = styled.div<SummaryCardProps>`
  width: 100%;
  background-color: ${({ theme }) => theme['gray-600']};
  border-radius: 6px;
  padding: 2rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${({ theme }) => theme['gray-300']};
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
    color: ${({ theme }) => theme.white};
  }

  ${({ variant }) =>
    variant === 'green' &&
    css`
      background-color: ${({ theme }) => theme['green-700']};
    `}
`
