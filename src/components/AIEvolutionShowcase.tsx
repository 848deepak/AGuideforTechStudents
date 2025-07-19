'use client'

import React, { useState, useEffect } from 'react'

interface AITool {
  name: string
  icon: string
  company: string
  purpose: string
  training: string
  uniqueFeature: string
  color: string
  launched: string
}

interface AIEra {
  period: string
  title: string
  description: string
  milestone: string
  icon: string
  color: string
}

interface AIFact {
  icon: string
  title: string
  description: string
  stat: string
}

const AIEvolutionShowcase = () => {
  const [activeTab, setActiveTab] = useState<'comparison' | 'evolution' | 'facts'>('comparison')
  const [currentTool, setCurrentTool] = useState(0)
  const [currentEra, setCurrentEra] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const [selectedFact, setSelectedFact] = useState<number | null>(null)

  const aiTools: AITool[] = [
    {
      name: "ChatGPT",
      icon: "💬",
      company: "OpenAI",
      purpose: "Conversational AI Assistant",
      training: "Trained on diverse internet text data using reinforcement learning from human feedback (RLHF)",
      uniqueFeature: "Natural conversation & reasoning",
      color: "from-green-500 to-emerald-600",
      launched: "Nov 2022"
    },
    {
      name: "GitHub Copilot",
      icon: "👨‍💻",
      company: "GitHub (Microsoft)",
      purpose: "AI Code Assistant",
      training: "Trained on billions of lines of public code repositories and programming documentation",
      uniqueFeature: "Real-time code suggestions & completion",
      color: "from-blue-500 to-indigo-600",
      launched: "Jun 2021"
    },
    {
      name: "Cursor AI",
      icon: "🎯",
      company: "Anysphere",
      purpose: "AI Code Editor",
      training: "Combines multiple LLMs with code-specific training for enhanced programming workflows",
      uniqueFeature: "Context-aware code editing & refactoring",
      color: "from-purple-500 to-pink-600",
      launched: "Mar 2023"
    },
    {
      name: "Claude",
      icon: "🤖",
      company: "Anthropic",
      purpose: "Constitutional AI Assistant",
      training: "Trained using Constitutional AI methods for helpful, harmless, and honest responses",
      uniqueFeature: "Ethical reasoning & long-context understanding",
      color: "from-orange-500 to-red-600",
      launched: "Mar 2023"
    },
    {
      name: "Midjourney",
      icon: "🎨",
      company: "Midjourney Inc.",
      purpose: "AI Image Generation",
      training: "Trained on millions of images with artistic and aesthetic optimization",
      uniqueFeature: "Artistic style & creative image synthesis",
      color: "from-pink-500 to-rose-600",
      launched: "Jul 2022"
    }
  ]

  const aiEvolution: AIEra[] = [
    {
      period: "1950s-1960s",
      title: "The Birth of AI",
      description: "Alan Turing proposes the Turing Test. Early AI research begins with symbolic reasoning.",
      milestone: "1956: Dartmouth Conference coins 'Artificial Intelligence'",
      icon: "🧠",
      color: "from-gray-500 to-gray-600"
    },
    {
      period: "1980s-1990s",
      title: "Machine Learning Era",
      description: "Neural networks gain popularity. Backpropagation algorithm revolutionizes learning.",
      milestone: "1997: IBM's Deep Blue defeats world chess champion",
      icon: "♟️",
      color: "from-blue-500 to-cyan-600"
    },
    {
      period: "2000s-2010s",
      title: "Big Data & Deep Learning",
      description: "Internet explosion provides massive datasets. Deep learning networks emerge.",
      milestone: "2012: AlexNet wins ImageNet, sparking deep learning revolution",
      icon: "🏔️",
      color: "from-green-500 to-teal-600"
    },
    {
      period: "2010s-2020s",
      title: "AI Goes Mainstream",
      description: "Smartphones integrate AI. Voice assistants and recommendation systems everywhere.",
      milestone: "2016: AlphaGo defeats Go world champion Lee Sedol",
      icon: "📱",
      color: "from-orange-500 to-red-600"
    },
    {
      period: "2020s-Present",
      title: "Generative AI Revolution",
      description: "GPT models transform how we interact with AI. Creative AI emerges.",
      milestone: "2022: ChatGPT reaches 100M users in just 2 months",
      icon: "🚀",
      color: "from-purple-500 to-pink-600"
    },
    {
      period: "2030s+",
      title: "Future of AI",
      description: "Predictions: AGI, quantum-AI hybrid systems, personalized AI companions.",
      milestone: "Expected: AI assistants become truly conversational partners",
      icon: "🔮",
      color: "from-indigo-500 to-purple-600"
    }
  ]

  const interestingFacts: AIFact[] = [
    {
      icon: "⚡",
      title: "Training Power",
      description: "GPT-3 required the equivalent of 355 years of continuous computation on a single GPU",
      stat: "355 GPU-years"
    },
    {
      icon: "💰",
      title: "Training Cost",
      description: "Training ChatGPT-4 cost approximately $100 million in computational resources",
      stat: "$100M+"
    },
    {
      icon: "📊",
      title: "Data Scale",
      description: "Modern AI models are trained on datasets containing trillions of words",
      stat: "45TB of text"
    },
    {
      icon: "🎯",
      title: "Code Generation",
      description: "GitHub Copilot suggests code that gets accepted by developers 27% of the time",
      stat: "27% acceptance"
    },
    {
      icon: "🌍",
      title: "Global Impact",
      description: "ChatGPT reached 100 million users faster than any consumer application in history",
      stat: "2 months to 100M"
    },
    {
      icon: "🧮",
      title: "Model Size",
      description: "GPT-4 has approximately 1.76 trillion parameters (estimated)",
      stat: "1.76T parameters"
    },
    {
      icon: "🔋",
      title: "Energy Consumption",
      description: "Training GPT-3 consumed about 1,287 MWh of electricity - enough to power 120 homes for a year",
      stat: "1,287 MWh"
    },
    {
      icon: "🏎️",
      title: "Processing Speed",
      description: "Modern AI chips can perform 1 quintillion operations per second",
      stat: "1018 ops/sec"
    },
    {
      icon: "💾",
      title: "Memory Requirements",
      description: "Loading GPT-3 into memory requires about 350GB of RAM",
      stat: "350GB RAM"
    }
  ]

  useEffect(() => {
    if (!isAutoPlay) return
    
    const interval = setInterval(() => {
      if (activeTab === 'comparison') {
        setCurrentTool((prev) => (prev + 1) % aiTools.length)
      } else if (activeTab === 'evolution') {
        setCurrentEra((prev) => (prev + 1) % aiEvolution.length)
      }
    }, 4000)
    return () => clearInterval(interval)
  }, [activeTab, aiTools.length, aiEvolution.length, isAutoPlay])

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
      <h3 className="text-3xl font-bold text-center mb-6 gradient-text">
        AI Deep Dive: Tools, Evolution & Amazing Facts
      </h3>

      {/* Auto-play control */}
      <div className="flex justify-center mb-6">
        <button
          onClick={() => setIsAutoPlay(!isAutoPlay)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center space-x-2 ${
            isAutoPlay 
              ? 'bg-green-100 text-green-700 border border-green-300' 
              : 'bg-gray-100 text-gray-600 border border-gray-300'
          }`}
        >
          <span>{isAutoPlay ? '⏸️' : '▶️'}</span>
          <span>{isAutoPlay ? 'Auto-playing' : 'Paused'}</span>
        </button>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-8">
        <div className="bg-gray-100 rounded-full p-1 flex">
          {[
            { id: 'comparison', label: '🤖 AI Tools Comparison', icon: '⚔️' },
            { id: 'evolution', label: '📈 AI Evolution Timeline', icon: '🕒' },
            { id: 'facts', label: '🤯 Mind-Blowing Facts', icon: '💡' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-3 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              <span>{tab.icon}</span>
              <span className="hidden md:inline">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* AI Tools Comparison */}
      {activeTab === 'comparison' && (
        <div className="animate-fade-in">
          <div className={`bg-gradient-to-r ${aiTools[currentTool].color} rounded-xl p-6 text-white mb-6 transform transition-all duration-500`}>
            <div className="flex items-center space-x-4 mb-4">
              <div className="text-5xl animate-pulse">{aiTools[currentTool].icon}</div>
              <div>
                <h4 className="text-3xl font-bold">{aiTools[currentTool].name}</h4>
                <p className="text-lg opacity-90">{aiTools[currentTool].company}</p>
                <p className="text-sm opacity-75">Launched: {aiTools[currentTool].launched}</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
                <h5 className="font-semibold mb-2">🎯 Purpose</h5>
                <p className="text-sm">{aiTools[currentTool].purpose}</p>
              </div>
              <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
                <h5 className="font-semibold mb-2">⚡ Unique Feature</h5>
                <p className="text-sm">{aiTools[currentTool].uniqueFeature}</p>
              </div>
            </div>
            
            <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
              <h5 className="font-semibold mb-2">🧠 Training Approach</h5>
              <p className="text-sm">{aiTools[currentTool].training}</p>
            </div>

            {/* Progress indicator */}
            <div className="flex justify-center mt-4 space-x-2">
              {aiTools.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTool ? 'bg-white' : 'bg-white/40'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Quick Comparison Table */}
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
            {aiTools.map((tool, index) => (
              <div 
                key={tool.name}
                className={`border rounded-lg p-4 transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                  index === currentTool 
                    ? 'border-blue-500 bg-blue-50 shadow-lg' 
                    : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                }`}
                onClick={() => {
                  setCurrentTool(index)
                  setIsAutoPlay(false)
                }}
              >
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-2xl">{tool.icon}</span>
                  <span className="font-semibold text-sm">{tool.name}</span>
                </div>
                <p className="text-xs text-gray-600">{tool.purpose}</p>
                <div className="text-xs text-gray-500 mt-1">{tool.company}</div>
              </div>
            ))}
          </div>

          {/* Detailed comparison when paused */}
          {!isAutoPlay && (
            <div className="bg-gray-50 rounded-xl p-6 animate-fade-in">
              <h4 className="text-xl font-bold mb-4 text-center">AI Tools Comparison Matrix</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Tool</th>
                      <th className="text-left p-2">Company</th>
                      <th className="text-left p-2">Primary Use</th>
                      <th className="text-left p-2">Launch Year</th>
                      <th className="text-left p-2">Unique Strength</th>
                    </tr>
                  </thead>
                  <tbody>
                    {aiTools.map((tool, index) => (
                      <tr 
                        key={tool.name} 
                        className={`border-b hover:bg-gray-100 cursor-pointer ${
                          index === currentTool ? 'bg-blue-50' : ''
                        }`}
                        onClick={() => setCurrentTool(index)}
                      >
                        <td className="p-2 flex items-center space-x-2">
                          <span>{tool.icon}</span>
                          <span className="font-medium">{tool.name}</span>
                        </td>
                        <td className="p-2">{tool.company}</td>
                        <td className="p-2">{tool.purpose}</td>
                        <td className="p-2">{tool.launched}</td>
                        <td className="p-2">{tool.uniqueFeature}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      )}

      {/* AI Evolution Timeline */}
      {activeTab === 'evolution' && (
        <div className="animate-fade-in">
          {/* Current Era Display */}
          <div className={`bg-gradient-to-r ${aiEvolution[currentEra].color} rounded-xl p-6 text-white mb-6 transform transition-all duration-500`}>
            <div className="flex items-center space-x-4 mb-4">
              <div className="text-5xl animate-bounce">{aiEvolution[currentEra].icon}</div>
              <div>
                <h4 className="text-2xl font-bold">{aiEvolution[currentEra].title}</h4>
                <p className="text-lg opacity-90">{aiEvolution[currentEra].period}</p>
              </div>
            </div>
            
            <p className="text-lg mb-4 opacity-90">{aiEvolution[currentEra].description}</p>
            
            <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
              <h5 className="font-semibold mb-2">🏆 Key Milestone</h5>
              <p className="text-sm">{aiEvolution[currentEra].milestone}</p>
            </div>

            {/* Progress indicator */}
            <div className="flex justify-center mt-4 space-x-2">
              {aiEvolution.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                    index === currentEra ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/60'
                  }`}
                  onClick={() => {
                    setCurrentEra(index)
                    setIsAutoPlay(false)
                  }}
                />
              ))}
            </div>
          </div>

          {/* Enhanced Timeline Navigation */}
          <div className="flex space-x-2 overflow-x-auto pb-4 mb-6">
            {aiEvolution.map((era, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentEra(index)
                  setIsAutoPlay(false)
                }}
                className={`flex-shrink-0 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                  index === currentEra 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <span className="text-lg">{era.icon}</span>
                  <div className="text-left">
                    <div className="font-bold">{era.period}</div>
                    <div className="text-xs opacity-75">{era.title.split(' ').slice(0, 2).join(' ')}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Interactive Timeline Visualization with Enhanced Features */}
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-xl font-bold text-center">🚀 AI Evolution Journey</h4>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Era {currentEra + 1} of {aiEvolution.length}</span>
                <div className="bg-blue-600 text-white px-2 py-1 rounded text-xs">
                  {Math.round(((currentEra + 1) / aiEvolution.length) * 100)}%
                </div>
              </div>
            </div>
            
            <div className="relative">
              {/* Enhanced Timeline line with gradient */}
              <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-30"></div>
              <div className="absolute left-4 top-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full transition-all duration-1000"
                   style={{ height: `${((currentEra + 1) / aiEvolution.length) * 100}%` }}></div>
              
              {/* Timeline items with enhanced interactivity */}
              <div className="space-y-6">
                {aiEvolution.map((era, index) => (
                  <div 
                    key={index}
                    className={`relative flex items-start space-x-4 cursor-pointer transition-all duration-500 ${
                      index === currentEra ? 'transform scale-105 z-10' : 
                      index <= currentEra ? 'opacity-80 hover:opacity-100' : 
                      'opacity-40 hover:opacity-60'
                    }`}
                    onClick={() => {
                      setCurrentEra(index)
                      setIsAutoPlay(false)
                    }}
                  >
                    {/* Enhanced Timeline dot */}
                    <div className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center text-lg border-4 border-white shadow-lg transition-all duration-500 ${
                      index === currentEra ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white transform scale-125 animate-pulse' :
                      index <= currentEra ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white' :
                      'bg-gray-300 text-gray-500'
                    }`}>
                      {era.icon}
                    </div>
                    
                    {/* Enhanced Content */}
                    <div className={`flex-1 p-6 rounded-lg border transition-all duration-500 ${
                      index === currentEra ? 'bg-gradient-to-r from-blue-50 to-purple-50 border-blue-300 shadow-lg' :
                      index <= currentEra ? 'bg-green-50 border-green-200' :
                      'bg-white border-gray-200 hover:bg-gray-50'
                    }`}>
                      <div className="flex items-center justify-between mb-2">
                        <h5 className="font-bold text-lg">{era.title}</h5>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          index === currentEra ? 'bg-blue-600 text-white' :
                          index <= currentEra ? 'bg-green-600 text-white' :
                          'bg-gray-400 text-white'
                        }`}>
                          {era.period}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{era.description}</p>
                      
                      {index === currentEra && (
                        <div className="mt-3 p-3 bg-white/70 rounded-lg border animate-fade-in">
                          <h6 className="font-semibold text-sm mb-1">🎯 Key Milestone:</h6>
                          <p className="text-xs text-gray-700">{era.milestone}</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Era Comparison Matrix */}
          <div className="bg-white rounded-xl border shadow-sm p-6">
            <h4 className="text-xl font-bold mb-4 text-center">📋 Era Comparison Matrix</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3 font-semibold">Era</th>
                    <th className="text-left p-3 font-semibold">Period</th>
                    <th className="text-left p-3 font-semibold">Key Focus</th>
                    <th className="text-left p-3 font-semibold">Technology</th>
                  </tr>
                </thead>
                <tbody>
                  {aiEvolution.map((era, index) => (
                    <tr 
                      key={index} 
                      className={`border-b hover:bg-gray-50 cursor-pointer transition-colors ${
                        index === currentEra ? 'bg-blue-50 border-blue-200' : ''
                      }`}
                      onClick={() => setCurrentEra(index)}
                    >
                      <td className="p-3">
                        <div className="flex items-center space-x-2">
                          <span className="text-lg">{era.icon}</span>
                          <span className="font-medium">{era.title}</span>
                        </div>
                      </td>
                      <td className="p-3 text-gray-600">{era.period}</td>
                      <td className="p-3">{era.description.split('.')[0]}</td>
                      <td className="p-3">
                        <span className="bg-gray-100 px-2 py-1 rounded text-xs">
                          {index === 0 ? 'Logic & Rules' :
                           index === 1 ? 'Neural Networks' :
                           index === 2 ? 'Expert Systems' :
                           index === 3 ? 'Deep Learning' :
                           'Generative AI'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Interesting Facts */}
      {activeTab === 'facts' && (
        <div className="animate-fade-in">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {interestingFacts.map((fact, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6 border cursor-pointer transform transition-all duration-300 hover:shadow-lg ${
                  selectedFact === index 
                    ? 'border-blue-500 bg-gradient-to-br from-blue-100 to-purple-100 scale-105 shadow-xl' 
                    : 'border-blue-100 hover:scale-105'
                }`}
                style={{animationDelay: `${index * 0.1}s`}}
                onClick={() => setSelectedFact(selectedFact === index ? null : index)}
              >
                <div className="text-3xl mb-3 animate-pulse">{fact.icon}</div>
                <h5 className="font-bold text-lg mb-2 text-gray-800">{fact.title}</h5>
                <p className="text-sm text-gray-600 mb-3">{fact.description}</p>
                <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold inline-block">
                  {fact.stat}
                </div>
                {selectedFact === index && (
                  <div className="mt-4 p-3 bg-white/70 rounded-lg animate-fade-in">
                    <p className="text-xs text-gray-700">
                      💡 <strong>Fun fact:</strong> {
                        index === 0 ? "That's equivalent to running your laptop 24/7 for over 350 years!" :
                        index === 1 ? "This could fund approximately 1,000 computer science PhD programs!" :
                        index === 2 ? "That's roughly equivalent to 45 million novels worth of text!" :
                        index === 3 ? "This means developers save about 30 minutes per day on average!" :
                        index === 4 ? "TikTok took 9 months, Instagram took 2.5 months to reach 100M users!" :
                        index === 5 ? "That's more parameters than there are stars in our galaxy!" :
                        index === 6 ? "Enough to power a small town for several days!" :
                        index === 7 ? "That's faster than the human brain's estimated 10^15 operations per second!" :
                        "That's enough RAM to store about 70,000 high-resolution photos!"
                      }
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Interactive Statistics Dashboard */}
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-6 text-white mb-8">
            <h4 className="text-2xl font-bold mb-6 text-center">📊 AI by the Numbers</h4>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">$200B+</div>
                <div className="text-sm opacity-75">Global AI Market 2023</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">4.8M</div>
                <div className="text-sm opacity-75">AI Jobs Worldwide</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">37%</div>
                <div className="text-sm opacity-75">Businesses Using AI</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">15.7%</div>
                <div className="text-sm opacity-75">Annual AI Growth Rate</div>
              </div>
            </div>
          </div>

          {/* Future Predictions */}
          <div className="mt-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-6 text-white">
            <h4 className="text-2xl font-bold mb-4 flex items-center">
              <span className="mr-3">🔮</span>
              Future of AI: What&apos;s Coming Next?
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
                <h5 className="font-semibold mb-2">🧠 Artificial General Intelligence (AGI)</h5>
                <p className="text-sm">AI systems that match or exceed human intelligence across all domains</p>
                <div className="text-xs mt-2 opacity-75">Predicted: 2030-2040</div>
              </div>
              <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
                <h5 className="font-semibold mb-2">🤝 Personal AI Companions</h5>
                <p className="text-sm">AI assistants that know you personally and adapt to your preferences</p>
                <div className="text-xs mt-2 opacity-75">Coming: 2025-2027</div>
              </div>
              <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
                <h5 className="font-semibold mb-2">🔬 AI-Driven Scientific Discovery</h5>
                <p className="text-sm">AI systems independently making breakthrough scientific discoveries</p>
                <div className="text-xs mt-2 opacity-75">Already happening!</div>
              </div>
              <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
                <h5 className="font-semibold mb-2">🌐 Quantum-AI Integration</h5>
                <p className="text-sm">Quantum computing accelerating AI capabilities exponentially</p>
                <div className="text-xs mt-2 opacity-75">Research phase</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AIEvolutionShowcase
