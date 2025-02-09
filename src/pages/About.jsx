import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">About Us</h1>
      <div className="max-w-4xl">
        <p className="text-lg mb-4">
          Learn more about Sheila Labs and our mission.
        </p>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="mb-4">
            Add your company story and mission here.
          </p>
        </section>
        {/* Add more sections and content here */}
      </div>
    </div>
  )
}

export default About
