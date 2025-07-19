'use client'

import React, { useState, useEffect } from 'react'

interface TechExample {
  domain: string
  icon: string
  title: string
  description: string
  tools: string[]
  color: string
}

const TechExamples = () => {
  const [currentExample, setCurrentExample] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const examples: TechExample[] = [
    {
      domain: "Web Development",
      icon: "🌐",
      title: "Netflix Streaming Platform",
      description: "Global entertainment platform serving 230M+ subscribers",
      tools: ["React", "Node.js", "AWS", "Microservices"],
      color: "from-red-500 to-red-600"
    },
    {
      domain: "Mobile Development",
      icon: "📱",
      title: "Instagram Social App",
      description: "Photo & video sharing with 2B+ monthly users",
      tools: ["React Native", "Swift", "Kotlin", "GraphQL"],
      color: "from-pink-500 to-purple-600"
    },
    {
      domain: "AI/ML",
      icon: "🤖",
      title: "ChatGPT Conversational AI",
      description: "Revolutionary AI that understands and generates human-like text",
      tools: ["Transformer Models", "Python", "PyTorch", "Cloud Computing"],
      color: "from-green-500 to-blue-500"
    },
    {
      domain: "AI Coding",
      icon: "👨‍💻",
      title: "GitHub Copilot",
      description: "AI pair programmer that suggests code in real-time",
      tools: ["OpenAI Codex", "VS Code", "Machine Learning", "Code Analysis"],
      color: "from-blue-500 to-indigo-600"
    },
    {
      domain: "Game Development",
      icon: "🎮",
      title: "Among Us Multiplayer",
      description: "Viral social deduction game with 500M+ downloads",
      tools: ["Unity", "C#", "Networking", "Cross-platform"],
      color: "from-blue-400 to-purple-500"
    },
    {
      domain: "Cybersecurity",
      icon: "🔒",
      title: "Banking Security Systems",
      description: "Protecting billions in financial transactions daily",
      tools: ["Encryption", "AI Fraud Detection", "Biometrics", "Zero Trust"],
      color: "from-orange-500 to-red-500"
    },
    {
      domain: "AI Art",
      icon: "🎨",
      title: "DALL-E Image Generation",
      description: "AI that creates stunning artwork from text descriptions",
      tools: ["Diffusion Models", "Neural Networks", "Computer Vision", "NLP"],
      color: "from-pink-400 to-purple-600"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentExample((prev) => (prev + 1) % examples.length)
        setIsAnimating(false)
      }, 300)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const current = examples[currentExample]

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
      <h3 className="text-2xl font-bold text-center mb-6 gradient-text">
        Real-World Tech Examples
      </h3>
      
      <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
        <div className={`bg-gradient-to-r ${current.color} rounded-xl p-6 text-white mb-6`}>
          <div className="flex items-center space-x-4 mb-4">
            <div className="text-4xl animate-bounce">{current.icon}</div>
            <div>
              <div className="text-sm opacity-90">{current.domain}</div>
              <h4 className="text-2xl font-bold">{current.title}</h4>
            </div>
          </div>
          <p className="text-lg opacity-90 mb-4">{current.description}</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {current.tools.map((tool, index) => (
              <div 
                key={tool}
                className="bg-white/20 rounded-lg p-2 text-center text-sm backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Progress Indicators */}
      <div className="flex justify-center space-x-2">
        {examples.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsAnimating(true)
              setTimeout(() => {
                setCurrentExample(index)
                setIsAnimating(false)
              }, 300)
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentExample 
                ? 'bg-blue-500 scale-125' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-4 mt-6 text-center">
        <div className="bg-blue-50 rounded-lg p-3">
          <div className="text-2xl font-bold text-blue-600">1M+</div>
          <div className="text-sm text-blue-500">Daily Users</div>
        </div>
        <div className="bg-green-50 rounded-lg p-3">
          <div className="text-2xl font-bold text-green-600">24/7</div>
          <div className="text-sm text-green-500">Availability</div>
        </div>
        <div className="bg-purple-50 rounded-lg p-3">
          <div className="text-2xl font-bold text-purple-600">Global</div>
          <div className="text-sm text-purple-500">Reach</div>
        </div>
      </div>
    </div>
  )
}

export default TechExamples
