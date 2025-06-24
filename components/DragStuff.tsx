import React, { useEffect, useState } from 'react'

function DragStuff({
  title,
  children,
  onClose
}: {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: window.innerWidth / 2 - 300, y: 50 });

  useEffect(() => {
    const centerX = window.innerWidth / 2 - 500; 
    const centerY = 50;
    setPosition({ x: centerX, y: centerY });
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartPos({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    })
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - startPos.x,
      y: e.clientY - startPos.y
    })
  }

  const handleMouseUp = () => {
    setIsDragging(false);
  }

  return (
    <div className='fixed inset-0 z-50'
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}>
      
      <div 
        className='absolute w-180 md:w-240 bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden'
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          cursor: isDragging ? 'grabbing' : 'grab',
          maxHeight: '80vh', // 80% of viewport height
          height: 'auto',
          display: 'flex',
          width: '70rem',     // ← Edit this value
          minWidth: '20rem',  // ← Minimum width
          maxWidth: '90vw',
          flexDirection: 'column'
        }}>

        {/* Window header */}
        <div
          className='bg-gray-900 px-4 py-2 border-b border-gray-300 flex justify-between items-center' 
          onMouseDown={handleMouseDown}>
          <h3 className='font-bold text-2xl text-white'>{title}</h3>
          <button onClick={onClose} className='text-gray-100 hover:text-gray-400'>
            {`[`} X {`]`}
          </button>
        </div>

        {/* Scrollable content area */}
        <div 
          className='flex-1 overflow-y-auto p-0.5 bg-white cursor-default'
          style={{
            maxHeight: 'calc(80vh - 50px)' // Account for header height
          }}>
          {children}
        </div>

      </div>
    </div>
  )
}

export default DragStuff