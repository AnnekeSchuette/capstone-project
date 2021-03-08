import styled from 'styled-components/macro'
import * as Icons from 'heroicons-react'
import PropTypes from 'prop-types'

export default function Button({ buttonText = 'Click me', iconName, iconPos }) {
  return (
    <ButtonStyled role="button">
      {iconPos === 'left' && <Icons.iconName />}
      {buttonText}
      {iconPos === 'right' && <Icons.iconName />}
    </ButtonStyled>
  )
}

Button.propTypes = {
  buttontext: PropTypes.string,
  iconName: PropTypes.string,
  iconPos: PropTypes.oneOf(['left', 'right']),
  onClick: PropTypes.func,
}

Button.defaultProps = {
  primary: false,
  iconPos: 'left',
  onClick: undefined,
}

const ButtonStyled = styled.button`
  background: rgb(53, 22, 178);
  background: linear-gradient(
    145deg,
    rgba(53, 22, 178, 1) 18%,
    rgba(215, 51, 163, 1) 100%
  );
  color: #fff;
  padding: 5px 8px;
`
