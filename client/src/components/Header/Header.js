import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
}

export default function Header({ title, subtitle }) {
  return (
    <HeaderStyled>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </HeaderStyled>
  )
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
  background-color: white;
`
const Title = styled.h1`
  font-family: 'Merriweather', sans-serif;
  background-image: linear-gradient(
    145deg,
    var(--color-secondary) 18%,
    var(--color-primary) 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
`
const Subtitle = styled.h2`
  font-family: 'Lora', sans-serif;
  background-image: linear-gradient(
    145deg,
    var(--color-secondary) 18%,
    var(--color-primary) 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
`
