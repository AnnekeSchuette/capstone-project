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
      {iconPos === 'left' && <Icons.Star size={20} />}
      <span>{buttonText}</span>
      {iconPos === 'right' && <Icons.ChevronRight size={20} />}
    </Btn>
  )
}

const Btn = styled.button`
  background: ${props =>
    props.isActive
      ? 'var(--color-complementary-light)'
      : 'var(--color-complementary)'};
  color: var(--color-midnight);
  font-weight: 300;
  padding: 8px;
  line-height: 1.3em;
  border: none;
  box-shadow: 0px 2px 0px #00000050;
  display: flex;
  border-radius: var(--space-large);

  &.active {
    background: rgb(215, 51, 163);
    background: linear-gradient(
      145deg,
      rgba(215, 51, 163, 1) 18%,
      rgba(53, 22, 178, 1) 100%
    );
  }
  :disabled {
    background: var(--color-disabled);
    color: #00000050;
  }
  span {
    margin: 0 8px;
  }
`
