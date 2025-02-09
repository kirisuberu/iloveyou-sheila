import React from 'react'

const Projects = () => {
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
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Our Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, index) => (
                <span
                  key={index}
                  className="bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
