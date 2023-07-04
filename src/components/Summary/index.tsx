import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from "phosphor-react";
import { SummaryContainer, SummaryContent } from "./style";

export function Summary() {
  return (
    <SummaryContainer>
      <SummaryContent>
        <div>
          <header>
            <p>Entradas</p>
            <ArrowCircleUp size={32} color="#00b37e" />
          </header>
          <strong>R$ 1000,00</strong>
        </div>

        <div>
          <header>
            <p>Saídas</p>
            <ArrowCircleDown size={32} color="#F75A68" />
          </header>
          <strong>R$ 1000,00</strong>
        </div>

        <div>
          <header>
            <p>Total</p>
            <CurrencyDollar size={32} color="#fff" />
          </header>
          <strong>R$ 1000,00</strong>
        </div>
      </SummaryContent>
    </SummaryContainer>
  )
}
