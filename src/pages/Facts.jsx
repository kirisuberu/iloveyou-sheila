import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100vw;
  padding: 2rem;
  min-height: 100vh;
  background-color: ${props => props.theme.colors.background};
  margin: 0;
  box-sizing: border-box;
  max-width: 100%;
  overflow-x: hidden;
`

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
  color: ${props => props.theme.colors.secondary};
`

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
  width: 100%;

  margin: 0 auto;
`

const CardContainer = styled.div`
  perspective: 1000px;
  height: 400px;
`

const Card = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  cursor: pointer;
  ${props => props.isFlipped && `transform: rotateY(180deg);`}
`

const CardSide = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  border-radius: 1rem;
  background: ${props => props.theme.colors.white};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`

const CardFront = styled(CardSide)`
`

const CardBack = styled(CardSide)`
  transform: rotateY(180deg);
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
`

const CardTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: inherit;
`

const CardContent = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
`

const CardIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`

function Facts() {
  const [flippedCards, setFlippedCards] = useState({});

  const facts = [
    {
      id: 1,
      icon: "💝",
      frontTitle: "Anniversary",
      frontContent: "Click to discover!",
      backTitle: "September 06",
      backContent: "This was the reconciliation date that changed my life forever."
    },
    {
      id: 2,
      icon: "🎵",
      frontTitle: "Notable Song #1",
      frontContent: "Click to discover!",
      backTitle: "Musical Connection",
      backContent: "The melody that brings us together and reminds us of our special moments..."
    },
    {
      id: 3,
      icon: "✨",
      frontTitle: "Special Moments",
      frontContent: "Tap to reveal!",
      backTitle: "Memories",
      backContent: "From our first date to our most adventurous times together, every moment is treasured..."
    }
  ];

  const handleCardFlip = (id) => {
    setFlippedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <Container>
      <Title>Our Love Story</Title>
      <CardGrid>
        {facts.map((fact) => (
          <CardContainer key={fact.id} onClick={() => handleCardFlip(fact.id)}>
            <Card isFlipped={flippedCards[fact.id]}>
              <CardFront>
                <CardIcon>{fact.icon}</CardIcon>
                <CardTitle>{fact.frontTitle}</CardTitle>
                <CardContent>{fact.frontContent}</CardContent>
              </CardFront>
              <CardBack>
                <CardTitle>{fact.backTitle}</CardTitle>
                <CardContent>{fact.backContent}</CardContent>
              </CardBack>
            </Card>
          </CardContainer>
        ))}
      </CardGrid>
    </Container>
  )
}

export default Facts
