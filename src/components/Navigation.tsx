'use client'

import React, { useState, useEffect } from 'react'

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('hero')
  const [isScrolled, setIsScrolled] = useState(false)
  const [isPresenterMode, setIsPresenterMode] = useState(false)

  const sections = [
    { id: 'hero', label: 'Introduction' },
    { id: 'tech-domains', label: 'Tech Overview' },
    { id: 'web-dev', label: 'Web Development' },
    { id: 'app-dev', label: 'App Development' },
    { id: 'ai-ml', label: 'AI/ML & Data Science' },
    { id: 'cybersecurity', label: 'Cybersecurity' },
    { id: 'blockchain', label: 'Blockchain & Web3' },
    { id: 'ai-deep-dive', label: 'AI Deep Dive' },
    { id: 'conclusion', label: 'Conclusion & Discussion' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Update active section based on scroll position
      const sectionElements = sections.map(section => ({
        id: section.id,
        element: document.getElementById(section.id),
      }))

      const currentSection = sectionElements.find(({ element }) => {
        if (!element) return false
        const rect = element.getBoundingClientRect()
        return rect.top <= 100 && rect.bottom >= 100
      })

      if (currentSection) {
        setActiveSection(currentSection.id)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container-max section-padding">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">TG</span>
            </div>
            <h1 className="text-xl font-bold gradient-text hidden sm:block">
              Tech Guide
            </h1>
          </div>
          
          <div className="hidden lg:flex items-center space-x-1 bg-white/10 rounded-full p-1">
            {sections.slice(0, 6).map((section) => (
              <div key={section.id} className="relative group">
                <button
                  onClick={() => scrollToSection(section.id)}
                  className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeSection === section.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'text-gray-700 hover:bg-white/20 hover:text-blue-600'
                  }`}
                >
                  {section.label}
                </button>
              </div>
            ))}
          </div>

          {/* Presenter Controls */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsPresenterMode(!isPresenterMode)}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                isPresenterMode
                  ? 'bg-green-600 text-white'
                  : 'bg-white/10 text-gray-700 hover:bg-white/20'
              }`}
            >
              🎤 Presenter
            </button>
            
            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Presenter Details Panel */}
        {isPresenterMode && (
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-4 mb-2 text-white animate-fade-in">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-lg font-bold flex items-center">
                <span className="mr-2 text-xl">👨‍🏫</span>
                Workshop Presenter
              </h4>
              <div className="flex space-x-2">
                <a href="https://github.com/848deepak" target="_blank" rel="noopener noreferrer" 
                   className="bg-white/20 hover:bg-white/30 p-1.5 rounded-full transition-all duration-300 text-sm">
                  🐙
                </a>
                <a href="https://www.linkedin.com/in/848deepak/" target="_blank" rel="noopener noreferrer"
                   className="bg-white/20 hover:bg-white/30 p-1.5 rounded-full transition-all duration-300 text-sm">
                  💼
                </a>
                <a href="https://www.codeunia.com" target="_blank" rel="noopener noreferrer"
                   className="bg-white/20 hover:bg-white/30 p-1.5 rounded-full transition-all duration-300 text-sm">
                  💻
                </a>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                <h5 className="font-semibold mb-2 flex items-center">
                  <span className="mr-1">🎓</span>About
                </h5>
                <p><strong>Deepak Pandey</strong></p>
                <p>B.E. Computer Science Engineering</p>
                <p>Chandigarh University (2023-2027)</p>
              </div>
              
              <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                <h5 className="font-semibold mb-2 flex items-center">
                  <span className="mr-1">🚀</span>Leadership
                </h5>
                <p><strong>Founder:</strong> Codeunia</p>
                <p><strong>Ambassador:</strong> GeeksforGeeks</p>
                <p><strong>President:</strong> HackwithIndia</p>
              </div>
              
              <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                <h5 className="font-semibold mb-2 flex items-center">
                  <span className="mr-1">💡</span>Expertise
                </h5>
                <p><strong>Stack:</strong> React, Next.js, TypeScript</p>
                <p><strong>Focus:</strong> Full-Stack, AI/ML, IoT</p>
                <p><strong>Contact:</strong> <a href="mailto:deepakpandey911494@gmail.com" className="underline hover:text-blue-200">Email</a></p>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
