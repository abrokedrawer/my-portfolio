'use client'

import { useState } from "react"
import DragStuff from "./DragStuff";
import About from "./About";
import ContactForm from "./ContactForm";
import { Projects } from "./Projects";
import project1 from "./data/project1";
import { Skills } from "./Skills";
import project2 from "./data/project2";
import Image from "next/image";
import project3 from "./data/project3";
import project4 from "./data/project4";
import project5 from "./data/project5";

export default function MainContent() {
    const projects = [project2, project3, project4, project5, project1];
    const [openWindow, setOpenWindow] = useState<string | null>(null);

    const handleLinkClick = (windowName: string) => {
        setOpenWindow(windowName);
    }

    return (
        <main className="relative flex flex-col items-center justify-center min-h-[60vh] text-center w-full px-4 sm:px-0 sm:max-w-[55%] mx-auto border border-gray-800 dark:border-gray-200 rounded-lg p-2 bg-gradient-to-t from-gray-800 to-gray-900">

            {/* Home indicator */}
            <span className="absolute -top-3 left-4 bg-white px-2 text-gray-500 text-xl rounded-sm">
                home
            </span>

            {/* Main content */}
            <div className="w-full"> {/* Added container for better mobile control */}
                <div className="mb-8 sm:mb-12">
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold mb-4">
                        hi! i{`'`}m <span className="text-yellow-200">Aditya Negi</span>
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-400">
                        developer, illustrator
                    </p>
                </div>
                
                {/* Navigation */}
                <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-4">
                    {[
                        { name: 'about', icon: '/about.png' },
                        { name: 'skills', icon: '/skills.png' },
                        { name: 'projects', icon: '/iteration.png' },
                        { name: 'contact', icon: '/contact.png' }
                    ].map((item) => (
                        <div key={item.name} className="flex flex-col items-center w-20 sm:w-24">
                            <button
                                onClick={() => handleLinkClick(item.name)}
                                className="text-sm sm:text-lg lowercase hover:underline cursor-pointer"
                            >
                                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-sm overflow-hidden">
                                    <Image 
                                        src={item.icon} 
                                        alt={item.name}
                                        width={30}
                                        height={30}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                {item.name}
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Windows */}
            {openWindow && (
                <DragStuff 
                    title={openWindow}
                    onClose={() => setOpenWindow(null)}
                >
                    {openWindow === 'about' && <About />}
                    {openWindow === 'projects' && <Projects projects={projects} />}
                    {openWindow === 'skills' && <Skills />}
                    {openWindow === 'contact' && <ContactForm />}
                </DragStuff> 
            )}
        </main>
    )
}