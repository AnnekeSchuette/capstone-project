import styled from 'styled-components/macro'
import * as Icons from 'heroicons-react'
import PropTypes from 'prop-types'

Button.propTypes = {
  buttonText: PropTypes.string,
  iconName: PropTypes.string,
  iconPos: PropTypes.oneOf(['default', 'left', 'right']),
  isActive: PropTypes.bool,
}

export default function Button({
  buttonText,
  iconName,
  iconPos = 'default',
  isActive = false,
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
      {iconPos === 'left' && <Icons.ChevronLeft size={20} />}
      <span>{buttonText}</span>
      {iconPos === 'right' && <Icons.ChevronRight size={20} />}
    </Btn>
  )
}

const Btn = styled.button`
  background: ${props =>
    props.isActive ? 'var(--color-candy-pink)' : 'var(--color-popstar)'};
  color: var(--color-ghost-white);
  font-weight: 300;
  padding: 10px;
  line-height: 1.3em;
  box-shadow: 0px 2px 0px #00000050;
  display: flex;
  border-radius: var(--space-large);

  &.active,
  :focus {
    background: var(--color-candy-pink);
  }
  :disabled {
    background: var(--color-disabled);
    color: #00000050;
  }
  :focus {
    outline: none;
  }

  span {
    margin: 0 8px;
  }
`
