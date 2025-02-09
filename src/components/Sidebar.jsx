import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const SidebarContainer = styled.aside`
  width: 16rem;
  height: 100vh;
  background-color: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.shadows.sm};
`

const SidebarContent = styled.div`
  height: 100%;
  padding: 1rem 0.75rem;
  overflow-y: auto;
`

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  list-style: none;
  padding: 0;
  margin: 0;
`

const NavItem = styled.li``

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  color: ${props => props.theme.colors.gray[600]};
  text-decoration: none;
  border-radius: 0.5rem;
  transition: all ${props => props.theme.transitions.default};

  &:hover {
    color: ${props => props.theme.colors.primary};
    background-color: ${props => props.theme.colors.accent};
  }
`

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarContent>
        <NavList>
          <NavItem>
            <NavLink to="/">
              <span>Home</span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/projects">
              <span>Projects</span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/contact">
              <span>Contact</span>
            </NavLink>
          </NavItem>
        </NavList>
      </SidebarContent>
    </SidebarContainer>
  )
}

export default Sidebar
