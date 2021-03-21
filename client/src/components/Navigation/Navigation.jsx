import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'

export default function Navigation({ pages, onNavigate }) {
  return (
    <NavWrapper pages={pages}>
      {pages.map(({ title, path, icon }, index) => (
        <NavItem key={title} exact to={path} onClick={() => onNavigate(index)}>
          <img src={icon} width="40" height="40" alt="" />
          <span>{title}</span>
        </NavItem>
      ))}
    </NavWrapper>
  )
}
const NavWrapper = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1px;
  padding: 0;
  background: var(--color-midnight-punch);
`
const NavItem = styled(NavLink)`
  display: grid;
  border-radius: 0;
  margin: 0;
  text-align: center;
  text-decoration: none;
  justify-items: center;
  padding: 0;
  color: #fff;
  height: 100%;

  &.active {
    color: #fff;
    background: var(--color-midnight);

    span {
      text-decoration: underline;
    }
  }

  img {
    filter: invert(1);
    padding: var(--space-xsmall) 0 0;
  }
  span {
    font-size: 0.7em;
  }
`
