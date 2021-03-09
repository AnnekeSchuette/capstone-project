import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

export default function AppHeader({ title, subtitle }) {
  return (
    <HeaderStyled>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </HeaderStyled>
  )
}

AppHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
}

const HeaderStyled = styled.header`
  height: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1em;
  color: white;
  background: var(--color-space-cadet);
`
const Title = styled.h1`
  font-family: 'Merriweather', sans-serif;
`
const Subtitle = styled.h2`
  font-family: 'Lora', sans-serif;
`
