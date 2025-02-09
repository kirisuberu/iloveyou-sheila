import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Nav = styled.nav`
  background-color: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.shadows.sm};
  width: 100%;
`

const Container = styled.div`
  width: 100%;
  padding: 0 2rem;
`

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 4rem;
`

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`

const Logo = styled(Link)`
  font-size: 1.25rem;
  font-weight: bold;
  text-decoration: none;
  color: ${props => props.theme.colors.primary};
  transition: color ${props => props.theme.transitions.default};

  &:hover {
    color: ${props => props.theme.colors.primaryDark};
  }
`

const NavLinks = styled.div`
  display: none;
  margin-left: 1.5rem;
  @media (min-width: 640px) {
    display: flex;
    gap: 2rem;
  }
`

const NavLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  padding: 0 0.25rem;
  color: ${props => props.theme.colors.gray[600]};
  text-decoration: none;
  border-bottom: 2px solid transparent;
  height: 100%;
  transition: all ${props => props.theme.transitions.default};

  &:hover {
    color: ${props => props.theme.colors.primary};
    border-bottom-color: ${props => props.theme.colors.primary};
  }
`

const Navbar = () => {
  return (
    <Nav>
      <Container>
        <FlexContainer>
          <LogoContainer>
            <Logo to="/">Logo</Logo>
          </LogoContainer>
          <NavLinks>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </NavLinks>
        </FlexContainer>
      </Container>
    </Nav>
  )
}

export default Navbar
