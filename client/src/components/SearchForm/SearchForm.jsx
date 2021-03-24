import styled from 'styled-components/macro'
import Button from 'components/Button/Button'
import Input from 'components/Input/Input'

export default function SearchForm({
  onSubmit,
  isDisabled,
  search,
  setSearch,
}) {
  return (
    <SearchFormWrapper onSubmit={onSubmit}>
      <Input
        label="Get wine recommendations for your meal"
        placeholder="Type in a dish, ingredient or cuisine ..."
        onChange={e => setSearch(e.target.value)}
        type="text"
        name="searchInput"
        value={search}
      />
      <Button buttonText="Submit" disabled={isDisabled} />
    </SearchFormWrapper>
  )
}
const SearchFormWrapper = styled.form`
  display: grid;
  gap: 20px;
  place-content: center;

  label {
    div {
      font-size: 1.4em;
      margin: var(--space-large) 0 var(--space-large);
    }
  }

  button {
    text-align: center;
    place-content: center;
    margin: 0 var(--space-large);
  }
`
