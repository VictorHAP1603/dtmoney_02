import { useState, useEffect, useCallback } from 'react'
import { api } from '../services/api'
import { createContext } from 'use-context-selector'

interface Transaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}

interface CreateTransactionProps {
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
}

export interface TransactionsContextProps {
  transactions: Transaction[]
  loadTransactions: (query?: string) => Promise<void>
  createTransaction: (transaction: CreateTransactionProps) => Promise<void>
}

interface TransactionsProviderProps {
  children: React.ReactNode
}

export const TransactionsContext = createContext({} as TransactionsContextProps)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  const loadTransactions = useCallback(async (query?: string) => {
    const response = await api.get('/transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    })

    setTransactions(response.data)
  }, [])

  const createTransaction = useCallback(
    async (transaction: CreateTransactionProps) => {
      const { category, description, price, type } = transaction

      const response = await api.post('/transactions', {
        category,
        description,
        price,
        type,
        createdAt: new Date(),
      })

      setTransactions((oldTransactions) => [response.data, ...oldTransactions])
    },
    [],
  )

  useEffect(() => {
    loadTransactions()
  }, [loadTransactions])

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        loadTransactions,
        createTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
