import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./style";
import { useForm } from "react-hook-form";
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const searchFormSchema = zod.object({
  query: zod.string()
})

type SearchFormInputs = zod.infer<typeof searchFormSchema>

export function SearchForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitting }
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema)
  })

  async function handleSearchTransactions(data: SearchFormInputs) {
    if (data.query.trim() === '') return

    await new Promise(resolve => setTimeout(resolve, 2000))

    console.log(data)
  }

  const query = watch('query')
  const isQueryEmpty = !query

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register('query')}
      />

      <button type="submit" disabled={isSubmitting || isQueryEmpty}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  )
}
