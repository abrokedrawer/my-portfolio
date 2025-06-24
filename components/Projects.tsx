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
      
      <h2 className="text-2xl font-bold text-blue-200 mb-4">DEVELOPMENT</h2>
      
      <div className="space-y-4">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="flex flex-col md:flex-row gap-4 border border-gray-600 rounded-lg p-4 bg-gray-700 hover:bg-gray-650 transition-colors"
          >
            {/* Left Column - Image */}
            {project.image && (
              <div 
                className="md:w-1/3 cursor-zoom-in"
                onClick={() => project.image && setExpandedImage(project.image)}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={250}
                  className="w-full h-auto rounded border border-gray-600 object-cover aspect-video"
                />
              </div>
            )}

            {/* Right Column - Content */}
            <div className="flex-1 flex flex-col">
              <h3 className="text-xl font-semibold text-gray-100">{project.title}</h3>
              
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
                  className="flex justify-items-center mt-20 w-fit px-3 py-1
                   bg-blue-400 hover:bg-blue-600 rounded text-medium text-white transition-colors"
                >
                  View Project
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
      
      {/* Illustration Projects Section */}
      <h2 className="text-2xl font-bold text-blue-200 mt-8 mb-4">ILLUSTRATION</h2>
      <div className="bg-gray-700 p-4 rounded-lg">
        <Gallery images={illustrationImages} />
      </div>
    </section>
  )
}