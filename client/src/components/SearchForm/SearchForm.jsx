import styled from 'styled-components/macro'
import Button from 'components/Button/Button'

export default function SearchForm({
  onSubmit,
  isDisabled = true,
  search,
  setSearch,
  ...props
}) {
  return (
    <SearchFormWrapper onSubmit={onSubmit} {...props}>
      {props.children}
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
