import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  padding: 2rem;
`

const Title = styled.h1`
  font-size: 1.875rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: ${props => props.theme.colors.secondary};
`

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
  }
`

const ProjectCard = styled.div`
  background-color: ${props => props.theme.colors.white};
  border-radius: 0.5rem;
  box-shadow: ${props => props.theme.shadows.sm};
  padding: 1.5rem;
  transition: all ${props => props.theme.transitions.default};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.md};
  }
`

const ProjectTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.colors.secondary};
`

const ProjectDescription = styled.p`
  color: ${props => props.theme.colors.gray[600]};
  margin-bottom: 1rem;
`

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`

const Tag = styled.span`
  background-color: ${props => props.theme.colors.accent};
  color: ${props => props.theme.colors.primary};
  font-size: 0.875rem;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  transition: all ${props => props.theme.transitions.default};

  &:hover {
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
  }
`

function FAQ() {
  const projects = [
    {
      id: 1,
      title: 'Project One',
      description: 'Description of project one goes here.',
      tech: ['React', 'Node.js', 'MongoDB']
    },
    {
      id: 2,
      title: 'Project Two',
      description: 'Description of project two goes here.',
      tech: ['React', 'Firebase', 'Tailwind CSS']
    },
    {
      id: 3,
      title: 'Project Three',
      description: 'Description of project three goes here.',
      tech: ['Next.js', 'PostgreSQL', 'TypeScript']
    }
  ]

  return (
    <Container>
      <Title>Our Projects</Title>
      <ProjectGrid>
        {projects.map((project) => (
          <ProjectCard key={project.id}>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <TagContainer>
              {project.tech.map((tech, index) => (
                <Tag key={index}>{tech}</Tag>
              ))}
            </TagContainer>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </Container>
  )
}

export default FAQ
