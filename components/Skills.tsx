// components/Skills.tsx
import React from 'react'

export function Skills() {
  const tools = [
    'Clip Studio Paint - Illustration + Animation',
    'Unity 2D/3D',
    'Adobe Illustrator',
    'VS Code',
    'RPG Maker'
  ]

  const devSkills = [
    'C#', 'C', 'Python', 'JavaScript', 'HTML/CSS', 'MySQL', 
    'React', 'Next.js', 'Git', 'Matlab', 'LaTeX', 'Django' , 'MongoDB',
    'Jest', 'TailwindCSS'
  ]

return (
    <div className="space-y-8 p-4 bg-gray-800">
      {/* TOOLS SECTION */}
      <div>
        <h1 className="text-2xl font-bold mb-4 text-blue-300">DESIGN & DEVELOPMENT TOOLS</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {tools.map((tool) => (
            <div 
              key={tool} 
              className="px-3 py-2 bg-gray-600 rounded text-medium text-gray-200 
                         transition-all hover:shadow-lg hover:shadow-gray-900 hover:-translate-y-0.5"
            >
              {tool}
            </div>
          ))}
        </div>
      </div>

      {/* DEVELOPMENT SECTION */}
      <div className='border-t-1 pt-5'>
        <h1 className="text-2xl font-bold mb-4 text-blue-300 ">LANGUAGES & FRAMEWORKS</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {devSkills.map((skill) => (
            <div 
              key={skill} 
              className="px-3 py-2 bg-gray-600 rounded text-medium text-gray-200 
                         transition-all hover:shadow-lg hover:shadow-gray-900 hover:-translate-y-0.5"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}