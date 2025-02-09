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
  align-items: center;
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
  gap: 2rem;
  align-items: center;
  
  @media (min-width: 768px) {
    display: flex;
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

const MenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  background: none;
  border: none;
  color: ${props => props.theme.colors.gray[600]};
  cursor: pointer;
  
  @media (min-width: 768px) {
    display: none;
  }

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`

const Navbar = ({ onMenuClick }) => {
  return (
    <Nav>
      <Container>
        <FlexContainer>
          <LogoContainer>
            <Logo to="/">Sheila Labs</Logo>
          </LogoContainer>
          <NavLinks>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </NavLinks>
          <MenuButton onClick={onMenuClick} aria-label="Toggle menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </MenuButton>
        </FlexContainer>
      </Container>
    </Nav>
  )
}

export default Navbar
