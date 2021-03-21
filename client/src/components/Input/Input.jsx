import styled from 'styled-components/macro'

export default function Input({ label, name, className, placeholder, id }) {
  return (
    <InputWrapper className={'Input ' + className}>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <InputField id={id} type="text" name={name} placeholder={placeholder} />
    </InputWrapper>
  )
}

const InputWrapper = styled.div`
  display: grid;
  place-items: center;
  gap: 10px;
`
const InputField = styled.input`
  border: 1px solid var(--color-midnight-punch);
  padding: var(--space-small);
  font-size: 0.9em;
  font-weight: 300;
  border-radius: var(--space-large);
  background: var(--color-ghost-white);
`
const InputLabel = styled.label`
  color: var(--color-ghost-white);
`
