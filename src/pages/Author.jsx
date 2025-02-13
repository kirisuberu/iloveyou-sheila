import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import profileImage from '../assets/img/grad2-square.jpg';

const Container = styled(motion.div)`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProfileSection = styled(motion.section)`
  text-align: center;
  margin-bottom: 4rem;
`;

const ProfileImage = styled(motion.img)`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 2rem;
  border: 4px solid ${props => props.theme.colors.primary};
`;

const Name = styled(motion.h1)`
  font-size: 2.5rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1rem;
`;

const Title = styled(motion.h2)`
  font-size: 1.5rem;
  color: ${props => props.theme.colors.secondary};
  margin-bottom: 2rem;
`;

const Bio = styled(motion.p)`
  font-size: 1.1rem;
  color: ${props => props.theme.colors.text};
  max-width: 800px;
  margin: 0 auto 2rem;
  line-height: 1.6;
`;

const SkillsSection = styled(motion.section)`
  margin-bottom: 4rem;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2rem;
  color: ${props => props.theme.colors.primary};
  text-align: center;
  margin-bottom: 2rem;
`;

const SkillsList = styled(motion.ul)`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  max-width: 1000px;
  margin: 0 auto;
`;

const SkillItem = styled(motion.li)`
  background: white;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: ${props => props.theme.shadows.md};
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Emoji = styled.span`
  font-size: 1.5rem;
`;

const SkillText = styled(motion.span)`
  font-size: 1.1rem;
  color: ${props => props.theme.colors.text};
`;

// Animation variants
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

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const profileImageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const textVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

const skillsListVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  }
};

const skillItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

const Author = () => {
  const skills = [
    { emoji: '💻', text: 'Software Development' },
    { emoji: '🎮', text: 'Game Development' },
    { emoji: '🎨', text: 'UI/UX Design' },
    { emoji: '📱', text: 'Mobile Development' },
    { emoji: '🌐', text: 'Web Development' },
    { emoji: '❤️', text: 'Love Sheila Forever' },
  ];

  return (
    <Container
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <ProfileSection variants={itemVariants}>
        <ProfileImage 
          src={profileImage} 
          alt="Author Profile"
          variants={profileImageVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        />
        <Name variants={textVariants}>Crisbel Enriquez</Name>
        <Title variants={textVariants}>Software Engineer & Love Expert</Title>
        <Bio variants={textVariants}>
          Hi! I'm Crisbel, a passionate software engineer who loves creating beautiful and functional applications.
          When I'm not coding, you can find me thinking about Sheila, playing games, or learning new technologies.
          But mostly thinking about Sheila. Actually, that's all I do. HAHAHA
        </Bio>
      </ProfileSection>

      <SkillsSection variants={itemVariants}>
        <SectionTitle variants={textVariants}>My Skills</SectionTitle>
        <SkillsList variants={skillsListVariants}>
          {skills.map((skill, index) => (
            <SkillItem
              key={index}
              variants={skillItemVariants}
              whileHover={{ 
                scale: 1.03,
                boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Emoji>{skill.emoji}</Emoji>
              <SkillText variants={textVariants}>{skill.text}</SkillText>
            </SkillItem>
          ))}
        </SkillsList>
      </SkillsSection>
    </Container>
  );
};

export default Author;
