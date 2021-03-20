import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'

export default function Navigation({ pages }) {
  return (
    <NavWrapper pages={pages}>
      {pages.map(({ title, path }) => (
        <NavItem as={NavLink} key={title} exact to={path}>
          {title}
        </NavItem>
      ))}
    </NavWrapper>
  )
}
const NavWrapper = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1px;
  background: #fff;
`
const NavItem = styled.button`
  flex: 1 1 auto;
  border-radius: 0;
  margin: 0;
  text-align: center;
  text-decoration: none;

  &.active {
    background: pink;
  }
`
