import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`

const HighlightSection = styled.section`
  text-align: center;
  padding: 4rem 1rem;
  background: linear-gradient(135deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary});
  border-radius: 1rem;
  margin-bottom: 4rem;
  color: white;
`

const HighlightTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

const HighlightText = styled.p`
  font-size: 1.25rem;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

const ProfileSection = styled.section`
  display: flex;
  gap: 3rem;
  align-items: center;
  padding: 2rem;
  background-color: ${props => props.theme.colors.white};
  border-radius: 1rem;
  box-shadow: ${props => props.theme.shadows.md};
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`

const ProfileImage = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  background-color: ${props => props.theme.colors.accent};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  color: ${props => props.theme.colors.primary};
`

const ProfileContent = styled.div`
  flex: 1;
`

const ProfileName = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.primary};
`

const ProfileDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: ${props => props.theme.colors.gray[600]};
  margin-bottom: 1.5rem;
`

const ProfileStats = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`

const StatItem = styled.div`
  text-align: center;
`

const StatNumber = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${props => props.theme.colors.primary};
`

const StatLabel = styled.div`
  color: ${props => props.theme.colors.gray[600]};
  font-size: 0.875rem;
`

const Home = () => {
  return (
    <Container>
      <HighlightSection>
        <HighlightTitle>Welcome to Sheila's World</HighlightTitle>
        <HighlightText>
          Discover the perfect blend of creativity and charm. Let's make your day brighter with
          a collection of heartwarming pick-up lines and answers to your burning questions.
        </HighlightText>
      </HighlightSection>

      <ProfileSection>
        <ProfileImage>💝</ProfileImage>
        <ProfileContent>
          <ProfileName>Sheila</ProfileName>
          <ProfileDescription>
            Hey there! I'm Sheila, your go-to source for smiles and laughter. Whether you're looking for
            the perfect ice-breaker or just need a mood boost, I've got you covered with a collection of
            carefully curated pick-up lines and answers to frequently asked questions.
          </ProfileDescription>
          <ProfileStats>
            <StatItem>
              <StatNumber>100+</StatNumber>
              <StatLabel>Pick-up Lines</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>50+</StatNumber>
              <StatLabel>FAQ Answers</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>∞</StatNumber>
              <StatLabel>Smiles Shared</StatLabel>
            </StatItem>
          </ProfileStats>
        </ProfileContent>
      </ProfileSection>
    </Container>
  )
}

export default Home
