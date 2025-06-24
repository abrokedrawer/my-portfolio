import React from 'react'
import Wave from "react-wavify";

function Wavify() {
  return (
    <div className="relative w-full h-[200px] overflow-hidden bottom-0">
      <Wave className='absolute bottom-0 left-0 w-full h-full'
        fill='#7595c0'
        paused={false}
        options={{
          height: 30,
          amplitude: 20,
          speed: 0.10,
          points: 4
        }}
        />
      <Wave className='absolute bottom-0 left-0 w-full h-full'
        fill='#2e425c'
        paused={false}
        options={{
          height: 40,
          amplitude: 20,
          speed: 0.15,
          points: 3
        }}
        />
    </div>
  )
}

export default Wavify
