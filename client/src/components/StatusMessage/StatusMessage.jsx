import styled from 'styled-components/macro'

export default function StatusMessage({ ...props }) {
  return (
    <StatusMessageBlock role="alert" {...props}>
      {props.children}
    </StatusMessageBlock>
  )
}
const StatusMessageBlock = styled.div`
  display: grid;
  gap: var(--space-medium);
  place-items: center;
  text-align: center;
  font-size: 1.2em;

  svg {
    stroke: var(--color-midnight-blue);
  }
`
