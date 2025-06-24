import Image from 'next/image'
import React from 'react'

function About() {
  return (
    <div className='bg-gray-800 pl-3'>
    
    <div className='flex flex-col md:flex-row gap-8 p-2 
    md:items-center justify-center border-b align-center
     sticky top-0 bg-white dark:bg-gradient-to-b from-gray-900 to-gray-800 '>
    <div className='w-48 h-48 flex-shrink-0'>
    <Image src="/pfp01.jpg" width={96} height={96}
    className='rounded-full overflow-hidden w-full h-full' 
    alt="pfp" 
    priority/>
    </div>
        
        <div className='align-middle'>
            <h1 className="text-4xl font-bold">Aditya Negi</h1>
      <p className="mb-2 text-xl">
        Developer & Illustrator | B.Tech in Computer Science
      </p>
        </div>
    </div>

    {/* SCROLLABLE SECTIOn*/}
    <div className='overflow-y-auto flex-1'>
    
    <div className='mt-4 justify-items-start pl-2 text-xl '>
    <div className='justify-items-start'>
        im <span className='text-3xl text-yellow-200 '>Aditya Negi
            </span>, a Btech Graduate. I do...
        <div>
            <ul className='justify-items-start pl-3 pt-3 '>
                <li> | front-end web development</li>
                <li> | digital illustration</li>
                <li> | game development</li>
            </ul>
        </div>
    </div>

    <div className='mt-4 justify-items-start'>
    <span className='font-mono font-semibold text-xl md:text-2xl'>
    EDUCATION
    </span> 
    <div className='my-1 border-1-4 pl-3 border-gray-lightest'>
        <p className='md:pt-3 text-base md:text-xl/4'>|  National Institue of Technology Karnataka</p>
        <span className='text-sm text-gray-light'>(GRADUATED 2025)</span>
    </div>
</div>


    <div className='mt-4 justify-items-start'>
    <span className='font-semibold text-xl md:text-2xl'>
    OTHER INTERESTS
    </span> 
    <div className='justify-items-start border-1-4 pl-3 border-gray-lightest'>
        <p>|  Chess, played state level tournament in 12th grade</p>
        <p>|  Powerlifting</p>
        <p>|  Speedcubing</p>
        <p>|  RPG Video Games</p>
        </div>
</div>
    

    
<div className='mt-4 justify-items-start'>
    <span className='font-mono font-semibold text-xl md:text-2xl'>
    LANGUAGE PROFECIENCY
    </span> 
    <div className='my-2 pl-3 border-gray-lightest justify-items-start pb-5'>
        <p>|  Native fluency in <span className="font-bold text-xl/2 text-yellow-200">Hindi </span> 
         and <span className="font-bold text-xl/2 text-yellow-200">English</span> </p> 
        <p>|  N5/Beginner in <span className='font-bold text-xl/2 text-yellow-200'>Japanese</span></p>
    </div>
</div>

</div>

</div>
    </div>
  )
}

export default About
