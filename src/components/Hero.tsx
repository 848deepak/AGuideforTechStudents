'use client'

import React, { useState, useEffect } from 'react'

const Hero = () => {
  const [currentExample, setCurrentExample] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const techExamples = [
    { icon: "📱", text: "Smartphone Apps", color: "from-blue-500 to-cyan-500", description: "Mobile experiences that connect billions" },
    { icon: "🌐", text: "Websites & Web Apps", color: "from-green-500 to-emerald-500", description: "The digital foundation of modern life" },
    { icon: "🤖", text: "ChatGPT & AI Assistants", color: "from-purple-500 to-pink-500", description: "Intelligent systems that understand us" },
    { icon: "🎮", text: "Games & VR Experiences", color: "from-orange-500 to-red-500", description: "Immersive digital worlds" },
    { icon: "🚗", text: "Smart Vehicles & Tesla", color: "from-indigo-500 to-blue-500", description: "The future of transportation" },
    { icon: "🏠", text: "IoT & Smart Homes", color: "from-teal-500 to-green-500", description: "Connected living spaces" },
    { icon: "💻", text: "GitHub Copilot Coding", color: "from-gray-500 to-slate-500", description: "AI-powered development" },
    { icon: "🎨", text: "AI Art & DALL-E", color: "from-pink-500 to-rose-500", description: "Creative intelligence unleashed" }
  ]

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentExample((prev) => (prev + 1) % techExamples.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 pb-20 relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-float"
          style={{
            transform: `translate(${(mousePosition.x - window.innerWidth / 2) * 0.02}px, ${(mousePosition.y - window.innerHeight / 2) * 0.02}px)`
          }}
        ></div>
        <div 
          className="absolute top-3/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-float"
          style={{animationDelay: '1s', animationDuration: '6s'}}
        ></div>
        <div 
          className="absolute top-1/2 left-3/4 w-80 h-80 bg-gradient-to-r from-green-400/20 to-teal-400/20 rounded-full blur-3xl animate-float"
          style={{animationDelay: '2s', animationDuration: '8s'}}
        ></div>
        
        {/* Floating Tech Icons with enhanced animations */}
        <div className="absolute top-20 right-20 text-6xl animate-bounce-gentle" style={{animationDelay: '0.5s'}}>💻</div>
        <div className="absolute bottom-32 left-20 text-5xl animate-bounce-gentle" style={{animationDelay: '1.5s'}}>🚀</div>
        <div className="absolute top-1/3 right-1/3 text-4xl animate-bounce-gentle" style={{animationDelay: '2.5s'}}>⚡</div>
        <div className="absolute top-2/3 left-1/4 text-4xl animate-bounce-gentle" style={{animationDelay: '3.5s'}}>🎯</div>
        
        {/* Particle effect */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-400/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="container-max section-padding text-center relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Title with enhanced typography */}
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              <span className="gradient-text">One day Hands-on workshop</span>
              <br />
              <span className="text-gray-800 font-extrabold">on Machine Learning</span>
              <br />
              <span className="text-3xl md:text-4xl font-normal text-gray-600 mt-6 block">
                at <span className="gradient-text-secondary font-semibold">CHANDIGARH UNIVERSITY</span>
              </span>
            </h1>

            {/* Enhanced Dynamic Tech Examples Banner */}
            <div className="mb-12">
              <div className="glass rounded-3xl p-8 shadow-2xl border border-white/30">
                <p className="text-xl text-gray-600 mb-6 font-medium">Technology powers everything around us:</p>
                <div className="flex items-center justify-center space-x-6 mb-6">
                  <div className={`bg-gradient-to-r ${techExamples[currentExample].color} rounded-2xl p-6 text-white transform transition-all duration-700 scale-110 shadow-2xl animate-pulse-glow`}>
                    <span className="text-5xl">{techExamples[currentExample].icon}</span>
                  </div>
                  <div className="text-left">
                    <div className="text-2xl font-bold text-gray-700 mb-2">
                      {techExamples[currentExample].text}
                    </div>
                    <div className="text-gray-500 text-lg">
                      {techExamples[currentExample].description}
                    </div>
                  </div>
                </div>
                <div className="flex justify-center space-x-3">
                  {techExamples.map((_, index) => (
                    <div
                      key={index}
                      className={`w-3 h-3 rounded-full transition-all duration-500 ${
                        index === currentExample 
                          ? 'bg-gradient-to-r from-blue-500 to-purple-500 scale-125' 
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced Welcome Section */}
          <div className="glass rounded-3xl p-10 shadow-2xl border border-white/20 mb-12 animate-slide-in-left">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="text-left">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                  <span className="mr-3 text-4xl animate-bounce-gentle">👋</span>
                  Welcome to Our Workshop!
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                  This session is designed not as a traditional lecture, but as a <strong className="gradient-text">guiding conversation</strong>. 
                  The technological landscape is expansive and constantly evolving, which can sometimes feel overwhelming 
                  when trying to determine one&apos;s place within it.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                  This discussion aims to provide <strong className="gradient-text-secondary">clarity, direction, and inspiration</strong> for building 
                  a strong foundation for your future in technology.
                </p>
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl border-l-4 border-blue-500 shadow-lg">
                  <p className="text-blue-800 font-medium">
                    <strong>🎯 Interactive Format:</strong> Feel free to ask questions throughout the session. 
                    We&apos;ll explore real examples and have discussions about your interests!
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                {/* Enhanced Feature Cards */}
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-6 rounded-2xl text-white transform hover:scale-105 transition-all duration-300 shadow-xl">
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl animate-pulse">🎯</div>
                    <div>
                      <div className="font-bold text-xl">Workshop Focus</div>
                      <div className="text-green-100">Practical guidance & insights</div>
                    </div>
                  </div>
                </div>
                
                {/* Interactive Learning Features */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 transform hover:translate-x-2 transition-all duration-300 p-4 rounded-xl hover:bg-white/50">
                    <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
                    <span className="text-gray-700 flex items-center text-lg">
                      <span className="mr-3 text-2xl">💡</span>
                      Interactive Learning Experience
                    </span>
                  </div>
                  <div className="flex items-center space-x-4 transform hover:translate-x-2 transition-all duration-300 p-4 rounded-xl hover:bg-white/50" style={{animationDelay: '0.5s'}}>
                    <div className="w-4 h-4 bg-purple-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                    <span className="text-gray-700 flex items-center text-lg">
                      <span className="mr-3 text-2xl">🎯</span>
                      Career Foundation Building
                    </span>
                  </div>
                  <div className="flex items-center space-x-4 transform hover:translate-x-2 transition-all duration-300 p-4 rounded-xl hover:bg-white/50" style={{animationDelay: '1s'}}>
                    <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                    <span className="text-gray-700 flex items-center text-lg">
                      <span className="mr-3 text-2xl">🧠</span>
                      AI/ML Deep Dive
                    </span>
                  </div>
                </div>

                {/* Enhanced Stats */}
                <div className="glass p-6 rounded-2xl border border-white/20">
                  <div className="text-lg text-gray-700 font-semibold mb-4">Workshop Coverage</div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="font-bold text-2xl gradient-text">10+</div>
                      <div className="text-gray-600 text-sm">Tech Domains</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-2xl gradient-text-secondary">50+</div>
                      <div className="text-gray-600 text-sm">Examples</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-2xl gradient-text-accent">∞</div>
                      <div className="text-gray-600 text-sm">Possibilities</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Workshop Agenda */}
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-3xl p-10 text-white mb-12 transform hover:scale-[1.02] transition-all duration-500 shadow-2xl">
            <h3 className="text-3xl font-bold mb-8 text-center flex items-center justify-center">
              <span className="mr-4 text-4xl animate-bounce-gentle">📋</span>
              Today&apos;s Workshop Agenda
            </h3>
            <div className="grid lg:grid-cols-3 gap-8 text-left">
              <div className="glass-dark rounded-2xl p-6 backdrop-blur-sm transform hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <h4 className="font-bold text-xl mb-3 flex items-center">
                  <span className="mr-3 text-3xl animate-pulse">🌐</span> Tech Landscape Overview
                </h4>
                <p className="text-blue-100 text-base mb-3">Explore 10+ tech domains with real-world applications and beginner projects</p>
                <div className="text-sm text-blue-200 flex items-center mb-3">
                  <span className="mr-2">⏱️</span> 20 minutes
                </div>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                </div>
              </div>
              <div className="glass-dark rounded-2xl p-6 backdrop-blur-sm transform hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <h4 className="font-bold text-xl mb-3 flex items-center">
                  <span className="mr-3 text-3xl animate-pulse" style={{animationDelay: '0.5s'}}>🤖</span> AI & Machine Learning
                </h4>
                <p className="text-blue-100 text-base mb-3">Deep dive into AI types, ML workflows, and practical applications</p>
                <div className="text-sm text-blue-200 flex items-center mb-3">
                  <span className="mr-2">⏱️</span> 20 minutes
                </div>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.1s'}}></div>
                  <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
                  <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                </div>
              </div>
              <div className="glass-dark rounded-2xl p-6 backdrop-blur-sm transform hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <h4 className="font-bold text-xl mb-3 flex items-center">
                  <span className="mr-3 text-3xl animate-pulse" style={{animationDelay: '1s'}}>🚀</span> Your Next Steps
                </h4>
                <p className="text-blue-100 text-base mb-3">Actionable guidance for your tech journey</p>
                <div className="text-sm text-blue-200 flex items-center mb-3">
                  <span className="mr-2">💡</span> Interactive session
                </div>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                  <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse" style={{animationDelay: '0.6s'}}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced CTA Button */}
          <div className="mt-12">
            <button 
              onClick={() => document.getElementById('tech-domains')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary text-xl px-12 py-6 rounded-2xl font-bold shadow-2xl hover:shadow-3xl inline-flex items-center space-x-4 group"
            >
              <span className="group-hover:scale-110 transition-transform duration-300 text-2xl">🚀</span>
              <span>Begin Your Journey</span>
              <span className="group-hover:translate-x-2 transition-transform duration-300 text-2xl">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
