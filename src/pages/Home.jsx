import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  padding: 2rem;
`

const Title = styled.h1`
  font-size: 2.25rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: ${props => props.theme.colors.secondary};
`

const ContentSection = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const Card = styled.div`
  background-color: ${props => props.theme.colors.white};
  border-radius: 0.5rem;
  box-shadow: ${props => props.theme.shadows.sm};
  padding: 1.5rem;
  transition: all ${props => props.theme.transitions.default};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.md};
  }
`

const CardTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.primary};
`

const CardText = styled.p`
  color: ${props => props.theme.colors.gray[600]};
  line-height: 1.6;
`

const Home = () => {
  return (
    <Container>
      <Title>Welcome to Sheila Labs</Title>
      <ContentSection>
        <Card>
          <CardTitle>Our Mission</CardTitle>
          <CardText>
            We strive to create innovative solutions that make a difference in people's lives through cutting-edge technology and thoughtful design.
          </CardText>
        </Card>
        <Card>
          <CardTitle>What We Do</CardTitle>
          <CardText>
            We specialize in developing modern web applications, mobile solutions, and digital experiences that help businesses grow and succeed.
          </CardText>
        </Card>
        <Card>
          <CardTitle>Our Approach</CardTitle>
          <CardText>
            We believe in user-centered design, agile development, and continuous improvement to deliver the best possible solutions for our clients.
          </CardText>
        </Card>
      </ContentSection>
    </Container>
  )
}

export default Home
