import { useTransactions } from "./useTransactions"

export function useSummary() {
  const { transactions } = useTransactions()

  const summary = transactions.reduce((acc, transaction) => {
    const type = transaction.type
    acc[type] += transaction.price

    acc.total = acc.income - acc.outcome

    return acc
  }, {
    income: 0,
    outcome: 0,
    total: 0
  })

  return summary
}
