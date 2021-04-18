import useSearchForm from 'hooks/useSearchForm'
import Input from 'components/Input/Input'
import SearchForm from 'components/SearchForm/SearchForm'

export default function SearchWineForm() {
  const [handleSubmit, search, setSearch, isDisabled] = useSearchForm()

  return (
    <SearchForm
      isDisabled={isDisabled}
      onSubmit={event => handleSubmit(event, '/wine/recommendation/')}
      search={search}
      setSearch={setSearch}
    >
      <Input
        label="Get wine recommendations for your meal"
        placeholder="Type in a dish, ingredient or cuisine ..."
        onChange={e => setSearch(e.target.value)}
        type="text"
        name="searchInput"
        autoComplete="off"
        autoFocus
      />
    </SearchForm>
  )
}
