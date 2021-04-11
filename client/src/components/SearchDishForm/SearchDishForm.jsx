import useSearchForm from 'hooks/useSearchForm'
import Input from 'components/Input/Input'
import SearchForm from 'components/SearchForm/SearchForm'

export default function SearchDishForm() {
  const [handleSubmit, search, setSearch, isDisabled] = useSearchForm()

  return (
    <SearchForm
      isDisabled={isDisabled}
      onSubmit={event => handleSubmit(event, '/dish-pairing/result/')}
      search={search}
      setSearch={setSearch}
    >
      <Input
        label="Find dishes to complement your wine"
        placeholder="Type in wine type, e.g. 'Shiraz', 'Riesling' ..."
        onChange={e => setSearch(e.target.value)}
        type="text"
        name="searchInput"
        autoComplete="off"
        autoFocus
      />
    </SearchForm>
  )
}
