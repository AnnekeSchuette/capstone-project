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
`
const InputField = styled.input`
  border: 1px solid #222;
  padding: 5px 10px;
  font-size: 1em;
`
const InputLabel = styled.label`
  color: #222;
`
