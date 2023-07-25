import { Summary } from "../../components/Summary";
import { useTransactions } from "../../contexts/TransactionsContext";
import { SearchForm } from "./components/SearchForm";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./style";


export function Transactions() {
  const { transactions } = useTransactions()

  return (
    <TransactionsContainer>
      <Summary />
      <SearchForm />

      <TransactionsTable>
        <tbody>
          {transactions.length > 0 && transactions.map(transaction => (
            <tr key={transaction.id}>
              <td width="50%">{transaction.description}</td>
              <td>
                <PriceHighlight type={transaction.type}>
                  {transaction.price}
                </PriceHighlight>
              </td>
              <td>{transaction.category}</td>
              <td>{transaction.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </TransactionsTable>

    </TransactionsContainer>
  )
}
