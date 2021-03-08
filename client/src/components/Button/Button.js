import styled from 'styled-components/macro'
import * as Icons from 'heroicons-react'
import PropTypes from 'prop-types'

export default function Button({ buttonText, iconName, iconPos = '' }) {
  console.log(iconName)
  return (
    <ButtonStyled role="button" iconPos={iconPos} iconName={iconName}>
      {iconPos === 'left' && <Icons.ArrowCircleLeft size={20} />}
      {buttonText}
      {iconPos === 'right' && <Icons.ArrowCircleRight size={20} />}
    </ButtonStyled>
  )
}

Button.propTypes = {
  buttontext: PropTypes.string,
  iconName: PropTypes.string,
  iconPos: PropTypes.oneOf(['', 'left', 'right']),
}

Button.defaultProps = {
  primary: false,
  iconPos: '',
}

const ButtonStyled = styled.button`
  background: rgb(53, 22, 178);
  background: linear-gradient(
    145deg,
    rgba(53, 22, 178, 1) 18%,
    rgba(215, 51, 163, 1) 100%
  );
  color: #fff;
  padding: 8px 15px;
  font-size: 1em;
  border: none;
  border-radius: 5px;

  &.active {
    background: rgb(215, 51, 163);
    background: linear-gradient(
      145deg,
      rgba(215, 51, 163, 1) 100%,
      rgba(53, 22, 178, 1) 18%
    );
  }
`
