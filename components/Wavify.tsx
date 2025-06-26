import React from 'react'
import Wave from "react-wavify";

function Wavify() {
  return (
    <div className="relative w-full h-[200px] overflow-hidden bottom-0">
      <Wave className='absolute bottom-0 left-0 w-full h-full'
        fill='#8861a8'
        paused={false}
        options={{
          height: 30,
          amplitude: 30,
          speed: 0.10,
          points: 4
        }}
        />
      <Wave className='absolute bottom-0 left-0 w-full h-full'
        fill='#50387d'
        paused={false}
        options={{
          height: 45,
          amplitude: 20,
          speed: 0.25,
          points: 3
        }}
        />
    </div>
  )
}

export default Wavify
