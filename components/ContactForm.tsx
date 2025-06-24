import React from 'react'

function ContactForm() {
  const emailAddress = 'adityanegi370@gmail.com'
  const subject = 'Contact from Portfolio'
  const body = 'Hello,\n\nI would like to get in touch regarding...'

  const handleContactClick = () => {
    window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <div className=" bg-gray-900 rounded-lg">
      <h2 className="text-4xl pt-10 font-bold text-blue-200 mb-4">Contact Me</h2>
      <p className="text-gray-300 mb-6 text-lg">
        Click the button below to send me an email directly 
      </p>
      
      <button
        onClick={handleContactClick}
        className="px-6 py-3 text-xl bg-blue-400 hover:bg-blue-600 hover:cursor-pointer rounded-md text-white font-medium transition-colors"
      >
        Send Email
      </button>
      
      <p className="text-gray-400 text-medium pb-10 mt-4">
        Alternatively, you can email me directly at: {emailAddress}
      </p>
    </div>
  )
}

export default ContactForm