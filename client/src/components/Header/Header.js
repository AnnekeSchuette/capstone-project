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
  height: 75px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1em;
  color: var(--color-space-cadet);
  background-color: #fff;
  border-radius: 0 0 25px 25px;
  box-shadow: 0px 5px 5px #00000010;
  position: relative;
  z-index: 1;
`
const Title = styled.h1`
  font-family: 'Lora', sans-serif;
  font-size: 1.5em;
  font-weight: 300;
  line-height: 1;
  margin: 0;
  padding: 0;
  position: relative;

  ::after {
    content: '';
    width: 3px;
    height: 3px;
    right: -5px;
    bottom: 3px;
    background: var(--color-byzantine);
    position: absolute;
  }
`
const Subtitle = styled.h2`
  font-family: 'Josefin', sans-serif;
  font-size: 0.9em;
  margin: 5px 0 0 0;
`
