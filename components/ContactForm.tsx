import React from 'react'

function ContactForm() {
  const emailAddress = 'lovelythakur745.email@gmail.com'
  const subject = 'Contact from Portfolio'
  const body = 'Hello,\n\nI would like to get in touch regarding...'

  const handleContactClick = () => {
    window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-800 rounded-lg">
      <h2 className="text-2xl font-bold text-blue-300 mb-4">Get In Touch</h2>
      <p className="text-gray-300 mb-6">
        Have a project in mind or want to discuss opportunities? 
        Click the button below to send me an email directly from your mail client.
      </p>
      
      <button
        onClick={handleContactClick}
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-medium transition-colors"
      >
        Send Email
      </button>
      
      <p className="text-gray-400 text-sm mt-4">
        Alternatively, you can email me directly at: {emailAddress}
      </p>
    </div>
  )
}

export default ContactForm