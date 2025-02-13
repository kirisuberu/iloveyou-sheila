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
  background: linear-gradient(135deg, 
    ${props => `${props.theme.colors.primary}80`}, 
    ${props => `${props.theme.colors.secondary}80`}
  );
  background-image: 
    repeating-linear-gradient(45deg, 
      ${props => `${props.theme.colors.primary}10`} 0px,
      ${props => `${props.theme.colors.primary}10`} 2px,
      transparent 2px,
      transparent 10px
    ),
    linear-gradient(135deg, 
      ${props => `${props.theme.colors.primary}80`}, 
      ${props => `${props.theme.colors.secondary}80`}
    );
  border-radius: 1rem;
  margin-bottom: 4rem;
  color: ${props => props.theme.colors.white} !important;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  cursor: none;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0,0,0,0.15);
  }

  h1, p {
    color: ${props => props.theme.colors.white} !important;
    text-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
`

const CustomCursor = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  pointer-events: none;
  z-index: 9999;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.primary};
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  animation: pulse 1s infinite alternate;

  @keyframes pulse {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.3);
    }
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
  font-size: 2rem;
  font-weight: bold;
  color: ${props => props.theme.colors.primary};
`

const StatLabel = styled.div`
  color: ${props => props.theme.colors.gray[600]};
  font-size: 0.875rem;
`

const Home = () => {
  const [cursorPos, setCursorPos] = React.useState({ x: 0, y: 0 });
  const [showCursor, setShowCursor] = React.useState(false);
  const sectionRef = React.useRef(null);

  const handleMouseMove = (e) => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setCursorPos({ x, y });
    }
  };

  return (
    <Container>
      <HighlightSection 
        ref={sectionRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setShowCursor(true)}
        onMouseLeave={() => setShowCursor(false)}
      >
        {showCursor && (
          <CustomCursor
            style={{
              left: cursorPos.x,
              top: cursorPos.y,
              position: 'absolute'
            }}
          >
            ♥
          </CustomCursor>
        )}
        <HighlightTitle>I LOVE YOU, SHEILA!</HighlightTitle>
        <HighlightText>
          I am so excited to share this special day with you! I hope you find the best pick-up lines, facts, pictures, and author/lover.
        </HighlightText>
      </HighlightSection>

      <ProfileSection>
        <ProfileImage>
          <img src={profileImage} alt="Sheila's Profile" />
        </ProfileImage>
        <ProfileContent>
          <ProfileName>Sheila Marie M. Junco</ProfileName>
          <ProfileDescription>
            Hey there! I'm Sheila, your go-to source for smiles and laughter. I am perfect. HAHAHAHAHAH. I love Crisbel also. Sige nalang, kay wala pa man ko nailhan sa akong mga uyab sa Korea kay busy pa sa ilang concerts. So magsettle nalang ko ug mas gwapo --- si Crisbel!        </ProfileDescription>
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
