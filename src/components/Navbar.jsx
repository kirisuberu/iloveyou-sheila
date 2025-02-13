import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Menu } from 'lucide-react'

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
  text-decoration: none;
  color: ${props => props.theme.colors.gray[600]};
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  transition: all ${props => props.theme.transitions.default};

  &.active {
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
    font-weight: 600;
  }

  &:hover {
    color: ${props => props.theme.colors.primary};
    background-color: ${props => props.theme.colors.accent}40;
  }
`

const MenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  color: ${props => props.theme.colors.gray[600]};
  border: none;
  background: none;
  cursor: pointer;
  transition: color ${props => props.theme.transitions.default};

  &:hover {
    color: ${props => props.theme.colors.primary};
  }

  @media (min-width: 768px) {
    display: none;
  }
`

const Navbar = ({ onMenuClick }) => {
  return (
    <Nav>
      <Container>
        <FlexContainer>
          <LogoContainer>
            <Logo to="/">Sheilalabs</Logo>
          </LogoContainer>
          <NavLinks>
            <NavLink to="/home" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
            <NavLink to="/pickup-lines" className={({ isActive }) => isActive ? 'active' : ''}>Pick-up Lines</NavLink>
            <NavLink to="/song-covers" className={({ isActive }) => isActive ? 'active' : ''}>Song Covers</NavLink>
            <NavLink to="/favepics" className={({ isActive }) => isActive ? 'active' : ''}>Favorite Pictures</NavLink>
            <NavLink to="/author" className={({ isActive }) => isActive ? 'active' : ''}>Author</NavLink>
          </NavLinks>
          <MenuButton onClick={onMenuClick}>
            <Menu size={24} />
          </MenuButton>
        </FlexContainer>
      </Container>
    </Nav>
  )
}

export default Navbar
