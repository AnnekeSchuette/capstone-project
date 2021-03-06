import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'
import { Search } from 'heroicons-react'

export default function Navigation({ pages, onNavigate }) {
  return (
    <NavWrapper>
      <NavItem
        exact
        to="/"
        key="global-search"
        onClick={() => onNavigate('/')}
        aria-label="Search for pairings by dish or wine type"
      >
        <Search size="24" />
      </NavItem>
      <NavMenu>
        {pages
          .filter(page => page.showInNav)
          .map(({ title, path, icon }, index) => (
            <NavItem
              key={title}
              exact
              to={path}
              onClick={() => onNavigate(path)}
            >
              <img src={icon} width="40" height="40" alt="" />
              <span>{title}</span>
            </NavItem>
          ))}
      </NavMenu>
    </NavWrapper>
  )
}
const NavWrapper = styled.div`
  display: grid;
  position: relative;
  border-top: 1px solid var(--color-oxford-blue);
  > a {
    width: 56px;
    height: 56px;
    position: absolute;
    left: 0;
    right: 0;
    bottom: var(--space-large);
    margin: auto;
    padding: var(--space-small);
    border: 1px solid var(--color-ghost-white);
    background: var(--color-oxford-blue);
    border-radius: 50%;
    &.active {
      background: var(--color-popstar);
    }
    svg {
      fill: var(--color-ghost-white);
      /* stroke: var(--color-popstar); */
    }
  }
`
const NavMenu = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1px;
  padding: 0;
  background: var(--color-midnight-blue);
`
const NavItem = styled(NavLink)`
  display: grid;
  border-radius: 0;
  margin: 0;
  text-align: center;
  text-decoration: none;
  justify-items: center;
  padding: 0;
  color: var(--color-ghost-white);
  height: 100%;

  &.active,
  &:visited,
  &:hover {
    color: var(--color-ghost-white);
    background: var(--color-oxford-blue);

    span {
      text-decoration: underline;
    }
  }

  img {
    filter: invert(1);
    padding: var(--space-xsmall) 0 0;
  }
  span {
    font-size: 0.8em;
  }
`
