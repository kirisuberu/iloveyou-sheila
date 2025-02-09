import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.footer`
  background-color: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.shadows.sm};
  margin-top: auto;
  width: 100%;
`

const Container = styled.div`
  width: 100%;
  padding: 1.5rem 2rem;
`

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
`

const Copyright = styled.div`
  color: ${props => props.theme.colors.gray[500]};
`

const LinkContainer = styled.div`
  display: flex;
  gap: 1.5rem;
`

const FooterLink = styled.a`
  color: ${props => props.theme.colors.gray[500]};
  text-decoration: none;
  transition: color ${props => props.theme.transitions.default};

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <FlexContainer>
          <Copyright>
            {new Date().getFullYear()} Your Company. All rights reserved.
          </Copyright>
          <LinkContainer>
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Terms of Service</FooterLink>
            <FooterLink href="#">Contact Us</FooterLink>
          </LinkContainer>
        </FlexContainer>
      </Container>
    </FooterContainer>
  )
}

export default Footer
