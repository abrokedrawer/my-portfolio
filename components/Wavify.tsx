import React from 'react'
import Wave from "react-wavify";

function Wavify() {
  return (
    <div className="relative w-full h-[200px] overflow-hidden bottom-0">
      <Wave className='absolute bottom-0 left-0 w-full h-full'
        fill='var(--wave-one)'
        paused={false}
        options={{
          height: 40,
          amplitude: 30,
          speed: 0.10,
          points: 4
        }}
        />
      <Wave className='absolute bottom-0 left-0 w-full h-full'
        fill='url(#wave-gradient)'
        paused={false}
        options={{
          height: 50,
          amplitude: 20,
          speed: 0.15,
          points: 3
        }}
        >

        <defs>
          <linearGradient id="wave-gradient" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="var(--wave-two)" /> {/* Blue-500 */}
            <stop offset="100%" stopColor="var(--wave-grad)" /> {/* Purple-500 */}
          </linearGradient>
        </defs>
        </Wave>
    </div>
  )
}

export default Wavify
