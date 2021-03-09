import styled from 'styled-components/macro'
import * as Icons from 'heroicons-react'
import PropTypes from 'prop-types'

export default function Button({
  buttonText,
  iconName = 'ArrowDown',
  iconPos,
  isActive,
  ...props
}) {
  const btnClass = isActive ? 'button--active' : 'button'
  return (
    <Btn
      role="button"
      iconPos={iconPos}
      isActive={isActive}
      className={[btnClass].join(' ')}
      {...props}
    >
      {iconPos === 'left' && <Icons.Star size={20} />}
      <span>{buttonText}</span>
      {iconPos === 'right' && <Icons.ChevronRight size={20} />}
    </Btn>
  )
}

Button.propTypes = {
  buttonText: PropTypes.string,
  iconName: PropTypes.string,
  iconPos: PropTypes.oneOf(['default', 'left', 'right']),
  isActive: PropTypes.bool,
}

Button.defaultProps = {
  isActive: false,
  iconPos: 'default',
  buttonText: 'Button',
  iconName: 'ArrowLeft',
}

const Btn = styled.button`
  background: ${props =>
    props.isActive ? 'rgb(215, 51, 163)' : 'rgb(53, 22, 178)'};
  background: ${props =>
    props.isActive
      ? 'linear-gradient(145deg,rgba(215, 51, 163, 1) 18%,rgba(53, 22, 178, 1) 100%)'
      : 'linear-gradient(145deg,rgba(53, 22, 178, 1) 18%,rgba(215,51, 163, 1) 100%)'};
  color: #fff;
  padding: 8px;
  font-size: 1em;
  line-height: 1.3em;
  border: none;
  border-radius: 5px;

  &.active {
    background: rgb(215, 51, 163);
    background: linear-gradient(
      145deg,
      rgba(215, 51, 163, 1) 18%,
      rgba(53, 22, 178, 1) 100%
    );
  }

  span {
    margin: 0 8px;
  }
`
