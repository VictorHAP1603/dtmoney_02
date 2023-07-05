import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./style";

export function Transactions() {
  return (
    <TransactionsContainer>
      <Summary />

      <SearchForm />

      <TransactionsTable>
        <tbody>
          <tr>
            <td width="50%">Aluguel do apartamento</td>
            <td>
              <PriceHighlight type="outcome">
                - R$ 1.200,00
              </PriceHighlight>
            </td>
            <td>Casa</td>
            <td>27/03/2022</td>
          </tr>

          <tr>
            <td width="50%">Computador</td>
            <td>
              <PriceHighlight type="income">
                R$ 5.000,00
              </PriceHighlight>
            </td>
            <td>Venda</td>
            <td>15/03/2022</td>
          </tr>
        </tbody>
      </TransactionsTable>

    </TransactionsContainer>
  )
}
