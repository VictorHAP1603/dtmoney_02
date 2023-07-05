import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from "phosphor-react";
import { SummaryCard, SummaryContainer, SummaryContent } from "./style";

export function Summary() {
  return (
    <SummaryContainer>
      <SummaryContent>
        <SummaryCard>
          <header>
            <p>Entradas</p>
            <ArrowCircleUp size={32} color="#00b37e" />
          </header>
          <strong>R$ 1000,00</strong>
        </SummaryCard>

        <SummaryCard>
          <header>
            <p>Saídas</p>
            <ArrowCircleDown size={32} color="#F75A68" />
          </header>
          <strong>R$ 1000,00</strong>
        </SummaryCard>

        <SummaryCard variant="green">
          <header>
            <p>Total</p>
            <CurrencyDollar size={32} color="#fff" />
          </header>
          <strong>R$ 1000,00</strong>
        </SummaryCard>
      </SummaryContent>
    </SummaryContainer>
  )
}
