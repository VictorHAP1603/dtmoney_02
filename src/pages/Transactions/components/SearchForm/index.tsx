import { MagnifyingGlass } from 'phosphor-react'
import { SearchFormContainer } from './style'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTransactions } from '../../../../hooks/useTransactions'
import { memo } from 'react'

const searchFormSchema = zod.object({
  query: zod.string(),
})

type SearchFormInputs = zod.infer<typeof searchFormSchema>

function SearchFormComponent() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  const loadTransactions = useTransactions('loadTransactions')

  async function handleSearchTransactions(data: SearchFormInputs) {
    loadTransactions(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register('query')}
      />

      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  )
}

export const SearchForm = memo(SearchFormComponent)
