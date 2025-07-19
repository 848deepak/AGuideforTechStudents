'use client'

import React, { useState } from 'react'
import TechExamples from './TechExamples'

interface TechDomain {
  id: string
  title: string
  description: string
  icon: string
  skills: string[]
  applications: string[]
  projects: string[]
  color: string
}

const techDomains: TechDomain[] = [
  {
    id: 'web-dev',
    title: 'Web Development',
    description: 'Building the Digital World',
    icon: '🌐',
    color: 'from-blue-500 to-cyan-500',
    skills: ['HTML/CSS', 'JavaScript', 'React/Vue', 'Node.js', 'Python/Java', 'SQL Databases'],
    applications: [
      'Google, Facebook, and Amazon - major platforms you use daily',
      'University portals and educational websites',
      'E-commerce sites and online shopping',
      'Social media platforms and interactive websites'
    ],
    projects: [
      'Personal Portfolio Website - Create a webpage about yourself using HTML for structure, CSS for styling, and JavaScript for interactive elements like pop-up messages',
      'Interactive To-Do List App - Build a web application where users can add, remove, and mark tasks complete, with local storage to retain tasks after page refresh',
      'Weather App with API - Develop an app that uses OpenWeatherMap API to fetch and display real-time weather data, demonstrating external data integration',
      'Basic E-commerce Website - Create product listings with images, descriptions, and shopping cart functionality using JavaScript for UI/UX design concepts'
    ]
  },
  {
    id: 'app-dev',
    title: 'App Development',
    description: 'Crafting Mobile Experiences',
    icon: '📱',
    color: 'from-green-500 to-emerald-500',
    skills: ['Java/Kotlin (Android)', 'Swift/Objective-C (iOS)', 'Flutter/Dart (Cross-platform)', 'UI/UX Design principles', 'No-code platforms'],
    applications: [
      'WhatsApp, Instagram, and popular messaging apps',
      'Banking apps for secure financial transactions',
      'Gaming apps and entertainment platforms',
      'Fitness trackers and health monitoring apps'
    ],
    projects: [
      'Simple Calculator App - Basic arithmetic operations with clean mobile UI design',
      'Personal Task Manager - Mobile to-do list with notifications and local storage',
      'Weather Tracker - Location-based weather app with forecast features',
      'Photo Gallery App - Image viewing, organization, and basic editing functionality'
    ]
  },
  {
    id: 'ai-ml',
    title: 'AI/ML & Data Science',
    description: 'The Era of Intelligent Systems',
    icon: '🤖',
    color: 'from-purple-500 to-pink-500',
    skills: ['Python programming', 'Mathematics (Linear Algebra, Statistics)', 'Algorithms', 'Data manipulation', 'Machine Learning frameworks'],
    applications: ['Netflix recommendations', 'ChatGPT and AI assistants', 'Self-driving cars', 'Medical diagnosis', 'Fraud detection'],
    projects: [
      'House Price Prediction - Use real estate data to predict property values',
      'Image Classification - Build a model to classify cats vs dogs',
      'Sentiment Analysis - Analyze customer reviews for sentiment',
      'Recommendation System - Create a simple movie recommendation engine'
    ]
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity & Ethical Hacking',
    description: 'Protecting the Digital Frontier',
    icon: '🔒',
    color: 'from-red-500 to-orange-500',
    skills: ['Networking fundamentals', 'Linux/Operating systems', 'Security protocols', 'Python programming', 'Ethical mindset'],
    applications: ['Online transaction security', 'Government data protection', 'Corporate breach prevention', 'Personal data safety'],
    projects: [
      'Vulnerability Scanner - Basic network security assessment tool',
      'Password Strength Checker - Evaluate password security',
      'Network Monitor - Track suspicious network activity',
      'Secure Chat Application - End-to-end encrypted messaging'
    ]
  },
  {
    id: 'blockchain',
    title: 'Blockchain & Web3',
    description: 'The Decentralized Future',
    icon: '⛓️',
    color: 'from-indigo-500 to-purple-500',
    skills: ['Cryptography', 'Distributed systems', 'Solidity', 'Smart contracts', 'Programming'],
    applications: ['Bitcoin and Ethereum', 'NFTs and digital art', 'Supply chain transparency', 'Decentralized finance (DeFi)'],
    projects: [
      'Simple Cryptocurrency Tracker - Monitor crypto prices and trends',
      'Basic Smart Contract - Create a simple voting or token contract',
      'NFT Marketplace Interface - Frontend for buying/selling NFTs',
      'Supply Chain Tracker - Track product journey using blockchain'
    ]
  },
  {
    id: 'iot',
    title: 'IoT & Embedded Systems',
    description: 'Connecting the Physical World',
    icon: '🔌',
    color: 'from-teal-500 to-green-500',
    skills: ['Electronics', 'Arduino/Raspberry Pi', 'C/C++/Python', 'Networking protocols', 'Hardware design'],
    applications: ['Smart homes', 'Fitness trackers', 'Connected cars', 'Industrial sensors', 'Medical devices'],
    projects: [
      'Smart Home Controller - Control lights and temperature remotely',
      'Weather Station - Collect and display environmental data',
      'Fitness Tracker - Monitor steps and heart rate',
      'Smart Irrigation System - Automated plant watering'
    ]
  }
]

