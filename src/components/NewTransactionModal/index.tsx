import * as Dialog from '@radix-ui/react-dialog'
import { X, ArrowCircleUp, ArrowCircleDown } from 'phosphor-react'
import * as zod from 'zod'

import {
  CloseButton,
  Content,
  Overlay,
  TransactionType,
  TransactionTypeButton,
} from './style'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTransactions } from '../../hooks/useTransactions'

const newTransactionModalFormSchema = zod.object({
  description: zod.string().nonempty({ message: 'Descrição é obrigatória' }),
  price: zod.number().positive({ message: 'Preço é obrigatório' }),
  category: zod.string().nonempty({ message: 'Categoria é obrigatória' }),
  type: zod.enum(['income', 'outcome']),
})

type NewTransactionModalFormSchema = zod.infer<
  typeof newTransactionModalFormSchema
>

export function NewTransactionModal() {
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<NewTransactionModalFormSchema>({
    resolver: zodResolver(newTransactionModalFormSchema),
    defaultValues: {
      type: 'income',
    },
  })

  const createTransaction = useTransactions('createTransaction')

  async function handleCreateNewTransaction(
    data: NewTransactionModalFormSchema,
  ) {
    const { category, description, price, type } = data

    createTransaction({
      category,
      description,
      price,
      type,
    })

    reset()
  }

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>
        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input
            type="text"
            placeholder="Descrição"
            required
            {...register('description')}
          />
          <input
            type="number"
            placeholder="Preço"
            required
            {...register('price', { valueAsNumber: true })}
          />
          <input
            type="text"
            placeholder="Categoria"
            required
            {...register('category')}
          />

          <Controller
            control={control}
            name="type"
            render={({ field }) => {
              return (
                <TransactionType
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <TransactionTypeButton variant="income" value="income">
                    <ArrowCircleUp size={24} />
                    Entrada
                  </TransactionTypeButton>

                  <TransactionTypeButton variant="outcome" value="outcome">
                    <ArrowCircleDown size={24} />
                    Saída
                  </TransactionTypeButton>
                </TransactionType>
              )
            }}
          />

          <button type="submit" disabled={isSubmitting}>
            Cadastrar
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
