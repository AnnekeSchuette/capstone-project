import styled from 'styled-components/macro'

export default function Input({ label, name, value, placeholder, onChange }) {
  return (
    <InputWrapper>
      <InputLabel>
        <InputLabelText>{label}</InputLabelText>
        <InputField
          type="text"
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
      </InputLabel>
    </InputWrapper>
  )
}

const InputWrapper = styled.div`
  display: grid;
  place-items: center;
  gap: 10px;
`
const InputField = styled.input`
  border: 1px solid var(--color-midnight-blue);
  padding: var(--space-small);
  font-size: 0.9em;
  font-weight: 300;
  border-radius: var(--space-large);
  background: var(--color-ghost-white);
`
const InputLabel = styled.label`
  color: var(--color-ghost-white);
`
const InputLabelText = styled.div`
  text-align: center;
`
