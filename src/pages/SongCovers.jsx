import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled(motion.div)`
  padding: 2rem;
  width: 100vw;
  margin: 0 auto;
`;

const Title = styled(motion.h1)`
  color: ${props => props.theme.colors.primary};
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2.5rem;
`;

const Description = styled(motion.p)`
  text-align: center;
  color: ${props => props.theme.colors.text};
  margin-bottom: 3rem;
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const shimmer = keyframes`
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
`;

const Card = styled(motion.div)`
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.md};
  height: 200px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      ${props => props.theme.colors.background} 0%,
      ${props => props.theme.colors.accent}40 50%,
      ${props => props.theme.colors.background} 100%
    );
    background-size: 2000px 100%;
    animation: ${shimmer} 2s infinite linear;
  }
`;

const NoContentMessage = styled(motion.div)`
  text-align: center;
  padding: 2rem;
  background: ${props => props.theme.colors.accent}20;
  border-radius: 1rem;
  margin: 2rem 0;
  
  p {
    font-size: 1.2rem;
    color: ${props => props.theme.colors.primary};
    margin-bottom: 0.5rem;
  }
  
  span {
    font-size: 1rem;
    color: ${props => props.theme.colors.text};
    opacity: 0.8;
  }
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

const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const messageVariants = {
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

const cardVariants = {
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

const SongCovers = () => {
  return (
    <Container
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Title variants={titleVariants}>
        Song Covers
      </Title>
      <Description variants={titleVariants}>
        A collection of song covers dedicated to my one and only Sheila. 
        
      </Description>

      <NoContentMessage variants={messageVariants}>
        <p>There are no files uploaded yet.</p>
        <span>Mag upload lang ko sunod babab, HEHEHE 😊</span>
      </NoContentMessage>

      <Grid>
        {[1, 2, 3].map((_, index) => (
          <Card
            key={index}
            variants={cardVariants}
            whileHover={{ 
              y: -5,
              transition: { duration: 0.2 }
            }}
            whileTap={{ 
              scale: 0.98,
              transition: { duration: 0.1 }
            }}
          />
        ))}
      </Grid>
    </Container>
  );
};

export default SongCovers;
