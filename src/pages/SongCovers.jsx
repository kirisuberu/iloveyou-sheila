import React from 'react';
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  color: ${props => props.theme.colors.primary};
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2.5rem;
`;

const Description = styled.p`
  text-align: center;
  color: ${props => props.theme.colors.text};
  margin-bottom: 3rem;
  font-size: 1.2rem;
`;

const Grid = styled.div`
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

const Card = styled.div`
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

const NoContentMessage = styled.div`
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

const SongCovers = () => {
  return (
    <Container>
      <Title>Song Covers</Title>
      <Description>
        A collection of song covers dedicated to my one and only Sheila. 
        Each song represents a special moment and feeling in our relationship.
      </Description>

      <NoContentMessage>
        <p>There are no files uploaded yet.</p>
        <span>Mag upload lang ko sunod babab, HEHEHE 😊</span>
      </NoContentMessage>

      <Title as="h2" style={{ fontSize: '2rem' }}>Coming Soon...</Title>
      <Grid>
        <Card />
        <Card />
        <Card />
      </Grid>
    </Container>
  );
};

export default SongCovers;
