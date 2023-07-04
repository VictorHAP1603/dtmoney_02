import { styled } from "styled-components";

export const SummaryContainer = styled.header`
  /* background-color: ${({ theme }) => theme["gray-900"]}; */
  padding: 2.5rem 0 7.5rem;
`

export const SummaryContent = styled.div`
  width: 100%;
  max-width: 1120px;

  margin: 0 auto;
  padding: 0 1.5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  margin-top: -5rem;


  div {
    width: 100%;
    background-color: ${({ theme }) => theme["gray-700"]};
    border-radius: 6px;
  }
`
