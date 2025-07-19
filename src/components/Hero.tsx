'use client'

import React, { useState, useEffect } from 'react'

const Hero = () => {
  const [currentExample, setCurrentExample] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const techExamples = [
    { icon: "📱", text: "Smartphone Apps", color: "from-blue-500 to-cyan-500" },
    { icon: "🌐", text: "Websites & Web Apps", color: "from-green-500 to-emerald-500" },
    { icon: "🤖", text: "ChatGPT & AI Assistants", color: "from-purple-500 to-pink-500" },
    { icon: "🎮", text: "Games & VR Experiences", color: "from-orange-500 to-red-500" },
    { icon: "🚗", text: "Smart Vehicles & Tesla", color: "from-indigo-500 to-blue-500" },
    { icon: "🏠", text: "IoT & Smart Homes", color: "from-teal-500 to-green-500" },
    { icon: "💻", text: "GitHub Copilot Coding", color: "from-gray-500 to-slate-500" },
    { icon: "🎨", text: "AI Art & DALL-E", color: "from-pink-500 to-rose-500" }
  ]

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentExample((prev) => (prev + 1) % techExamples.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 pb-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-3/4 w-48 h-48 bg-green-200/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Floating Tech Icons */}
        <div className="absolute top-20 right-20 text-4xl animate-bounce" style={{animationDelay: '0.5s'}}>💻</div>
        <div className="absolute bottom-32 left-20 text-3xl animate-bounce" style={{animationDelay: '1.5s'}}>🚀</div>
        <div className="absolute top-1/3 right-1/3 text-2xl animate-bounce" style={{animationDelay: '2.5s'}}>⚡</div>
      </div>

      <div className="container-max section-padding text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="gradient-text">One day Hands-on workshop</span>
              <br />
              <span className="text-gray-800">on Machine Learning</span>
              <br />
              <span className="text-2xl md:text-3xl font-normal text-gray-600 mt-4 block">
                at CHANDIGARH UNIVERSITY
              </span>
            </h1>

            {/* Dynamic Tech Examples Banner */}
            <div className="mb-8">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/30">
                <p className="text-lg text-gray-600 mb-4">Technology powers everything around us:</p>
                <div className="flex items-center justify-center space-x-4">
                  <div className={`bg-gradient-to-r ${techExamples[currentExample].color} rounded-full p-4 text-white transform transition-all duration-500 scale-110 shadow-lg`}>
                    <span className="text-3xl">{techExamples[currentExample].icon}</span>
                  </div>
                  <div className="text-xl font-semibold text-gray-700 min-w-[200px] text-left">
                    {techExamples[currentExample].text}
                  </div>
                </div>
                <div className="flex justify-center mt-4 space-x-2">
                  {techExamples.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentExample ? 'bg-blue-500' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-left">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Welcome to Our Workshop! 👋
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  This session is designed not as a traditional lecture, but as a <strong>guiding conversation</strong>. 
                  The technological landscape is expansive and constantly evolving, which can sometimes feel overwhelming 
                  when trying to determine one&apos;s place within it.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  This discussion aims to provide <strong>clarity, direction, and inspiration</strong> for building 
                  a strong foundation for your future in technology.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                  <p className="text-sm text-blue-800">
                    <strong>Interactive Format:</strong> Feel free to ask questions throughout the session. 
                    We&apos;ll explore real examples and have discussions about your interests!
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-4 rounded-lg text-white transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl animate-pulse">🎯</div>
                    <div>
                      <div className="font-semibold">Workshop Focus</div>
                      <div className="text-sm opacity-90">Practical guidance & insights</div>
                    </div>
                  </div>
                </div>
                
                {/* Interactive Learning Features */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 transform hover:translate-x-2 transition-all duration-300">
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                    <span className="text-gray-700 flex items-center">
                      <span className="mr-2">💡</span>
                      Interactive Learning Experience
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 transform hover:translate-x-2 transition-all duration-300" style={{animationDelay: '0.5s'}}>
                    <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                    <span className="text-gray-700 flex items-center">
                      <span className="mr-2">🎯</span>
                      Career Foundation Building
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 transform hover:translate-x-2 transition-all duration-300" style={{animationDelay: '1s'}}>
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                    <span className="text-gray-700 flex items-center">
                      <span className="mr-2">🧠</span>
                      AI/ML Deep Dive
                    </span>
                  </div>
                </div>

                {/* Real-time Example Counter */}
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <div className="text-sm text-blue-600 font-medium mb-2">Workshop Coverage</div>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="text-center">
                      <div className="font-bold text-lg text-blue-600">10+</div>
                      <div className="text-blue-500">Tech Domains</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-lg text-green-600">50+</div>
                      <div className="text-green-500">Examples</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-lg text-purple-600">∞</div>
                      <div className="text-purple-500">Possibilities</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white mb-8 transform hover:scale-105 transition-all duration-300 shadow-2xl">
            <h3 className="text-2xl font-bold mb-6 text-center flex items-center justify-center">
              <span className="mr-3 text-3xl animate-bounce">📋</span>
              Today&apos;s Workshop Agenda
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm transform hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <h4 className="font-semibold mb-2 flex items-center">
                  <span className="mr-2 text-2xl animate-pulse">🌐</span> Tech Landscape Overview
                </h4>
                <p className="text-blue-100 text-sm mb-2">Explore 10+ tech domains with real-world applications and beginner projects</p>
                <div className="text-xs text-blue-200 flex items-center">
                  <span className="mr-1">⏱️</span> 20 minutes
                </div>
                <div className="mt-2 flex space-x-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                </div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm transform hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <h4 className="font-semibold mb-2 flex items-center">
                  <span className="mr-2 text-2xl animate-pulse" style={{animationDelay: '0.5s'}}>🤖</span> AI & Machine Learning
                </h4>
                <p className="text-blue-100 text-sm mb-2">Deep dive into AI types, ML workflows, and practical applications</p>
                <div className="text-xs text-blue-200 flex items-center">
                  <span className="mr-1">⏱️</span> 20 minutes
                </div>
                <div className="mt-2 flex space-x-1">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.1s'}}></div>
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                </div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm transform hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <h4 className="font-semibold mb-2 flex items-center">
                  <span className="mr-2 text-2xl animate-pulse" style={{animationDelay: '1s'}}>🚀</span> Your Next Steps
                </h4>
                <p className="text-blue-100 text-sm mb-2">Actionable guidance for your tech journey</p>
                <div className="text-xs text-blue-200 flex items-center">
                  <span className="mr-1">💡</span> Interactive session
                </div>
                <div className="mt-2 flex space-x-1">
                  <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                  <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" style={{animationDelay: '0.6s'}}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <button 
              onClick={() => document.getElementById('tech-domains')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 inline-flex items-center space-x-2 group"
            >
              <span className="group-hover:scale-110 transition-transform duration-300">🚀</span>
              <span>Begin Your Journey</span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
