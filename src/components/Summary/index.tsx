import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from "phosphor-react";
import { SummaryCard, SummaryContainer, SummaryContent } from "./style";
import { useSummary } from "../../hooks/useSummary";
import { priceFormatter } from "../../utils/formatter";

export function Summary() {
  const summary = useSummary()

  return (
    <SummaryContainer>
      <SummaryContent>
        <SummaryCard>
          <header>
            <p>Entradas</p>
            <ArrowCircleUp size={32} color="#00b37e" />
          </header>
          <strong>{priceFormatter.format(summary.income)}</strong>
        </SummaryCard>

        <SummaryCard>
          <header>
            <p>Saídas</p>
            <ArrowCircleDown size={32} color="#F75A68" />
          </header>
          <strong>{priceFormatter.format(summary.outcome)}</strong>
        </SummaryCard>

        <SummaryCard variant="green">
          <header>
            <p>Total</p>
            <CurrencyDollar size={32} color="#fff" />
          </header>
          <strong>{priceFormatter.format(summary.total)}</strong>
        </SummaryCard>
      </SummaryContent>
    </SummaryContainer>
  )
}
