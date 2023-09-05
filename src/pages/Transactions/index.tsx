import { Summary } from '../../components/Summary'
import { useTransactions } from '../../hooks/useTransactions'
import { dateFormatter, priceFormatter } from '../../utils/formatter'
import { SearchForm } from './components/SearchForm'
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from './style'

export function Transactions() {
  const transactions = useTransactions('transactions')

  return (
    <TransactionsContainer>
      <Summary />
      <SearchForm />

      <TransactionsTable>
        <tbody>
          {transactions.length > 0 &&
            transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td width="50%">{transaction.description}</td>
                <td>
                  <PriceHighlight type={transaction.type}>
                    {transaction.type === 'outcome' && '- '}
                    {priceFormatter.format(transaction.price)}
                  </PriceHighlight>
                </td>
                <td>{transaction.category}</td>
                <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
              </tr>
            ))}
        </tbody>
      </TransactionsTable>
    </TransactionsContainer>
  )
}
