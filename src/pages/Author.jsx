import React from 'react'
import styled from 'styled-components'
import profileImage from '../assets/img/cris.jpg'
import { Heart, Sparkles, Star, HandshakeIcon, Mail, Github } from 'lucide-react'

const PageContainer = styled.div`
  min-height: screen;
  background: linear-gradient(135deg, #fce7f3 0%, #fff1f2 50%, #fff 100%);
  padding: 2rem;
`

const ContentWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 768px) {
    padding: 4rem 2rem;
  }
`

const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 3rem;
`

const ImageContainer = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid white;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  margin-bottom: 2rem;
  
  @media (min-width: 768px) {
    width: 250px;
    height: 250px;
  }
`

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Name = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
`

const Nickname = styled.h2`
  font-size: 1.25rem;
  color: #666;
  margin-bottom: 1rem;
  font-style: italic;
`

const Title = styled.h2`
  font-size: 1.25rem;
  color: ${props => props.theme.colors.gray[600]};
  margin-bottom: 2rem;
`

const Grid = styled.div`
  display: grid;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const Card = styled.div`
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-4px);
  }
`

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    width: 1.25em;
    height: 1.25em;
  }
`

const CardContent = styled.div`
  color: ${props => props.theme.colors.gray[700]};
  line-height: 1.6;
`

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 1rem;
`

const SocialLink = styled.a`
  color: ${props => props.theme.colors.primary};
  font-size: 1.5rem;
  transition: color 0.2s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 1.5em;
    height: 1.5em;
  }

  &:hover {
    color: ${props => props.theme.colors.primaryDark};
  }
`

const Author = () => {
  return (
    <PageContainer>
      <ContentWrapper>
        <ProfileSection>
          <ImageContainer>
            <ProfileImage 
              src={profileImage} 
              alt="Cris"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/250x250'
              }}
            />
          </ImageContainer>
          <Name>Crisbel A. Mendoza</Name>
          <Nickname>"Papa de Azucar"</Nickname>
          <Nickname>"Codename: kirisuberu"</Nickname>
          <Title style={{marginBottom: '0'}}>Developer of Sheilalabs Website</Title>
          <Title>Lover of Sheila</Title>
        </ProfileSection>

        <Grid>
          <Card>
            <CardTitle>
              <Heart size={24} />
              Personal Message
            </CardTitle>
            <CardContent>
              <p>
                "Hello, I'm Crisbel. I'm a passionate developer and lover of technology. I am deeply in love with what the girl named Sheila Marie Junco. I love her so much. She's the best, kaperfect nalang gyud! Sana mahalin niya ako for her whole life!, PLEAAAAAAAAAAAAAAASSSSSSSSSSSEEE"
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardTitle>
              <Sparkles size={24} />
              About Me
            </CardTitle>
            <CardContent>
              <p>
                Future Papa de Azucar ni Sheila. That is my goal in life!
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardTitle>
              <Star size={24} />
              Interests & Hobbies
            </CardTitle>
            <CardContent>
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li>🎨 Drawing while Loving Sheila</li>
                <li>🎮 Gaming while Loving Sheila</li>
                <li>🎵 Listening to music while Loving Sheila</li>
                <li>👨‍💻Programming while Loving Sheila</li>
                <li>❤️ LOVIIINNNNGGGG SHEEEIILLLLLAAAA!!</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardTitle>
              <HandshakeIcon size={24} />
              Connect With Me
            </CardTitle>
            <CardContent>
              <p>I'd love to connect with you! Feel free to reach out through any of these platforms:</p>
              <SocialLinks>
                <SocialLink href="mailto:crisbelm16@gmail.com" target="_blank" rel="noopener noreferrer">
                  <Mail />
                </SocialLink>
                <SocialLink href="https://github.com/kirisuberu" target="_blank" rel="noopener noreferrer">
                  <Github />
                </SocialLink>
              </SocialLinks>
              <p style={{ marginTop: '1rem' }}>Joke lang, Bawal magconnect-connect ang girls. HEHEHEHE</p>
            </CardContent>
          </Card>
        </Grid>
      </ContentWrapper>
    </PageContainer>
  )
}

export default Author
