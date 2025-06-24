// components/Gallery.tsx
'use client'

import Image from 'next/image'
import { useImageExpansion } from './ExpandedImage'
import { GalleryImage } from '@/types/gallery'

interface GalleryProps {
  images: GalleryImage[]
  title?: string
}

export function Gallery({ images, title }: GalleryProps) {
  const { ImageExpansionModal, setExpandedImage } = useImageExpansion()

  return (
    <section className="space-y-4">
      {title && <h2 className="text-xl font-bold text-gray-200">{title}</h2>}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {images.map((image) => (
          <div 
            key={image.id} 
            className="group relative cursor-zoom-in"
            onClick={() => setExpandedImage(image.src)}
          >
            <div className="aspect-square overflow-hidden rounded-lg border border-gray-600">
              <Image
                src={image.src}
                alt={image.alt}
                width={200}
                height={200}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            {image.caption && (
              <p className="mt-2 text-xs text-gray-200 text-center">{image.caption}</p>
            )}
          </div>
        ))}
      </div>
      
      <ImageExpansionModal />
    </section>
  )
}