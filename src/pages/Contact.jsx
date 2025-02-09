import React from 'react'
import styled from 'styled-components'

const PageContainer = styled.div`
  width: 100%;
  min-height: 100%;
  padding: 2rem;
  background-color: ${props => props.theme.colors.background};
`

const ContentContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const Title = styled.h1`
  font-size: 1.875rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: ${props => props.theme.colors.secondary};
  grid-column: 1 / -1;
`

const ContactInfo = styled.div`
  background-color: ${props => props.theme.colors.white};
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: ${props => props.theme.shadows.sm};
  height: fit-content;
`

const InfoTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.primary};
`

const InfoText = styled.p`
  color: ${props => props.theme.colors.gray[600]};
  margin-bottom: 1.5rem;
  line-height: 1.6;
`

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.gray[700]};
  
  &:last-child {
    margin-bottom: 0;
  }
`

const FormContainer = styled.div`
  background-color: ${props => props.theme.colors.white};
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: ${props => props.theme.shadows.sm};
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`

const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${props => props.theme.colors.gray[700]};
  margin-bottom: 0.25rem;
`

const Input = styled.input`
  width: 100%;
  padding: 0.625rem;
  border: 1px solid ${props => props.theme.colors.gray[300]};
  border-radius: 0.375rem;
  box-shadow: ${props => props.theme.shadows.sm};
  transition: all ${props => props.theme.transitions.default};

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 2px ${props => props.theme.colors.accent};
  }

  &::placeholder {
    color: ${props => props.theme.colors.gray[400]};
  }
`

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.625rem;
  border: 1px solid ${props => props.theme.colors.gray[300]};
  border-radius: 0.375rem;
  box-shadow: ${props => props.theme.shadows.sm};
  transition: all ${props => props.theme.transitions.default};

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 2px ${props => props.theme.colors.accent};
  }

  &::placeholder {
    color: ${props => props.theme.colors.gray[400]};
  }
`

const Button = styled.button`
  width: 100%;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  padding: 0.625rem 1.25rem;
  border-radius: 0.375rem;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: background-color ${props => props.theme.transitions.default};

  &:hover {
    background-color: ${props => props.theme.colors.primaryDark};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${props => props.theme.colors.accent};
  }
`

const Contact = () => {
  return (
    <PageContainer>
      <ContentContainer>
        <Title>Contact Us</Title>
        
        <ContactInfo>
          <InfoTitle>Get in Touch</InfoTitle>
          <InfoText>
            Have a question or want to work together? We'd love to hear from you.
            Feel free to reach out using the contact form or through any of the methods below.
          </InfoText>
          <ContactItem>
            📍 123 Business Street, Tech City, TC 12345
          </ContactItem>
          <ContactItem>
            📧 hello@sheilalabs.com
          </ContactItem>
          <ContactItem>
            📞 (555) 123-4567
          </ContactItem>
        </ContactInfo>

        <FormContainer>
          <Form>
            <FormGroup>
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                id="name"
                placeholder="Your name"
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                placeholder="your@email.com"
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="message">Message</Label>
              <TextArea
                id="message"
                rows={4}
                placeholder="Your message"
              />
            </FormGroup>
            <Button type="submit">
              Send Message
            </Button>
          </Form>
        </FormContainer>
      </ContentContainer>
    </PageContainer>
  )
}

export default Contact