const TechDomains = () => {
  const [expandedDomain, setExpandedDomain] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<'skills' | 'applications' | 'projects'>('skills')

  const toggleDomain = (domainId: string) => {
    setExpandedDomain(expandedDomain === domainId ? null : domainId)
  }

  return (
    <section id="tech-domains" className="py-20 bg-white border-t border-gray-100">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Navigating the Tech Career Landscape</span>
            <br />
            <span className="text-3xl text-gray-700">Your Future Path</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Before we dive into the fascinating world of AI/ML, it&apos;s crucial to understand the broader context of the tech industry. 
            This sector is not a monolithic field but rather a <strong>vibrant ecosystem</strong> comprising many specialized areas.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            The following overview will be presented in a crisp, simple, and relatable manner, detailing what each domain entails, 
            providing recognizable real-life applications, and outlining the basic skills required to begin.
          </p>
          
          <div className="bg-blue-50 rounded-2xl p-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">10+</div>
                <div className="text-sm text-gray-600">Tech Domains</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">50+</div>
                <div className="text-sm text-gray-600">Real Applications</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">25+</div>
                <div className="text-sm text-gray-600">Beginner Projects</div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Tech Examples */}
        <TechExamples />

        <div className="grid gap-8">
          {techDomains.map((domain) => (
            <div
              key={domain.id}
              id={domain.id}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden card-hover"
            >
              <div
                className="cursor-pointer"
                onClick={() => toggleDomain(domain.id)}
              >
                <div className={`bg-gradient-to-r ${domain.color} p-6 text-white`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <span className="text-4xl">{domain.icon}</span>
                      <div>
                        <h3 className="text-2xl font-bold">{domain.title}</h3>
                        <p className="text-white/90">{domain.description}</p>
                      </div>
                    </div>
                    <div className="text-2xl transition-transform duration-300">
                      {expandedDomain === domain.id ? '▼' : '▶'}
                    </div>
                  </div>
                </div>
              </div>

              {expandedDomain === domain.id && (
                <div className="p-6 animate-fade-in">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {['skills', 'applications', 'projects'].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab as any)}
                        className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                          activeTab === tab
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                      </button>
                    ))}
                  </div>

                  <div className="space-y-4">
                    {activeTab === 'skills' && (
                      <div>
                        <h4 className="text-lg font-semibold mb-3 text-gray-800">Essential Skills</h4>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {domain.skills.map((skill, index) => (
                            <div key={index} className="bg-gray-50 rounded-lg p-3 text-center">
                              <span className="text-gray-700 font-medium">{skill}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {activeTab === 'applications' && (
                      <div>
                        <h4 className="text-lg font-semibold mb-3 text-gray-800">Real-World Applications</h4>
                        <div className="grid gap-3">
                          {domain.applications.map((app, index) => (
                            <div key={index} className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              <span className="text-gray-700">{app}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {activeTab === 'projects' && (
                      <div>
                        <h4 className="text-lg font-semibold mb-3 text-gray-800">Beginner-Friendly Projects</h4>
                        <div className="space-y-4">
                          {domain.projects.map((project, index) => (
                            <div key={index} className="p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg border-l-4 border-blue-500">
                              <p className="text-gray-700">{project}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* No-Code Platform Highlight */}
        <div className="mt-12 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-purple-800 mb-3">🚀 The Rise of No-Code Platforms</h3>
            <p className="text-gray-700 max-w-3xl mx-auto">
              No-code platforms have democratized app and web development, making it accessible even to those without extensive coding knowledge. 
              These platforms offer significant advantages in terms of development speed and cost-efficiency.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="font-bold text-purple-700 mb-2">🇵🇱 Polska dla dzieci!</h4>
              <p className="text-sm text-gray-600">
                Converted web platform to iOS and Android apps using no-code, helping families find child-friendly activities across Poland.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="font-bold text-purple-700 mb-2">🌐 WeHive</h4>
              <p className="text-sm text-gray-600">
                Social networking site built with Dittofi no-code platform, featuring real-time chat and live streaming capabilities.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="font-bold text-purple-700 mb-2">👑 Miss Universe App</h4>
              <p className="text-sm text-gray-600">
                Global fan engagement app with real-time updates and voting, accelerated development through no-code platform.
              </p>
            </div>
          </div>
        </div>

        {/* Additional domains in a compact grid */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl p-6 text-white card-hover">
            <div className="text-3xl mb-4">🎨</div>
            <h3 className="text-xl font-bold mb-2">UI/UX Design</h3>
            <p className="text-white/90 text-sm mb-4">Crafting User-Friendly Experiences</p>
            <div className="space-y-2 text-sm">
              <div>• Design principles & user research</div>
              <div>• Figma, Adobe XD prototyping</div>
              <div>• Wireframing & user empathy</div>
              <div>• Examples: Airbnb booking, Miro onboarding</div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-pink-500 to-red-500 rounded-2xl p-6 text-white card-hover">
            <div className="text-3xl mb-4">🎮</div>
            <h3 className="text-xl font-bold mb-2">Game Development</h3>
            <p className="text-white/90 text-sm mb-4">Bringing Virtual Worlds to Life</p>
            <div className="space-y-2 text-sm">
              <div>• Unity, Unreal Engine, Construct 2</div>
              <div>• C++, C#, Python programming</div>
              <div>• Visual scripting tools available</div>
              <div>• From Pong to Candy Crush complexity</div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl p-6 text-white card-hover">
            <div className="text-3xl mb-4">☁️</div>
            <h3 className="text-xl font-bold mb-2">DevOps & Cloud</h3>
            <p className="text-white/90 text-sm mb-4">Seamless Software Delivery</p>
            <div className="space-y-2 text-sm">
              <div>• AWS, Azure, Google Cloud</div>
              <div>• Docker, Kubernetes containers</div>
              <div>• CI/CD pipelines & automation</div>
              <div>• Powers Netflix, Google Docs</div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl p-6 text-white card-hover">
            <div className="text-3xl mb-4">📊</div>
            <h3 className="text-xl font-bold mb-2">Product Management</h3>
            <p className="text-white/90 text-sm mb-4">Guiding Innovation (Non-coding)</p>
            <div className="space-y-2 text-sm">
              <div>• Bridge business & technology</div>
              <div>• Strategic planning & communication</div>
              <div>• Example: Netflix &quot;Skip Intro&quot; button</div>
              <div>• No coding required for many roles</div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl p-6 text-white card-hover">
            <div className="text-3xl mb-4">🔌</div>
            <h3 className="text-xl font-bold mb-2">IoT & Embedded</h3>
            <p className="text-white/90 text-sm mb-4">Connecting the Physical World</p>
            <div className="space-y-2 text-sm">
              <div>• Arduino, Raspberry Pi</div>
              <div>• Smart homes, fitness trackers</div>
              <div>• C/C++, Python programming</div>
              <div>• From microwaves to medical devices</div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-6 text-white card-hover">
            <div className="text-3xl mb-4">⛓️</div>
            <h3 className="text-xl font-bold mb-2">Blockchain & Web3</h3>
            <p className="text-white/90 text-sm mb-4">The Decentralized Future</p>
            <div className="space-y-2 text-sm">
              <div>• Bitcoin, Ethereum, NFTs</div>
              <div>• Smart contracts & Solidity</div>
              <div>• Supply chain transparency</div>
              <div>• Examples: IBM Food Trust, diamond tracking</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechDomains
