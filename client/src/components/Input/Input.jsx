import styled from 'styled-components/macro'

export default function Input({
  label,
  name,
  value,
  placeholder,
  id,
  onChange,
}) {
  return (
    <InputWrapper>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <InputField
        id={id}
        type="text"
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
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
