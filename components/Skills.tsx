// components/Skills.tsx
import React from 'react'

export function Skills() {
  const tools = [
    'Clip Studio Paint - Illustration + Animation',
    'Unity 2D/3D',
    'Adobe Illustrator',
    'VS Code',
    'RPG Maker',
    'Figma - Wireframes',
    'Spline'
  ]

  const devSkills = [
    'JavaScript', 'HTML/CSS', 'MySQL', 
    'React', 'Next.js', 'Git', 'Matlab', 'LaTeX', 'Django' , 'MongoDB',
    'Jest', 'TailwindCSS', 'UI/UX', 'Postgres','C#', 'C', 'Python', 
  ]

return (
    <div className="space-y-8 p-4 bg-[var(--dragstuff)] surface-color">
      {/* TOOLS SECTION */}
      <div>
        <h1 className="text-2xl font-bold mb-4 text-[var(--brand-color)] ">DESIGN & DEVELOPMENT TOOLS</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {tools.map((tool) => (
            <div 
              key={tool} 
              className="px-3 py-2 bg-[var(--dragstuff2)] rounded text-medium text-gray-200 
                         transition-all hover:shadow-lg hover:shadow-gray-900 hover:-translate-y-0.5"
            >
              {tool}
            </div>
          ))}
        </div>
      </div>

      {/* DEVELOPMENT SECTION */}
      <div className='border-t-1 pt-5'>
        <h1 className="text-2xl font-bold mb-4 text-[var(--brand-color)]  ">LANGUAGES & FRAMEWORKS</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {devSkills.map((skill) => (
            <div 
              key={skill} 
              className="px-3 py-2 bg-[var(--dragstuff2)] rounded text-medium text-gray-200 
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