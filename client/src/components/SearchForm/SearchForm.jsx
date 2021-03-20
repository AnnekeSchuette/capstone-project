import styled from 'styled-components/macro'
import Button from 'components/Button/Button'
import Input from 'components/Input/Input'

export default function SearchForm({ search, setSearch }) {
  return (
    <SearchFormWrapper onSubmit={handleSubmit}>
      <Input
        label="Get recommendations for your meal"
        placeholder="Type in a dish, ingredient or cuisine ..."
        onChange={e => setSearch(e.target.value)}
        type="text"
        value={search}
        name="searchInput"
      />
      <Button buttonText="Submit" />
    </SearchFormWrapper>
  )
  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const { searchInput } = form.elements

    setSearch({
      searchInput: searchInput.value.split(',').map(query => query.trim()),
    })

    //form.reset()
    //searchInput.focus()
  }
}
const SearchFormWrapper = styled.form`
  display: grid;
  gap: 20px;
`
