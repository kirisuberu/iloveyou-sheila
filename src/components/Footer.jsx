import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.footer`
  background-color: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.shadows.sm};
  margin-top: auto;
  width: 100%;
  text-align: center;
  padding: 1.5rem;
  color: ${props => props.theme.colors.gray[500]};
`

const Footer = () => {
  return (
    <FooterContainer>
      End of Page
    </FooterContainer>
  )
}

export default Footer
