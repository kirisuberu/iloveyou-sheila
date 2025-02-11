import React from 'react';
import styled from 'styled-components';
import Masonry from 'react-masonry-css';

// Import images directly
import crisImg from '../assets/img/cris.jpg';
import grad1Img from '../assets/img/grad1.jpg';
import grad2SquareImg from '../assets/img/grad2-square.jpg';
import grad2Img from '../assets/img/grad2.jpg';
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

const PageTitle = styled.h1`
  color: ${props => props.theme.colors.primary};
  margin-bottom: 2rem;
  text-align: center;
`;

const GalleryContainer = styled.div`
  padding: 20px;
  max-width: 1400px;
  margin: 0 auto;
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

const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: ${props => props.theme.shadows.md};
  transition: transform 0.3s ease;
  background-color: ${props => props.theme.colors.accent};
  margin-bottom: 16px;

  &:hover {
    transform: translateY(-4px);
  }

  img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.3s ease;
  }
`;

const FavePics = () => {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  const images = [
    { src: crisImg, alt: 'Cris' },
    { src: grad1Img, alt: 'Graduation 1' },
    { src: grad2SquareImg, alt: 'Graduation 2 Square' },
    { src: grad2Img, alt: 'Graduation 2' },
    { src: grad3Img, alt: 'Graduation 3' },
    { src: grad4Img, alt: 'Graduation 4' },
    { src: img1Img, alt: 'Image 1' },
    { src: img2Img, alt: 'Image 2' },
    { src: random1Img, alt: 'Random 1' },
    { src: random2Img, alt: 'Random 2' },
    { src: random3Img, alt: 'Random 3' },
    { src: random4Img, alt: 'Random 4' },
    { src: sleepingImg, alt: 'Sleeping' },
    { src: tablogoImg, alt: 'Tab Logo' }
  ];

  return (
    <GalleryContainer>
      <PageTitle>Favorite Pictures</PageTitle>
      <StyledMasonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {images.map((image, index) => (
          <ImageWrapper key={index}>
            <img src={image.src} alt={image.alt} loading="lazy" />
          </ImageWrapper>
        ))}
      </StyledMasonry>
    </GalleryContainer>
  );
};

export default FavePics;
