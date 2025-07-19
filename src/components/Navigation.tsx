'use client'

import React, { useState, useEffect } from 'react'

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('hero')
  const [isScrolled, setIsScrolled] = useState(false)
  const [isPresenterMode, setIsPresenterMode] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [showQuickActions, setShowQuickActions] = useState(false)

  // Only show relevant workshop sections
  const sections = [
    { id: 'hero', label: 'Introduction', icon: '🏠', duration: '5m' },
    { id: 'tech-domains', label: 'Tech Overview', icon: '🌐', duration: '20m' },
    { id: 'ai-deep-dive', label: 'AI Deep Dive', icon: '🧠', duration: '20m' },
    { id: 'conclusion', label: 'Conclusion', icon: '🎯', duration: '5m' },
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
        return rect.top <= 120 && rect.bottom >= 120 // Increased offset to prevent overlap
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
      // Add offset to prevent header overlap
      const headerHeight = 80 // Approximate header height
      const elementPosition = element.offsetTop - headerHeight - 20
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
    setIsMobileMenuOpen(false)
  }

  const currentSectionData = sections.find(s => s.id === activeSection)

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${
      isScrolled ? 'glass shadow-2xl border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="container-max section-padding">
        {/* Main Navigation Bar */}
        <div className="flex items-center justify-between py-3">
          {/* Enhanced Logo Section */}
          <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 animate-pulse-glow">
              <span className="text-white font-bold text-sm">TG</span>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full animate-pulse"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold gradient-text">Tech Guide</h1>
              <p className="text-xs text-gray-500 font-medium">Workshop Presentation</p>
            </div>
          </div>
          
          {/* Enhanced Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            <div className="glass rounded-xl p-1 border border-white/20 shadow-lg">
              {sections.map((section) => (
                <div key={section.id} className="relative group inline-block">
                <button
                  onClick={() => scrollToSection(section.id)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center space-x-2 ${
                    activeSection === section.id
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                        : 'text-gray-700 hover:bg-white/20 hover:text-blue-600 hover:scale-105'
                  }`}
                >
                    <span className="text-sm">{section.icon}</span>
                    <span>{section.label}</span>
                    {activeSection === section.id && (
                      <span className="text-xs bg-white/20 px-1.5 py-0.5 rounded-full">
                        {section.duration}
                      </span>
                    )}
                </button>
                  
                  {/* Enhanced tooltip */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                    <div className="glass-dark px-3 py-2 rounded-lg text-xs whitespace-nowrap backdrop-blur-sm border border-white/10">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm">{section.icon}</span>
                        <div>
                          <div className="font-semibold">{section.label}</div>
                          <div className="text-xs text-gray-300">{section.duration}</div>
                        </div>
                      </div>
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-3 border-r-3 border-t-3 border-transparent border-t-gray-900/80"></div>
                    </div>
                  </div>
              </div>
            ))}
            </div>
          </div>

          {/* Enhanced Right Side Controls */}
          <div className="flex items-center space-x-2">
            {/* Quick Actions Menu */}
            <div className="relative">
              <button
                onClick={() => setShowQuickActions(!showQuickActions)}
                className="p-2 rounded-lg glass hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="w-4 h-4 flex flex-col justify-center items-center space-y-0.5">
                  <div className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-blue-600 transition-colors"></div>
                  <div className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-purple-600 transition-colors"></div>
                  <div className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-indigo-600 transition-colors"></div>
                </div>
              </button>
              
              {showQuickActions && (
                <div className="absolute top-full right-0 mt-2 glass rounded-xl p-3 shadow-2xl border border-white/20 animate-fade-in min-w-[180px]">
                  <div className="space-y-1">
                    <button className="w-full text-left p-2 rounded-lg hover:bg-white/20 transition-all duration-300 flex items-center space-x-2">
                      <span className="text-sm">⏱️</span>
                      <div>
                        <div className="font-semibold text-xs">Timer</div>
                        <div className="text-xs text-gray-500">Workshop timing</div>
                      </div>
                    </button>
                    <button className="w-full text-left p-2 rounded-lg hover:bg-white/20 transition-all duration-300 flex items-center space-x-2">
                      <span className="text-sm">🎯</span>
                      <div>
                        <div className="font-semibold text-xs">Polls</div>
                        <div className="text-xs text-gray-500">Audience engagement</div>
                      </div>
                    </button>
                    <button className="w-full text-left p-2 rounded-lg hover:bg-white/20 transition-all duration-300 flex items-center space-x-2">
                      <span className="text-sm">⌨️</span>
                      <div>
                        <div className="font-semibold text-xs">Shortcuts</div>
                        <div className="text-xs text-gray-500">Keyboard help</div>
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Enhanced Presenter Controls */}
            <button
              onClick={() => setIsPresenterMode(!isPresenterMode)}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center space-x-2 ${
                isPresenterMode
                  ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg animate-pulse-glow'
                  : 'glass text-gray-700 hover:bg-white/20 hover:text-green-600'
              }`}
            >
              <span className="text-sm animate-bounce-gentle">🎤</span>
              <span className="hidden sm:inline">Presenter</span>
              {isPresenterMode && (
                <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
              )}
            </button>
            
            {/* Enhanced Mobile menu button */}
            <div className="lg:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg glass hover:bg-white/20 transition-all duration-300 relative"
              >
                <div className="w-5 h-5 flex flex-col justify-center items-center space-y-0.5">
                  <div className={`w-4 h-0.5 bg-gray-700 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></div>
                  <div className={`w-4 h-0.5 bg-gray-700 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
                  <div className={`w-4 h-0.5 bg-gray-700 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></div>
                </div>
                {isMobileMenuOpen && (
                  <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-blue-500 rounded-full animate-pulse"></div>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden glass rounded-xl p-4 mb-3 border border-white/20 animate-fade-in">
            <div className="grid grid-cols-2 gap-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`p-3 rounded-lg text-sm font-medium transition-all duration-300 flex items-center space-x-2 ${
                    activeSection === section.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                      : 'text-gray-700 hover:bg-white/20 hover:text-blue-600'
                  }`}
                >
                  <span className="text-sm">{section.icon}</span>
                  <div className="text-left">
                    <div className="font-semibold truncate text-xs">{section.label}</div>
                    <div className="text-xs opacity-75">{section.duration}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Enhanced Presenter Details Panel */}
        {isPresenterMode && (
          <div className="glass-dark rounded-xl p-4 mb-3 text-white animate-fade-in">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-bold flex items-center">
                <span className="mr-2 text-xl animate-bounce-gentle">👨‍🏫</span>
                Workshop Presenter
              </h4>
              <div className="flex space-x-2">
                <a href="https://github.com/848deepak" target="_blank" rel="noopener noreferrer" 
                   className="bg-white/20 hover:bg-white/30 p-2 rounded-lg transition-all duration-300 text-sm hover:scale-110 group">
                  <span className="group-hover:animate-bounce-gentle">🐙</span>
                </a>
                <a href="https://www.linkedin.com/in/848deepak/" target="_blank" rel="noopener noreferrer"
                   className="bg-white/20 hover:bg-white/30 p-2 rounded-lg transition-all duration-300 text-sm hover:scale-110 group">
                  <span className="group-hover:animate-bounce-gentle">💼</span>
                </a>
                <a href="https://www.codeunia.com" target="_blank" rel="noopener noreferrer"
                   className="bg-white/20 hover:bg-white/30 p-2 rounded-lg transition-all duration-300 text-sm hover:scale-110 group">
                  <span className="group-hover:animate-bounce-gentle">💻</span>
                </a>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="glass rounded-lg p-3 border border-white/10">
                <h5 className="font-bold mb-2 flex items-center text-blue-300">
                  <span className="mr-1 text-sm">🎓</span>About
                </h5>
                <p className="font-semibold text-sm mb-1">Deepak Pandey</p>
                <p className="text-gray-300 text-xs">B.E. Computer Science Engineering</p>
                <p className="text-gray-300 text-xs">Chandigarh University (2023-2027)</p>
              </div>
              
              <div className="glass rounded-lg p-3 border border-white/10">
                <h5 className="font-bold mb-2 flex items-center text-purple-300">
                  <span className="mr-1 text-sm">🚀</span>Leadership
                </h5>
                <div className="space-y-1">
                  <p className="text-xs"><strong>Founder:</strong> Codeunia</p>
                  <p className="text-xs"><strong>Ambassador:</strong> GeeksforGeeks</p>
                  <p className="text-xs"><strong>President:</strong> HackwithIndia</p>
                </div>
              </div>
              
              <div className="glass rounded-lg p-3 border border-white/10">
                <h5 className="font-bold mb-2 flex items-center text-green-300">
                  <span className="mr-1 text-sm">💡</span>Expertise
                </h5>
                <div className="space-y-1">
                  <p className="text-xs"><strong>Stack:</strong> React, Next.js, TypeScript</p>
                  <p className="text-xs"><strong>Focus:</strong> Full-Stack, AI/ML, IoT</p>
                  <p className="text-xs"><strong>Contact:</strong> <a href="mailto:deepakpandey911494@gmail.com" className="underline hover:text-blue-200 transition-colors">Email</a></p>
                </div>
              </div>
            </div>

            {/* Enhanced Workshop Stats */}
            <div className="mt-4 grid grid-cols-4 gap-3">
              <div className="text-center glass rounded-lg p-2 border border-white/10">
                <div className="text-lg font-bold text-blue-400">50</div>
                <div className="text-xs text-gray-300">Minutes</div>
              </div>
              <div className="text-center glass rounded-lg p-2 border border-white/10">
                <div className="text-lg font-bold text-purple-400">4</div>
                <div className="text-xs text-gray-300">Sections</div>
              </div>
              <div className="text-center glass rounded-lg p-2 border border-white/10">
                <div className="text-lg font-bold text-green-400">∞</div>
                <div className="text-xs text-gray-300">Possibilities</div>
              </div>
              <div className="text-center glass rounded-lg p-2 border border-white/10">
                <div className="text-lg font-bold text-orange-400">🎯</div>
                <div className="text-xs text-gray-300">Interactive</div>
              </div>
            </div>

            {/* Current Section Info */}
            {currentSectionData && (
              <div className="mt-4 glass rounded-lg p-3 border border-white/10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">{currentSectionData.icon}</span>
                    <div>
                      <div className="font-semibold text-sm">Current Section</div>
                      <div className="text-xs text-gray-300">{currentSectionData.label}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-300">Duration</div>
                    <div className="font-semibold text-green-400 text-sm">{currentSectionData.duration}</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
