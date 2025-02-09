import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-white shadow-md">
      <div className="h-full px-3 py-4 overflow-y-auto">
        <ul className="space-y-2">
          <li>
            <Link to="/" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100">
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/projects" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100">
              <span>Projects</span>
            </Link>
          </li>
          <li>
            <Link to="/contact" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100">
              <span>Contact</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar
