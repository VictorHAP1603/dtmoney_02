import {
  TransactionsContext,
  TransactionsContextProps,
} from '../contexts/TransactionsContext'
import { useContextSelector } from 'use-context-selector'

export function useTransactions<K extends keyof TransactionsContextProps>(
  contextSelector: K,
) {
  const context = useContextSelector(TransactionsContext, (context) => {
    return context[contextSelector]
  })
  return context
}
