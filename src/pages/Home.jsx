import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import profileImage from '../assets/img/grad2-square.jpg';

const Container = styled(motion.div)`
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
`;

const HighlightSection = styled(motion.section)`
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
`;

const CustomCursor = styled(motion.div)`
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
`;

const HighlightTitle = styled(motion.h1)`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: ${props => props.theme.colors.white} !important;
  fill: ${props => props.theme.colors.white};
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const HighlightText = styled(motion.p)`
  font-size: 1.25rem;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  color: ${props => props.theme.colors.white} !important;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ProfileSection = styled(motion.section)`
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
`;

const ProfileImage = styled(motion.div)`
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
`;

const ProfileContent = styled(motion.div)`
  flex: 1;
`;

const ProfileName = styled(motion.h2)`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.primary};
`;

const ProfileDescription = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.6;
  color: ${props => props.theme.colors.gray[600]};
  margin-bottom: 1.5rem;
`;

const ProfileStats = styled(motion.div)`
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const StatItem = styled(motion.div)`
  text-align: center;
`;

const StatNumber = styled(motion.div)`
  font-size: 2rem;
  font-weight: bold;
  color: ${props => props.theme.colors.primary};
`;

const StatLabel = styled(motion.div)`
  color: ${props => props.theme.colors.gray[600]};
  font-size: 0.875rem;
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2
    }
  }
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const featureCardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const highlightVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

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
    <Container
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <HighlightSection 
        ref={sectionRef}
        initial="hidden"
        animate="visible"
        variants={highlightVariants}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setShowCursor(true)}
        onMouseLeave={() => setShowCursor(false)}
      >
        {showCursor && (
          <CustomCursor
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            style={{
              left: cursorPos.x,
              top: cursorPos.y,
              position: 'absolute'
            }}
          >
            ♥
          </CustomCursor>
        )}
        <HighlightTitle variants={fadeUpVariants}>
          I LOVE YOU, SHEILA!
        </HighlightTitle>
        <HighlightText variants={fadeUpVariants}>
          Hello Love, Babab, Baby, my love with million names but the only one for my life and my heart. 
          I am sorry, I became so unavailable lately. Actually, this is the main reason why I overstay 
          in the office HAHAHA, para mahimo ni nga website para sa imuha. You know that I am broke, but 
          since I am also developing my web developing skills, might as well use this skill and leverage 
          it to create something unique. I will be updating this website from time to time, and add more 
          contents. But for now, enjoy your website. I love you so so much, to the point that it brings 
          the feel of missing and solitude.
        </HighlightText>
      </HighlightSection>

      <ProfileSection
        initial="hidden"
        animate="visible"
        variants={fadeUpVariants}
      >
        <ProfileImage
          initial="hidden"
          animate="visible"
          variants={featureCardVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img src={profileImage} alt="Sheila's Profile" />
        </ProfileImage>
        <ProfileContent>
          <ProfileName variants={fadeUpVariants}>
            Sheila Marie M. Junco
          </ProfileName>
          <ProfileDescription variants={fadeUpVariants}>
            Hey there! I'm Sheila, your go-to source for smiles and laughter. I am perfect. HAHAHAHAHAH. I love Crisbel also. Sige nalang, kay wala pa man ko nailhan sa akong mga uyab sa Korea kay busy pa sa ilang concerts. So magsettle nalang ko ug mas gwapo --- si Crisbel!        
          </ProfileDescription>
          <ProfileStats
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
          >
            <StatItem
              initial="hidden"
              animate="visible"
              variants={featureCardVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <StatNumber variants={fadeUpVariants}>25</StatNumber>
              <StatLabel variants={fadeUpVariants}>Years Old</StatLabel>
            </StatItem>
            <StatItem
              initial="hidden"
              animate="visible"
              variants={featureCardVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <StatNumber variants={fadeUpVariants}>1</StatNumber>
              <StatLabel variants={fadeUpVariants}>Boyfriend</StatLabel>
            </StatItem>
            <StatItem
              initial="hidden"
              animate="visible"
              variants={featureCardVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <StatNumber variants={fadeUpVariants}>0</StatNumber>
              <StatLabel variants={fadeUpVariants}>Kabit</StatLabel>
            </StatItem>
            <StatItem
              initial="hidden"
              animate="visible"
              variants={featureCardVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <StatNumber variants={fadeUpVariants}>∞</StatNumber>
              <StatLabel variants={fadeUpVariants}>Smiles Shared</StatLabel>
            </StatItem>
            <StatItem
              initial="hidden"
              animate="visible"
              variants={featureCardVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <StatNumber variants={fadeUpVariants}>∞</StatNumber>
              <StatLabel variants={fadeUpVariants}>K-Pop Crushes</StatLabel>
            </StatItem>
          </ProfileStats>
        </ProfileContent>
      </ProfileSection>
    </Container>
  )
}

export default Home
