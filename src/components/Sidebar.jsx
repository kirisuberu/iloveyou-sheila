import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 240px;
  height: 100vh;
  background-color: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.shadows.md};
  transform: translateX(${props => props.isOpen ? '0' : '-100%'});
  transition: transform ${props => props.theme.transitions.default};
  z-index: 50;

  @media (min-width: 768px) {
    display: none;
  }
`

const SidebarContent = styled.div`
  padding: 1.5rem;
`

const Logo = styled(Link)`
  display: block;
  font-size: 1.25rem;
  font-weight: bold;
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
  margin-bottom: 2rem;
`

const NavLinks = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const NavLink = styled(Link)`
  display: block;
  padding: 0.75rem;
  color: ${props => props.theme.colors.gray[600]};
  text-decoration: none;
  border-radius: 0.375rem;
  transition: all ${props => props.theme.transitions.default};

  &:hover {
    background-color: ${props => props.theme.colors.accent};
    color: ${props => props.theme.colors.primary};
  }
`

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: ${props => props.isOpen ? 1 : 0};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transition: all ${props => props.theme.transitions.default};
  z-index: 40;

  @media (min-width: 768px) {
    display: none;
  }
`

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: ${props => props.theme.colors.gray[500]};
  cursor: pointer;
  padding: 0.5rem;
  font-size: 1.5rem;
  
  &:hover {
    color: ${props => props.theme.colors.gray[700]};
  }
`

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      <Overlay isOpen={isOpen} onClick={onClose} />
      <SidebarContainer isOpen={isOpen}>
        <SidebarContent>
          <CloseButton onClick={onClose}>&times;</CloseButton>
          <Logo to="/" onClick={onClose}>Sheila Labs</Logo>
          <NavLinks>
            <NavLink to="/" onClick={onClose}>Home</NavLink>
            <NavLink to="/faq" onClick={onClose}>FAQ</NavLink>
            <NavLink to="/pickup-lines" onClick={onClose}>Pick-Up Lines</NavLink>
          </NavLinks>
        </SidebarContent>
      </SidebarContainer>
    </>
  )
}

export default Sidebar
