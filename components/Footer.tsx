import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
    <div className='absolute w-full 
    left-1/2 bottom-0 
    transform -translate-x-1/2 
    text-center text-white'>
      <div className='flex justify-center gap-2'>
  <a 
    href="https://www.linkedin.com/in/aditya-negi-981849231/" 
    target="_blank" 
    rel="noopener noreferrer"
    className=""
  > 
    <Image src="/link.png" height={40} width={40} alt='LinkedIn'/>
  </a>
  <a 
    href="https://github.com/abrokedrawer" 
    target="_blank" 
    rel="noopener noreferrer"
    className=""
  >
    <Image src="/github.png" height={35} width={35} alt='GitHub'/>
  </a>
  <a 
    href="https://instagram.com/negii._.ii" 
    target="_blank" 
    rel="noopener noreferrer"
    className=""
  >
    <Image src="/insta.png" height={40} width={40} alt='Instagram'/>
  </a>
</div>
    Based on Sharlene Yap{`'`}s portfolio
    </div>
  )
}

export default Footer
