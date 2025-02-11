import React, { useState, useCallback } from 'react'
import styled, { keyframes } from 'styled-components'

const PageContainer = styled.div`
  width: 100%;
  min-height: 100%;
  padding: 2rem;
  background-color: ${props => props.theme.colors.background};
`

const ContentContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const Title = styled.h1`
  font-size: 1.875rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: ${props => props.theme.colors.secondary};
  grid-column: 1 / -1;
`

const ContactInfo = styled.div`
  background-color: ${props => props.theme.colors.white};
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: ${props => props.theme.shadows.sm};
  height: fit-content;
`

const InfoTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.primary};
`

const InfoText = styled.p`
  color: ${props => props.theme.colors.gray[600]};
  margin-bottom: 1.5rem;
  line-height: 1.6;
`

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.gray[700]};
  
  &:last-child {
    margin-bottom: 0;
  }
`

const FormContainer = styled.div`
  background-color: ${props => props.theme.colors.white};
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: ${props => props.theme.shadows.sm};
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`

const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${props => props.theme.colors.gray[700]};
  margin-bottom: 0.25rem;
`

const Input = styled.input`
  width: 100%;
  padding: 0.625rem;
  border: 1px solid ${props => props.theme.colors.gray[300]};
  border-radius: 0.375rem;
  box-shadow: ${props => props.theme.shadows.sm};
  transition: all ${props => props.theme.transitions.default};

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 2px ${props => props.theme.colors.accent};
  }

  &::placeholder {
    color: ${props => props.theme.colors.gray[400]};
  }
`

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.625rem;
  border: 1px solid ${props => props.theme.colors.gray[300]};
  border-radius: 0.375rem;
  box-shadow: ${props => props.theme.shadows.sm};
  transition: all ${props => props.theme.transitions.default};

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 2px ${props => props.theme.colors.accent};
  }

  &::placeholder {
    color: ${props => props.theme.colors.gray[400]};
  }
`

const Button = styled.button`
  background-color: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  margin: 1rem 0;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: ${props => props.theme.colors.secondary};
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`

const PickUpLineCard = styled.div`
  background-color: ${props => props.theme.colors.white};
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: ${props => props.theme.shadows.sm};
  transition: transform 0.2s ease-in-out;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${props => props.theme.shadows.md};
  }
`

const PickUpLineText = styled.p`
  font-size: 1.125rem;
  color: ${props => props.theme.colors.gray[800]};
  margin-bottom: 0.5rem;
  line-height: 1.6;
`

const AnswerText = styled.p`
  font-size: 1rem;
  color: ${props => props.theme.colors.primary};
  margin: 0.5rem 0;
  font-style: italic;
`

const explode = keyframes`
  0% {
    transform: translate(0, 0) scale(0);
    opacity: 1;
  }
  100% {
    transform: translate(var(--tx), var(--ty)) scale(1);
    opacity: 0;
  }
`;

const Heart = styled.div`
  position: absolute;
  color: ${props => props.theme.colors.primary};
  font-size: 1.5rem;
  pointer-events: none;
  animation: ${explode} 1s ease-out forwards;
  z-index: 100;
  transform-origin: center center;
  margin-left: -0.75rem;  /* Half of font-size to center horizontally */
  margin-top: -0.75rem;   /* Half of font-size to center vertically */
`;

