// components/Projects.tsx
import Image from 'next/image'
import React from 'react'
import { Gallery } from './Gallery'
import { illustrationImages } from './data/illustrationImages'
import { useImageExpansion } from './ExpandedImage'

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  link?: string;
}

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  const { ImageExpansionModal, setExpandedImage } = useImageExpansion()
  
  return (
    <section className="space-y-6 bg-gray-800 p-4">
      {/* Image Expansion Modal */}
      <ImageExpansionModal />
      
      <h2 className="text-4xl font-bold text-[var(--brand-color)]  m-4">DEV PROJECTS</h2>
      
      <div className="space-y-4">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="flex flex-col md:flex-row gap-10 border border-gray-600 rounded-lg p-4 bg-gray-700 hover:bg-gray-650 transition-colors"
          >
            {/* Left Column - Image */}
            {project.image && (
              <div 
                className="md:w-1/2 cursor-zoom-in"
                onClick={() => project.image && setExpandedImage(project.image)}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={600}
                  className="w-full h-auto rounded border border-gray-600 object-cover "
                />
              </div>
            )}

            {/* Right Column - Content */}
            <div className="flex-1 flex flex-col">
              <h3 className="text-2xl font-semibold text-gray-100">{project.title}</h3>
              
              {project.description && (
                <p className="text-gray-300 mt-1 text-medium">{project.description}</p>
              )}
              
              <div className="mt-2 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="px-2 py-1 bg-gray-600 rounded text-sm hover:shadow-gray-800 text-gray-200 flex justify-items-center"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-items-center mt-30 w-fit px-3 py-1
                   bg-purple-400 hover:bg-purple-600 rounded text-medium text-white transition-colors"
                >
                  View Project
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
      
      {/* Illustration Projects Section */}
      <h2 className="text-4xl font-bold font-sans text-[var(--brand-color)] mb-8">ILLUSTRATION PROJECTS</h2>
      <div className="bg-gray-700 p-4 rounded-lg">
        <Gallery images={illustrationImages} />
      </div>
    </section>
  )
}