'use client'

import React, { useState } from 'react'
import AIEvolutionShowcase from './AIEvolutionShowcase'

const AIMLSection = () => {
  const [activeAIType, setActiveAIType] = useState<'capability' | 'functionality'>('capability')
  const [activeLearningType, setActiveLearningType] = useState<'supervised' | 'unsupervised' | 'reinforcement'>('supervised')
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId)
  }

  return (
    <section id="ai-deep-dive" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container-max section-padding">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Deep Dive into Artificial Intelligence</span>
            <br />
            <span className="text-gray-800">and Machine Learning</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-6">
            Now, let&apos;s shift our focus to a fascinating journey into the world of Artificial Intelligence and Machine Learning. 
            Consider the uncanny accuracy of Netflix or YouTube recommendations, instant facial recognition on smartphones, 
            or the conversational abilities of virtual assistants like Alexa or ChatGPT.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            These seemingly magical interactions are all powered by <strong>Artificial Intelligence</strong>.
          </p>
        </div>

        {/* AI Evolution and Comparison Showcase */}
        <AIEvolutionShowcase />

        {/* AI Definitions */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h3 className="text-3xl font-bold text-center mb-8 gradient-text">
              Defining AI, ML, and DL: The Core Concepts
            </h3>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-6 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"></div>
                <div className="text-4xl mb-4">🧠</div>
                <h4 className="text-xl font-bold mb-3">Artificial Intelligence (AI)</h4>
                <p className="text-blue-100 text-sm leading-relaxed">
                  The broad, overarching concept of creating machines that can perform tasks requiring human intelligence. 
                  It&apos;s akin to teaching a computer to be smart, solve problems, and even exhibit creativity.
                </p>
                <div className="mt-3 text-xs text-blue-200">
                  Includes everything from rule-based systems to advanced neural networks
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-500 to-teal-600 rounded-xl p-6 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"></div>
                <div className="text-4xl mb-4">🤖</div>
                <h4 className="text-xl font-bold mb-3">Machine Learning (ML)</h4>
                <p className="text-green-100 text-sm leading-relaxed">
                  A specific subset of AI that enables machines to learn and make predictions from data without being explicitly programmed. 
                  It&apos;s like teaching a computer to recognize patterns and improve from experience.
                </p>
                <div className="mt-3 text-xs text-green-200">
                  Powers everything from recommendation systems to autonomous vehicles
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-xl p-6 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"></div>
                <div className="text-4xl mb-4">🧬</div>
                <h4 className="text-xl font-bold mb-3">Deep Learning (DL)</h4>
                <p className="text-orange-100 text-sm leading-relaxed">
                  A specialized branch of machine learning that uses neural networks with multiple layers to model and understand complex patterns, 
                  much like how our brains process information through interconnected neurons.
                </p>
                <div className="mt-3 text-xs text-orange-200">
                  Enables breakthrough technologies like image recognition, natural language processing, and autonomous systems
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Machine Learning Learning Paradigms */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-3xl font-bold text-center mb-8 gradient-text">
              Machine Learning Learning Paradigms
            </h3>
            
            <div className="flex justify-center mb-8">
              <div className="bg-gray-100 rounded-full p-1 flex flex-wrap">
                <button
                  onClick={() => setActiveLearningType('supervised')}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-200 m-1 ${
                    activeLearningType === 'supervised'
                      ? 'bg-green-600 text-white shadow-lg'
                      : 'text-gray-600 hover:text-green-600'
                  }`}
                >
                  Supervised Learning
                </button>
                <button
                  onClick={() => setActiveLearningType('unsupervised')}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-200 m-1 ${
                    activeLearningType === 'unsupervised'
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  Unsupervised Learning
                </button>
                <button
                  onClick={() => setActiveLearningType('reinforcement')}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-200 m-1 ${
                    activeLearningType === 'reinforcement'
                      ? 'bg-purple-600 text-white shadow-lg'
                      : 'text-gray-600 hover:text-purple-600'
                  }`}
                >
                  Reinforcement Learning
                </button>
              </div>
            </div>

            {activeLearningType === 'supervised' && (
              <div className="animate-fade-in">
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-6 text-white mb-6">
                  <h4 className="text-2xl font-bold mb-2">👨‍🏫 Supervised Learning</h4>
                  <p className="text-green-100">Learning with labeled examples - like having a teacher providing correct answers</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="text-lg font-semibold mb-3">How It Works</h5>
                    <div className="space-y-3">
                      <div className="bg-green-50 p-3 rounded-lg">
                        <strong>Training Phase:</strong> Algorithm learns from input-output pairs
                      </div>
                      <div className="bg-green-50 p-3 rounded-lg">
                        <strong>Pattern Recognition:</strong> Identifies relationships between inputs and targets
                      </div>
                      <div className="bg-green-50 p-3 rounded-lg">
                        <strong>Prediction:</strong> Makes accurate predictions on new, unseen data
                      </div>
                    </div>
                  </div>
                  <div>
                    <h5 className="text-lg font-semibold mb-3">Real-World Examples</h5>
                    <div className="space-y-3">
                      <div className="bg-green-50 p-3 rounded-lg">
                        <strong>Email Classification:</strong> Spam vs. legitimate emails
                      </div>
                      <div className="bg-green-50 p-3 rounded-lg">
                        <strong>Medical Diagnosis:</strong> Symptoms → Disease prediction
                      </div>
                      <div className="bg-green-50 p-3 rounded-lg">
                        <strong>Image Recognition:</strong> Photos → Object identification
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeLearningType === 'unsupervised' && (
              <div className="animate-fade-in">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl p-6 text-white mb-6">
                  <h4 className="text-2xl font-bold mb-2">🔍 Unsupervised Learning</h4>
                  <p className="text-blue-100">Learning without guidance - discovering hidden patterns in data without labels</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="text-lg font-semibold mb-3">How It Works</h5>
                    <div className="space-y-3">
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <strong>Pattern Discovery:</strong> Finds hidden structures in unlabeled data
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <strong>Clustering:</strong> Groups similar data points together
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <strong>Dimensionality Reduction:</strong> Simplifies complex data while preserving information
                      </div>
                    </div>
                  </div>
                  <div>
                    <h5 className="text-lg font-semibold mb-3">Real-World Examples</h5>
                    <div className="space-y-3">
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <strong>Customer Segmentation:</strong> Group customers by behavior patterns
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <strong>Market Basket Analysis:</strong> &quot;People who buy X also buy Y&quot;
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <strong>Anomaly Detection:</strong> Identifying fraud or unusual activities
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeLearningType === 'reinforcement' && (
              <div className="animate-fade-in">
                <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl p-6 text-white mb-6">
                  <h4 className="text-2xl font-bold mb-2">🎮 Reinforcement Learning</h4>
                  <p className="text-purple-100">Learning through trial, error, and feedback - like training a pet with rewards and consequences</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="text-lg font-semibold mb-3">How It Works</h5>
                    <div className="space-y-3">
                      <div className="bg-purple-50 p-3 rounded-lg">
                        <strong>Agent & Environment:</strong> AI agent takes actions in an environment
                      </div>
                      <div className="bg-purple-50 p-3 rounded-lg">
                        <strong>Reward System:</strong> Receives rewards for good actions, penalties for bad ones
                      </div>
                      <div className="bg-purple-50 p-3 rounded-lg">
                        <strong>Learning Process:</strong> Gradually improves decision-making through experience
                      </div>
                    </div>
                  </div>
                  <div>
                    <h5 className="text-lg font-semibold mb-3">Real-World Examples</h5>
                    <div className="space-y-3">
                      <div className="bg-purple-50 p-3 rounded-lg">
                        <strong>Game Mastery:</strong> AlphaGo defeating world champions
                      </div>
                      <div className="bg-purple-50 p-3 rounded-lg">
                        <strong>Autonomous Vehicles:</strong> Learning optimal driving strategies
                      </div>
                      <div className="bg-purple-50 p-3 rounded-lg">
                        <strong>Robotics:</strong> Industrial robots optimizing assembly tasks
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Neural Network Animation */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4 gradient-text">
              How Neural Networks Process Information
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Watch how AI models process tasks step-by-step, transforming raw input data through multiple layers 
              of interconnected neurons to produce intelligent outputs.
            </p>
          </div>
          
          {/* Enhanced Neural Network Demo with Prominent Output */}
          <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-2xl shadow-2xl p-8 text-white relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute top-1/2 -right-4 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
              <div className="absolute -bottom-4 left-1/3 w-24 h-24 bg-pink-500/10 rounded-full blur-xl animate-pulse delay-2000"></div>
            </div>

            <div className="relative z-10">
              {/* Header */}
              <div className="text-center mb-8">
                <h4 className="text-3xl font-bold mb-4 flex items-center justify-center gap-3">
                  🧠 Neural Network Processing Demo
                </h4>
                <p className="text-gray-300 text-lg">Interactive AI processing with live output visualization</p>
              </div>

              {/* Interactive Demo Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                {/* Input Section */}
                <div className="bg-black/30 rounded-xl p-6">
                  <h5 className="text-xl font-bold mb-4 text-blue-400">📝 Input Data</h5>
                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder="Enter text, describe an image, or ask a question..."
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                      🚀 Process with AI
                    </button>
                  </div>
                </div>

                {/* Processing Visualization */}
                <div className="bg-black/30 rounded-xl p-6">
                  <h5 className="text-xl font-bold mb-4 text-green-400">⚡ Processing Layers</h5>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-blue-600/20 rounded-lg">
                      <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                      <span>Input Layer: Raw data processing</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-purple-600/20 rounded-lg">
                      <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-300"></div>
                      <span>Hidden Layers: Feature extraction & pattern recognition</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-green-600/20 rounded-lg">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse delay-700"></div>
                      <span>Output Layer: Final prediction generation</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Animated Neural Network Diagram */}
              <div className="mb-8 bg-black/30 rounded-xl p-6">
                <h5 className="text-xl font-bold mb-4 text-center text-cyan-400">🧬 Live Neural Network Animation</h5>
                <div className="relative bg-gray-900/50 rounded-lg p-4 overflow-hidden">
                  <svg width="100%" height="300" viewBox="0 0 800 300" className="w-full h-auto">
                    {/* Background grid */}
                    <defs>
                      <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1E40AF" strokeWidth="0.5" opacity="0.1"/>
                      </pattern>
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                        <feMerge> 
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />

                    {/* Animated connections */}
                    <g stroke="#3B82F6" strokeWidth="2" opacity="0.6">
                      {/* Input to Hidden1 connections */}
                      <line x1="100" y1="75" x2="250" y2="60">
                        <animate attributeName="stroke" values="#374151;#3B82F6;#374151" dur="3s" repeatCount="indefinite" begin="0s"/>
                        <animate attributeName="stroke-width" values="1;3;1" dur="3s" repeatCount="indefinite" begin="0s"/>
                      </line>
                      <line x1="100" y1="150" x2="250" y2="100">
                        <animate attributeName="stroke" values="#374151;#3B82F6;#374151" dur="3s" repeatCount="indefinite" begin="0.5s"/>
                        <animate attributeName="stroke-width" values="1;3;1" dur="3s" repeatCount="indefinite" begin="0.5s"/>
                      </line>
                      <line x1="100" y1="225" x2="250" y2="140">
                        <animate attributeName="stroke" values="#374151;#3B82F6;#374151" dur="3s" repeatCount="indefinite" begin="1s"/>
                        <animate attributeName="stroke-width" values="1;3;1" dur="3s" repeatCount="indefinite" begin="1s"/>
                      </line>
                      
                      {/* Hidden1 to Hidden2 connections */}
                      <line x1="250" y1="80" x2="400" y2="120">
                        <animate attributeName="stroke" values="#374151;#7C3AED;#374151" dur="3s" repeatCount="indefinite" begin="1.5s"/>
                        <animate attributeName="stroke-width" values="1;3;1" dur="3s" repeatCount="indefinite" begin="1.5s"/>
                      </line>
                      <line x1="250" y1="120" x2="400" y2="160">
                        <animate attributeName="stroke" values="#374151;#7C3AED;#374151" dur="3s" repeatCount="indefinite" begin="2s"/>
                        <animate attributeName="stroke-width" values="1;3;1" dur="3s" repeatCount="indefinite" begin="2s"/>
                      </line>
                      
                      {/* Hidden2 to Output connections */}
                      <line x1="400" y1="140" x2="550" y2="150">
                        <animate attributeName="stroke" values="#374151;#059669;#374151" dur="3s" repeatCount="indefinite" begin="2.5s"/>
                        <animate attributeName="stroke-width" values="1;3;1" dur="3s" repeatCount="indefinite" begin="2.5s"/>
                      </line>
                    </g>

                    {/* Neurons - Input Layer */}
                    <g>
                      <circle cx="100" cy="75" r="12" fill="#1F2937" stroke="#4B5563" strokeWidth="2">
                        <animate attributeName="fill" values="#1F2937;#3B82F6;#1F2937" dur="3s" repeatCount="indefinite" begin="0s"/>
                        <animate attributeName="r" values="12;16;12" dur="3s" repeatCount="indefinite" begin="0s"/>
                      </circle>
                      <text x="100" y="80" textAnchor="middle" fill="white" fontSize="10">⚡</text>
                      
                      <circle cx="100" cy="150" r="12" fill="#1F2937" stroke="#4B5563" strokeWidth="2">
                        <animate attributeName="fill" values="#1F2937;#3B82F6;#1F2937" dur="3s" repeatCount="indefinite" begin="0.3s"/>
                        <animate attributeName="r" values="12;16;12" dur="3s" repeatCount="indefinite" begin="0.3s"/>
                      </circle>
                      <text x="100" y="155" textAnchor="middle" fill="white" fontSize="10">⚡</text>
                      
                      <circle cx="100" cy="225" r="12" fill="#1F2937" stroke="#4B5563" strokeWidth="2">
                        <animate attributeName="fill" values="#1F2937;#3B82F6;#1F2937" dur="3s" repeatCount="indefinite" begin="0.6s"/>
                        <animate attributeName="r" values="12;16;12" dur="3s" repeatCount="indefinite" begin="0.6s"/>
                      </circle>
                      <text x="100" y="230" textAnchor="middle" fill="white" fontSize="10">⚡</text>
                    </g>

                    {/* Neurons - Hidden Layer 1 */}
                    <g>
                      <circle cx="250" cy="60" r="12" fill="#1F2937" stroke="#4B5563" strokeWidth="2">
                        <animate attributeName="fill" values="#1F2937;#7C3AED;#1F2937" dur="3s" repeatCount="indefinite" begin="1s"/>
                        <animate attributeName="r" values="12;16;12" dur="3s" repeatCount="indefinite" begin="1s"/>
                      </circle>
                      <circle cx="250" cy="100" r="12" fill="#1F2937" stroke="#4B5563" strokeWidth="2">
                        <animate attributeName="fill" values="#1F2937;#7C3AED;#1F2937" dur="3s" repeatCount="indefinite" begin="1.2s"/>
                        <animate attributeName="r" values="12;16;12" dur="3s" repeatCount="indefinite" begin="1.2s"/>
                      </circle>
                      <circle cx="250" cy="140" r="12" fill="#1F2937" stroke="#4B5563" strokeWidth="2">
                        <animate attributeName="fill" values="#1F2937;#7C3AED;#1F2937" dur="3s" repeatCount="indefinite" begin="1.4s"/>
                        <animate attributeName="r" values="12;16;12" dur="3s" repeatCount="indefinite" begin="1.4s"/>
                      </circle>
                      <circle cx="250" cy="180" r="12" fill="#1F2937" stroke="#4B5563" strokeWidth="2">
                        <animate attributeName="fill" values="#1F2937;#7C3AED;#1F2937" dur="3s" repeatCount="indefinite" begin="1.6s"/>
                        <animate attributeName="r" values="12;16;12" dur="3s" repeatCount="indefinite" begin="1.6s"/>
                      </circle>
                    </g>

                    {/* Neurons - Hidden Layer 2 */}
                    <g>
                      <circle cx="400" cy="100" r="12" fill="#1F2937" stroke="#4B5563" strokeWidth="2">
                        <animate attributeName="fill" values="#1F2937;#F59E0B;#1F2937" dur="3s" repeatCount="indefinite" begin="2s"/>
                        <animate attributeName="r" values="12;16;12" dur="3s" repeatCount="indefinite" begin="2s"/>
                      </circle>
                      <circle cx="400" cy="140" r="12" fill="#1F2937" stroke="#4B5563" strokeWidth="2">
                        <animate attributeName="fill" values="#1F2937;#F59E0B;#1F2937" dur="3s" repeatCount="indefinite" begin="2.2s"/>
                        <animate attributeName="r" values="12;16;12" dur="3s" repeatCount="indefinite" begin="2.2s"/>
                      </circle>
                      <circle cx="400" cy="180" r="12" fill="#1F2937" stroke="#4B5563" strokeWidth="2">
                        <animate attributeName="fill" values="#1F2937;#F59E0B;#1F2937" dur="3s" repeatCount="indefinite" begin="2.4s"/>
                        <animate attributeName="r" values="12;16;12" dur="3s" repeatCount="indefinite" begin="2.4s"/>
                      </circle>
                    </g>

                    {/* Neurons - Output Layer */}
                    <g>
                      <circle cx="550" cy="120" r="12" fill="#1F2937" stroke="#4B5563" strokeWidth="2">
                        <animate attributeName="fill" values="#1F2937;#059669;#1F2937" dur="3s" repeatCount="indefinite" begin="2.5s"/>
                        <animate attributeName="r" values="12;18;12" dur="3s" repeatCount="indefinite" begin="2.5s"/>
                      </circle>
                      <text x="550" y="125" textAnchor="middle" fill="white" fontSize="10">🎯</text>
                      
                      <circle cx="550" cy="180" r="12" fill="#1F2937" stroke="#4B5563" strokeWidth="2">
                        <animate attributeName="fill" values="#1F2937;#059669;#1F2937" dur="3s" repeatCount="indefinite" begin="2.7s"/>
                        <animate attributeName="r" values="12;18;12" dur="3s" repeatCount="indefinite" begin="2.7s"/>
                      </circle>
                      <text x="550" y="185" textAnchor="middle" fill="white" fontSize="10">🎯</text>
                    </g>

                    {/* Data flow particles */}
                    <g>
                      <circle r="3" fill="#00FF88" opacity="0.8">
                        <animateMotion dur="3s" repeatCount="indefinite">
                          <path d="M 80 150 L 570 150" />
                        </animateMotion>
                      </circle>
                      <circle r="3" fill="#00AAFF" opacity="0.8">
                        <animateMotion dur="3s" repeatCount="indefinite" begin="0.5s">
                          <path d="M 80 120 L 570 120" />
                        </animateMotion>
                      </circle>
                      <circle r="3" fill="#FF4488" opacity="0.8">
                        <animateMotion dur="3s" repeatCount="indefinite" begin="1s">
                          <path d="M 80 180 L 570 180" />
                        </animateMotion>
                      </circle>
                    </g>

                    {/* Layer labels */}
                    <text x="100" y="30" textAnchor="middle" fill="#60A5FA" fontSize="14" fontWeight="bold">Input</text>
                    <text x="250" y="30" textAnchor="middle" fill="#A78BFA" fontSize="14" fontWeight="bold">Hidden 1</text>
                    <text x="400" y="30" textAnchor="middle" fill="#FBBF24" fontSize="14" fontWeight="bold">Hidden 2</text>
                    <text x="550" y="30" textAnchor="middle" fill="#34D399" fontSize="14" fontWeight="bold">Output</text>

                    {/* Processing wave */}
                    <circle cx="100" cy="150" r="0" fill="none" stroke="#60A5FA" strokeWidth="2" opacity="0.5">
                      <animate attributeName="r" values="0;200;400" dur="3s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.5;0.2;0" dur="3s" repeatCount="indefinite" />
                    </circle>
                  </svg>
                </div>
              </div>

              {/* PROMINENT AI OUTPUT RESULT SECTION */}
              <div className="mb-8">
                <h5 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  ⚡ AI Output Result
                  <span className="text-yellow-400 animate-bounce">✨</span>
                </h5>
                
                {/* Enhanced Output Display with Maximum Visibility */}
                <div className="relative">
                  {/* Glowing background animation */}
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/30 via-green-500/30 to-blue-500/30 rounded-2xl animate-pulse blur-sm"></div>
                  
                  {/* Main result container */}
                  <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border-4 border-yellow-400 shadow-2xl transform transition-all duration-500 hover:scale-[1.02]">
                    {/* Success indicator header */}
                    <div className="flex items-center justify-center mb-6">
                      <div className="flex items-center gap-3 px-6 py-3 bg-green-500/20 rounded-full border-2 border-green-400">
                        <div className="w-6 h-6 bg-green-400 rounded-full animate-bounce flex items-center justify-center">
                          <span className="text-gray-900 font-bold text-sm">✓</span>
                        </div>
                        <span className="text-green-400 font-bold text-lg">Processing Complete!</span>
                        <div className="w-6 h-6 bg-yellow-400 rounded-full animate-spin flex items-center justify-center">
                          <span className="text-gray-900 font-bold text-sm">★</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Main output result */}
                    <div className="text-center mb-6">
                      <div className="text-3xl font-bold text-white mb-4 animate-pulse">
                        🎯 Neural Network Output:
                      </div>
                      <div className="bg-gradient-to-r from-blue-900/80 to-purple-900/80 rounded-xl p-6 border-2 border-blue-400">
                        <div className="text-2xl text-yellow-300 font-bold mb-2">
                          ✨ &quot;Image Classification: Cat (94.7% confidence)&quot;
                        </div>
                        <div className="text-lg text-blue-200">
                          🧠 Advanced pattern recognition detected feline features with high accuracy
                        </div>
                      </div>
                    </div>
                    
                    {/* Confidence meter */}
                    <div className="mb-4">
                      <div className="flex justify-between text-sm text-gray-300 mb-2">
                        <span className="font-semibold">Confidence Level</span>
                        <span className="font-bold text-green-400">94.7%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-4 relative overflow-hidden">
                        <div className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 h-4 rounded-full animate-pulse shadow-lg" style={{ width: '94.7%' }}></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                      </div>
                    </div>
                    
                    {/* Processing stats */}
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div className="bg-blue-600/20 rounded-lg p-3">
                        <div className="text-blue-400 font-bold">⚡ Speed</div>
                        <div className="text-white">0.23s</div>
                      </div>
                      <div className="bg-purple-600/20 rounded-lg p-3">
                        <div className="text-purple-400 font-bold">🧮 Parameters</div>
                        <div className="text-white">25.6M</div>
                      </div>
                      <div className="bg-green-600/20 rounded-lg p-3">
                        <div className="text-green-400 font-bold">🎯 Accuracy</div>
                        <div className="text-white">94.7%</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Celebration particles */}
                  <div className="absolute -top-3 -left-3 w-6 h-6 bg-yellow-400 rounded-full animate-ping"></div>
                  <div className="absolute -top-3 -right-3 w-6 h-6 bg-green-400 rounded-full animate-ping delay-300"></div>
                  <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-blue-400 rounded-full animate-ping delay-700"></div>
                  <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-purple-400 rounded-full animate-ping delay-1000"></div>
                </div>
              </div>

              {/* Future AI Capabilities */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-blue-800/30 rounded-xl p-6 border border-blue-600/50 hover:border-blue-400 transition-all duration-300">
                  <div className="text-blue-400 font-bold text-lg mb-3">🚀 Next-Gen AI</div>
                  <div className="text-gray-300">
                    Advanced neural architectures with enhanced reasoning capabilities and multimodal understanding for complex problem-solving.
                  </div>
                </div>
                <div className="bg-green-800/30 rounded-xl p-6 border border-green-600/50 hover:border-green-400 transition-all duration-300">
                  <div className="text-green-400 font-bold text-lg mb-3">🧠 Brain-Computer Interface</div>
                  <div className="text-gray-300">
                    Direct neural connections enabling seamless human-AI collaboration and thought-based control of digital systems.
                  </div>
                </div>
                <div className="bg-purple-800/30 rounded-xl p-6 border border-purple-600/50 hover:border-purple-400 transition-all duration-300">
                  <div className="text-purple-400 font-bold text-lg mb-3">🌟 Quantum AI Processing</div>
                  <div className="text-gray-300">
                    Quantum-enhanced neural networks solving complex problems exponentially faster than classical computing systems.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ML Workflow */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-3xl font-bold text-center mb-8 gradient-text">
              The Machine Learning Project Lifecycle
            </h3>
            <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
              Most successful ML projects follow this systematic 7-step process. Think of it as a recipe for turning data into insights.
            </p>
            
            <div className="space-y-6">
              {[
                {
                  step: 1,
                  title: 'Problem Definition & Goal Setting',
                  description: 'Clearly articulate the business problem and determine if ML is the right solution',
                  example: 'Objective: Predict customer churn to improve retention strategies',
                  color: 'from-red-500 to-pink-500'
                },
                {
                  step: 2,
                  title: 'Data Collection & Acquisition',
                  description: 'Gather comprehensive, relevant data from various sources',
                  example: 'Customer demographics, usage patterns, support interactions, billing history',
                  color: 'from-orange-500 to-yellow-500'
                },
                {
                  step: 3,
                  title: 'Data Preprocessing & Feature Engineering',
                  description: 'Clean, transform, and optimize data for ML algorithms (often 70-80% of project time)',
                  example: 'Handle missing values, encode categories, create derived features, scale data',
                  color: 'from-yellow-500 to-green-500'
                },
                {
                  step: 4,
                  title: 'Model Selection & Training',
                  description: 'Choose appropriate algorithms and train models on your prepared data',
                  example: 'Compare Random Forest, SVM, and Neural Networks for churn prediction',
                  color: 'from-green-500 to-teal-500'
                },
                {
                  step: 5,
                  title: 'Model Evaluation & Validation',
                  description: 'Assess model performance using various metrics and validation techniques',
                  example: 'Cross-validation, precision/recall analysis, ROC curves, confusion matrices',
                  color: 'from-teal-500 to-blue-500'
                },
                {
                  step: 6,
                  title: 'Model Optimization & Tuning',
                  description: 'Fine-tune hyperparameters and optimize model performance',
                  example: 'Grid search for optimal parameters, feature selection, ensemble methods',
                  color: 'from-blue-500 to-indigo-500'
                },
                {
                  step: 7,
                  title: 'Deployment & Monitoring',
                  description: 'Deploy model to production and continuously monitor performance',
                  example: 'Real-time churn prediction API with automated retraining pipelines',
                  color: 'from-indigo-500 to-purple-500'
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0`}>
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h4>
                    <p className="text-gray-600 mb-2">{item.description}</p>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <span className="text-sm text-gray-700"><strong>Example:</strong> {item.example}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Popular Algorithms */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-3xl font-bold text-center mb-8 gradient-text">
              Popular ML Algorithms: Your First Toolkit
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div 
                  className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl cursor-pointer card-hover"
                  onClick={() => toggleSection('linear-regression')}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xl font-bold text-blue-800">📈 Linear Regression</h4>
                      <p className="text-blue-600 text-sm">Predicting continuous numerical values</p>
                    </div>
                    <div className="text-blue-600">
                      {expandedSection === 'linear-regression' ? '▼' : '▶'}
                    </div>
                  </div>
                  {expandedSection === 'linear-regression' && (
                    <div className="mt-4 p-4 bg-white rounded-lg animate-fade-in">
                      <p className="text-gray-700 text-sm mb-3">
                        <strong>Purpose:</strong> Predicts continuous values by finding the best-fit line through data points.
                      </p>
                      <p className="text-gray-700 text-sm mb-3">
                        <strong>Real-World Applications:</strong> House price prediction, stock market analysis, sales forecasting, medical dosage calculations.
                      </p>
                      <p className="text-gray-700 text-sm">
                        <strong>How it Works:</strong> Draws a straight line that minimizes the distance to all data points, creating a mathematical relationship between input and output.
                      </p>
                    </div>
                  )}
                </div>

                <div 
                  className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl cursor-pointer card-hover"
                  onClick={() => toggleSection('logistic-regression')}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xl font-bold text-green-800">🎯 Logistic Regression</h4>
                      <p className="text-green-600 text-sm">Binary classification for yes/no decisions</p>
                    </div>
                    <div className="text-green-600">
                      {expandedSection === 'logistic-regression' ? '▼' : '▶'}
                    </div>
                  </div>
                  {expandedSection === 'logistic-regression' && (
                    <div className="mt-4 p-4 bg-white rounded-lg animate-fade-in">
                      <p className="text-gray-700 text-sm mb-3">
                        <strong>Purpose:</strong> Predicts the probability of binary outcomes (0 or 1, Yes or No).
                      </p>
                      <p className="text-gray-700 text-sm mb-3">
                        <strong>Real-World Applications:</strong> Email spam detection, medical diagnosis (disease/no disease), marketing response prediction, loan approval decisions.
                      </p>
                      <p className="text-gray-700 text-sm">
                        <strong>How it Works:</strong> Uses the sigmoid function to map any input to a value between 0 and 1, representing probability.
                      </p>
                    </div>
                  )}
                </div>

                <div 
                  className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-xl cursor-pointer card-hover"
                  onClick={() => toggleSection('decision-trees')}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xl font-bold text-yellow-800">🌳 Decision Trees</h4>
                      <p className="text-yellow-600 text-sm">Easy-to-understand decision-making process</p>
                    </div>
                    <div className="text-yellow-600">
                      {expandedSection === 'decision-trees' ? '▼' : '▶'}
                    </div>
                  </div>
                  {expandedSection === 'decision-trees' && (
                    <div className="mt-4 p-4 bg-white rounded-lg animate-fade-in">
                      <p className="text-gray-700 text-sm mb-3">
                        <strong>Purpose:</strong> Creates a tree-like model of decisions, easy to interpret and explain.
                      </p>
                      <p className="text-gray-700 text-sm mb-3">
                        <strong>Real-World Applications:</strong> Medical diagnosis flowcharts, bank loan approvals, customer segmentation, feature selection.
                      </p>
                      <p className="text-gray-700 text-sm">
                        <strong>How it Works:</strong> Splits data based on feature values, creating a hierarchical set of if-else conditions.
                      </p>
                    </div>
                  )}
                </div>

                <div 
                  className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl cursor-pointer card-hover"
                  onClick={() => toggleSection('neural-networks')}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xl font-bold text-purple-800">🧠 Neural Networks</h4>
                      <p className="text-purple-600 text-sm">Brain-inspired learning systems</p>
                    </div>
                    <div className="text-purple-600">
                      {expandedSection === 'neural-networks' ? '▼' : '▶'}
                    </div>
                  </div>
                  {expandedSection === 'neural-networks' && (
                    <div className="mt-4 p-4 bg-white rounded-lg animate-fade-in">
                      <p className="text-gray-700 text-sm mb-3">
                        <strong>Purpose:</strong> Mimics brain neurons to solve complex pattern recognition problems.
                      </p>
                      <p className="text-gray-700 text-sm mb-3">
                        <strong>Real-World Applications:</strong> Image recognition, natural language processing, autonomous vehicles, game playing (AlphaGo).
                      </p>
                      <p className="text-gray-700 text-sm">
                        <strong>How it Works:</strong> Networks of interconnected nodes process information through weighted connections and activation functions.
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-purple-800 mb-4">🧮 The Math Behind ML</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span>Linear Algebra: Vectors and matrices</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span>Statistics: Probability and distributions</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span>Calculus: Optimization and gradients</span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-white rounded-lg">
                    <p className="text-xs text-gray-600">
                      Don&apos;t worry! You can start learning ML with basic math and build up gradually.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-green-800 mb-4">🚀 Getting Started Tips</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Start with Python and basic libraries (pandas, scikit-learn)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Practice on real datasets (Kaggle, UCI ML Repository)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Join online communities and take courses</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Build projects to showcase your skills</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AIMLSection