const pickUpLines = [
  {
    text: "Are you a keyboard? Because you're just my type!",
    answer: "Well, I hope we can create something special together, one keystroke at a time!"
  },
  {
    text: "Is your name Wi-Fi? Because I'm really feeling a connection!",
    answer: "Let's hope this connection has low latency and high bandwidth!"
  },
  {
    text: "Are you a magician? Because whenever I look at you, everyone else disappears!",
    answer: "No magic here, just the chemistry between us!"
  },
  {
    text: "Do you have a map? I keep getting lost in your eyes!",
    answer: "GPS might help, but I'd rather stay lost with you!"
  },
  {
    text: "Are you made of copper and tellurium? Because you're Cu-Te!",
    answer: "And together we could create some amazing reactions!"
  },
  {
    text: "Are you a function? Because you complete me!",
    answer: "return true; // Always returns true for you!"
  },
  {
    text: "Are you composed of Beryllium, Gold, and Titanium? Because you are Be-Au-Ti-ful!",
    answer: "Our chemistry is simply elemental!"
  },
  {
    text: "Are you a photon? Because you light up my life!",
    answer: "Together we can travel at the speed of love!"
  },
  {
    text: "Do you have 11 protons? Because you're Sodium fine!",
    answer: "Na, you're the one making my electrons excited!"
  },
  {
    text: "Are you gravity? Because I keep falling for you!",
    answer: "The force of attraction between us is undeniable!"
  },
  {
    text: "Are you a charged particle? Because I'm attracted to you!",
    answer: "Our bond is stronger than the electromagnetic force!"
  },
  {
    text: "Is your name Planck? Because you're the constant in my life!",
    answer: "Our love is truly quantum-entangled!"
  },
  {
    text: "Are you activation energy? Because you get me all excited!",
    answer: "Let's catalyze this reaction together!"
  },
  {
    text: "Do you have a band gap? Because you're a real semiconductor!",
    answer: "Let's make our energy levels overlap!"
  },
  {
    text: "Are you mitochondria? Because you're the powerhouse of my heart!",
    answer: "You've got my ATP levels rising!"
  },
  {
    text: "Is your name DNA? Because we'd make a perfect double helix!",
    answer: "Our base pairs were meant to be together!"
  },
  {
    text: "Are you an enzyme? Because you speed up my heart rate!",
    answer: "You're the substrate to my active site!"
  },
  {
    text: "Do you have a half-life? Because I want to decay with you forever!",
    answer: "Our love is more stable than uranium-238!"
  },
  {
    text: "Are you the square root of -1? Because you're the imaginary part of my life!",
    answer: "Together we make a complex but perfect pair!"
  },
  {
    text: "Are you a calculus problem? Because I'd love to find your derivatives!",
    answer: "Let's integrate our lives and find the area under our love curve!"
  },
  {
    text: "Is your name Pi? Because you're irrational but perfect!",
    answer: "Our love is transcendental and never-ending!"
  },
  {
    text: "Are you a right angle? Because you're always looking 90° fine!",
    answer: "You've got me going on a tangent!"
  },
  {
    text: "Is your name Fibonacci? Because our love grows exponentially!",
    answer: "Each day with you is greater than the sum of the two before!"
  },
  {
    text: "Are you a prime number? Because you're one in a million and indivisible!",
    answer: "Let's make our factors multiply together!"
  },
  {
    text: "Do you believe in parallel lines? Because I can see our lives never diverging!",
    answer: "We'll stay equidistant forever!"
  },
  {
    text: "Are you an asymptote? Because I find myself getting closer and closer to you!",
    answer: "The limit of my love for you approaches infinity!"
  },
  {
    text: "Is your name Euler? Because you're the natural choice for me!",
    answer: "e to the power of our love equals pure happiness!"
  },
  {
    text: "Are you a circle? Because you've got me going around in my head all day!",
    answer: "Our love is 2πr perfect!"
  }
];

function HeartExplosion({ x, y }) {
  const hearts = Array.from({ length: 8 }).map((_, i) => {
    const angle = (i * Math.PI * 2) / 8;
    const tx = Math.cos(angle) * 100;
    const ty = Math.sin(angle) * 100;
    return (
      <Heart
        key={i}
        style={{
          left: x,
          top: y,
          '--tx': `${tx}px`,
          '--ty': `${ty}px`,
        }}
      >
        ❤️
      </Heart>
    );
  });

  return <>{hearts}</>;
}

function PickUpLines() {
  const [visibleAnswers, setVisibleAnswers] = useState(new Set());
  const [heartAnimations, setHeartAnimations] = useState(new Map());

  const addHeartExplosion = useCallback((index, e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const id = Date.now();
    setHeartAnimations(prev => {
      const newMap = new Map(prev);
      const animations = newMap.get(index) || [];
      newMap.set(index, [...animations, { id, x, y }]);
      return newMap;
    });
    
    setTimeout(() => {
      setHeartAnimations(prev => {
        const newMap = new Map(prev);
        const animations = newMap.get(index) || [];
        newMap.set(index, animations.filter(heart => heart.id !== id));
        return newMap;
      });
    }, 1000);
  }, []);

  const toggleAnswer = useCallback((index, e) => {
    addHeartExplosion(index, e);
    setVisibleAnswers(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  }, [addHeartExplosion]);

  return (
    <PageContainer>
      <Title>Pick-up Lines</Title>
      <ContentContainer>
        {pickUpLines.map((line, index) => (
          <PickUpLineCard key={index}>
            <PickUpLineText>{line.text}</PickUpLineText>
            <Button onClick={(e) => toggleAnswer(index, e)}>
              {visibleAnswers.has(index) ? 'Hide Answer' : 'Show Answer'}
            </Button>
            {visibleAnswers.has(index) && (
              <AnswerText>{line.answer}</AnswerText>
            )}
            {(heartAnimations.get(index) || []).map(heart => (
              <HeartExplosion key={heart.id} x={heart.x} y={heart.y} />
            ))}
          </PickUpLineCard>
        ))}
      </ContentContainer>
    </PageContainer>
  );
}

export default PickUpLines
