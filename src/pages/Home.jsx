import React from 'react'
import styled from 'styled-components'
import profileImage from '../assets/img/grad2-square.jpg'

const Container = styled.div`
  width: 100%;

  margin: 0 auto;
  padding: 2rem;
`

const HighlightSection = styled.section`
  text-align: center;
  padding: 4rem 1rem;
  background: linear-gradient(135deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary});
  border-radius: 1rem;
  margin-bottom: 4rem;
  color: ${props => props.theme.colors.white} !important;

  h1, p {
    color: ${props => props.theme.colors.white} !important;
  }
`

const HighlightTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: ${props => props.theme.colors.white} !important;
  fill: ${props => props.theme.colors.white};
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

const HighlightText = styled.p`
  font-size: 1.25rem;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  color: ${props => props.theme.colors.white} !important;
  
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
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
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
        <HighlightTitle>I love you my Valentine!</HighlightTitle>
        <HighlightText>
          I am so excited to share this special day with you! I hope you find the best pick-up lines and answers to your
          burning questions.
        </HighlightText>
      </HighlightSection>

      <ProfileSection>
        <ProfileImage>
          <img src={profileImage} alt="Sheila's Profile" />
        </ProfileImage>
        <ProfileContent>
          <ProfileName>Sheila</ProfileName>
          <ProfileDescription>
            Hey there! I'm Sheila, your go-to source for smiles and laughter. I am a perfect blend of
            creativity and charm, and I'm here to make your day brighter with a collection of heartwarming
            pick-up lines and answers to your burning questions.
          </ProfileDescription>
          <ProfileStats>
            <StatItem>
              <StatNumber>25</StatNumber>
              <StatLabel>Years Old</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>1</StatNumber>
              <StatLabel>Boyfriend</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>0</StatNumber>
              <StatLabel>Kabit</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>∞</StatNumber>
              <StatLabel>Smiles Shared</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>∞</StatNumber>
              <StatLabel>K-Pop Crushes</StatLabel>
            </StatItem>
          </ProfileStats>
        </ProfileContent>
      </ProfileSection>
    </Container>
  )
}

export default Home
