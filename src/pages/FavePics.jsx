import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Masonry from 'react-masonry-css';

// Import images
import crisImg from '../assets/img/cris.jpg';
import grad1Img from '../assets/img/grad1.jpg';
import grad2Img from '../assets/img/grad2.jpg';
import grad2SquareImg from '../assets/img/grad2-square.jpg';
import grad3Img from '../assets/img/grad3.jpg';
import grad4Img from '../assets/img/grad4.jpg';
import img1Img from '../assets/img/img1.jpg';
import img2Img from '../assets/img/img2.jpg';
import random1Img from '../assets/img/random1.jpg';
import random2Img from '../assets/img/random2.jpg';
import random3Img from '../assets/img/random3.jpg';
import random4Img from '../assets/img/random4.jpg';
import sleepingImg from '../assets/img/sleeping.jpg';
import tablogoImg from '../assets/img/tablogo.jpg';

const Container = styled(motion.div)`
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
`;

const Title = styled(motion.h1)`
  text-align: center;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1rem;
  font-size: 2.5rem;
`;

const Description = styled(motion.p)`
  text-align: center;
  color: ${props => props.theme.colors.text};
  margin-bottom: 3rem;
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto 3rem;
`;

const StyledMasonry = styled(Masonry)`
  display: flex;
  margin-left: -16px;
  width: auto;

  .my-masonry-grid_column {
    padding-left: 16px;
    background-clip: padding-box;
  }
`;

const ImageCard = styled(motion.div)`
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.md};
  margin-bottom: 16px;
  cursor: pointer;
  transform-origin: center;
`;

const Image = styled(motion.img)`
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.3s ease;
`;

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1
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

const cardVariants = {
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

const FavePics = () => {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  const images = [
    { src: grad1Img },
    { src: grad2SquareImg },
    { src: grad2Img },
    { src: grad3Img },
    { src: grad4Img },
    { src: img1Img },
    { src: img2Img },
    { src: random1Img },
    { src: random2Img },
    { src: random3Img },
    { src: random4Img },
    { src: crisImg },
    { src: sleepingImg },
    { src: tablogoImg }
  ];

  return (
    <Container
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Title variants={titleVariants}>
        Our Favorite Pictures
      </Title>
      <Description variants={titleVariants}>
        A collection of our most cherished moments together, each picture telling its own story of love and happiness.
      </Description>

      <StyledMasonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {images.map((image, index) => (
          <ImageCard
            key={index}
            variants={cardVariants}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.98 }}
          >
            <Image
              src={image.src}
              loading="lazy"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </ImageCard>
        ))}
      </StyledMasonry>
    </Container>
  );
};

export default FavePics;
