import styled from 'styled-components/macro'

export default function Navigation() {
  return (
    <NavWrapper>
      <NavItem>Explore</NavItem>
      <NavItem>Wine Storage</NavItem>
    </NavWrapper>
  )
}
const NavWrapper = styled.nav`
  display: flex;
`
const NavItem = styled.button`
  flex-grow: 1;
`
