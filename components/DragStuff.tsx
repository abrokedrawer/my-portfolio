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
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) {
        setPosition({ x: 0, y: 0 }); 
      } else {
        setPosition({ 
          x: window.innerWidth / 2 - 500, 
          y: 50 
        });
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (isMobile) return;
    setIsDragging(true);
    setStartPos({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || isMobile) return;
    setPosition({
      x: e.clientX - startPos.x,
      y: e.clientY - startPos.y
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className='fixed inset-0 z-50'
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}>
      
      <div 
        className={`absolute bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden ${
          isMobile ? 'inset-0' : 'w-[70rem] max-w-[90vw] min-w-[20rem]'
        }`}
        style={{
          transform: isMobile ? 'none' : `translate(${position.x}px, ${position.y}px)`,
          cursor: isDragging ? 'grabbing' : isMobile ? 'default' : 'grab',
          maxHeight: '80vh',
          height: 'auto',
          display: 'flex',
          flexDirection: 'column'
        }}>

        {/* Window header - hidden on mobile */}
        {!isMobile && (
          <div
            className='bg-gray-900 px-4 py-2 border-b border-gray-300 flex justify-between items-center' 
            onMouseDown={handleMouseDown}>
            <h3 className='font-bold text-2xl text-white'>{title}</h3>
            <button onClick={onClose} className='text-gray-100 hover:text-gray-400'>
              {`[`} X {`]`}
            </button>
          </div>
        )}

        {/* Close button for mobile */}
        {isMobile && (
          <button 
            onClick={onClose}
            className='absolute top-2 right-2 z-10 bg-gray-800 text-white p-2 rounded-full'
          >
            ✕
          </button>
        )}

        {/* Scrollable content area */}
        <div 
          className='flex-1 overflow-y-auto bg-gray-900'
          style={{
            maxHeight: isMobile ? '100vh' : 'calc(80vh - 50px)'
          }}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default DragStuff