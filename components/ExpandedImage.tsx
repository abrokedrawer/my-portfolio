// components/ImageExpansion.tsx
'use client'

import Image from 'next/image'
import { useState } from 'react'

export function useImageExpansion() {
  const [expandedImage, setExpandedImage] = useState<string | null>(null)

  const ImageExpansionModal = () => {
    if (!expandedImage) return null

    return (
      <div 
        className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-zoom-out"
        onClick={() => setExpandedImage(null)}
      >
        <div className="relative w-full h-full max-w-6xl max-h-[90vh]">
          <Image
            src={expandedImage}
            alt="Expanded view"
            fill
            className="object-contain"
            priority
          />
          <button 
            className="absolute top-4 right-4 bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full transition-all"
            onClick={(e) => {
              e.stopPropagation()
              setExpandedImage(null)
            }}
            aria-label="Close image"
          >
            ✕
          </button>
        </div>
      </div>
    )
  }

  return { expandedImage, setExpandedImage, ImageExpansionModal }
}