'use client'

import React, { useState, useEffect } from 'react'

interface NetworkNode {
  id: string
  x: number
  y: number
  layer: number
  isActive: boolean
  activation: number
}

interface Connection {
  from: string
  to: string
  weight: number
  isActive: boolean
}

const NeuralNetworkAnimation = () => {
  const [nodes, setNodes] = useState<NetworkNode[]>([])
  const [connections, setConnections] = useState<Connection[]>([])
  const [currentStep, setCurrentStep] = useState(0)
  const [isProcessing, setIsProcessing] = useState(false)
  const [currentTask, setCurrentTask] = useState(0)
  const [processingSpeed, setProcessingSpeed] = useState(1200)
  const [showTechnicalDetails, setShowTechnicalDetails] = useState(false)

  const tasks = [
    { 
      name: "Image Recognition", 
      input: "🖼️ Cat Photo (224x224 pixels)", 
      process: "Pixel analysis → Edge detection → Feature extraction → Pattern recognition → Classification",
      output: "🐱 'Cat' (98.7% confidence)",
      color: "from-blue-500 to-cyan-500",
      stats: "16.7M parameters • 1.2ms processing"
    },
    { 
      name: "Language Processing", 
      input: "💬 'Hello, how are you today?'", 
      process: "Tokenization → Embedding → Attention mapping → Context analysis → Response generation",
      output: "🤖 'I'm doing well, thank you for asking!'",
      color: "from-purple-500 to-pink-500",
      stats: "175B parameters • 0.8s processing"
    },
    { 
      name: "Code Generation", 
      input: "💻 'Sort a list in Python'", 
      process: "Intent parsing → Code structure → Syntax mapping → Logic flow → Optimization",
      output: "🐍 sorted_list = sorted(my_list)",
      color: "from-green-500 to-emerald-500",
      stats: "12B parameters • 0.3s processing"
    },
    { 
      name: "Medical Diagnosis", 
      input: "🏥 X-Ray Scan + Symptoms", 
      process: "Image preprocessing → Anomaly detection → Pattern matching → Risk analysis → Diagnosis",
      output: "⚕️ 94% Normal, Monitor advised",
      color: "from-red-500 to-pink-500",
      stats: "45M parameters • 2.1s processing"
    },
    { 
      name: "Financial Analysis", 
      input: "📊 Stock Market Data", 
      process: "Data normalization → Trend analysis → Risk assessment → Prediction modeling",
      output: "📈 Buy Signal: 78% confidence",
      color: "from-orange-500 to-yellow-500",
      stats: "8.5M parameters • 0.5s processing"
    }
  ]

  // Initialize neural network structure
  useEffect(() => {
    const newNodes: NetworkNode[] = []
    const newConnections: Connection[] = []

    // Create layers: Input (3 nodes), Hidden1 (5 nodes), Hidden2 (4 nodes), Output (2 nodes)
    const layers = [3, 5, 4, 2]
    const layerSpacing = 150
    const nodeSpacing = 60

    layers.forEach((nodeCount, layerIndex) => {
      for (let nodeIndex = 0; nodeIndex < nodeCount; nodeIndex++) {
        const nodeId = `L${layerIndex}N${nodeIndex}`
        const y = (nodeIndex - (nodeCount - 1) / 2) * nodeSpacing
        
        newNodes.push({
          id: nodeId,
          x: layerIndex * layerSpacing,
          y: y,
          layer: layerIndex,
          isActive: false,
          activation: 0
        })

        // Create connections to next layer
        if (layerIndex < layers.length - 1) {
          for (let nextNodeIndex = 0; nextNodeIndex < layers[layerIndex + 1]; nextNodeIndex++) {
            const nextNodeId = `L${layerIndex + 1}N${nextNodeIndex}`
            newConnections.push({
              from: nodeId,
              to: nextNodeId,
              weight: Math.random() * 2 - 1, // Random weight between -1 and 1
              isActive: false
            })
          }
        }
      }
    })

    setNodes(newNodes)
    setConnections(newConnections)
  }, [])

  // Animation logic
  useEffect(() => {
    if (!isProcessing) return

    const animationInterval = setInterval(() => {
      setCurrentStep(prev => {
        const nextStep = prev + 1
        
        // Reset after completing all layers
        if (nextStep > 4) {
          setIsProcessing(false)
          setTimeout(() => {
            // Reset all nodes and connections
            setNodes(prev => prev.map(node => ({ ...node, isActive: false, activation: 0 })))
            setConnections(prev => prev.map(conn => ({ ...conn, isActive: false })))
            setCurrentStep(0)
            
            // Move to next task
            setCurrentTask(prev => (prev + 1) % tasks.length)
          }, 3000)
          return 0
        }

        // Activate nodes and connections for current layer
        setNodes(prev => prev.map(node => ({
          ...node,
          isActive: node.layer <= nextStep,
          activation: node.layer <= nextStep ? Math.random() * 0.8 + 0.2 : 0
        })))

        setConnections(prev => prev.map(conn => {
          const fromNode = nodes.find(n => n.id === conn.from)
          const toNode = nodes.find(n => n.id === conn.to)
          return {
            ...conn,
            isActive: fromNode?.layer === nextStep - 1 && toNode?.layer === nextStep
          }
        }))

        return nextStep
      })
    }, processingSpeed)

    return () => clearInterval(animationInterval)
  }, [isProcessing, nodes, processingSpeed])

  // Auto-start animation
  useEffect(() => {
    const autoStart = setInterval(() => {
      if (!isProcessing) {
        setIsProcessing(true)
      }
    }, 8000)

    // Start immediately
    setTimeout(() => setIsProcessing(true), 2000)

    return () => clearInterval(autoStart)
  }, [isProcessing])

  const startAnimation = () => {
    setIsProcessing(true)
    setCurrentStep(0)
  }

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-2xl shadow-2xl p-6 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <div className="relative z-20 mb-6">
        <h3 className="text-3xl font-bold text-center mb-4 gradient-text">
          🧠 Neural Network in Action: Live AI Processing Demo
        </h3>
        <p className="text-center text-gray-300 max-w-3xl mx-auto">
          Watch how artificial intelligence processes information through interconnected layers of neurons, 
          just like how our brain works - but at lightning speed!
        </p>
      </div>

      {/* Controls */}
      <div className="relative z-20 mb-6">
        <div className={`bg-gradient-to-r ${tasks[currentTask].color} rounded-xl p-4 text-white backdrop-blur-sm border border-white/20`}>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-3 md:space-y-0">
            <div className="flex-1">
              <div className="font-bold text-lg">{tasks[currentTask].name}</div>
              <div className="text-sm opacity-90 mb-1 break-words">Input: {tasks[currentTask].input}</div>
              {showTechnicalDetails && (
                <div className="text-xs opacity-75">{tasks[currentTask].stats}</div>
              )}
            </div>
            <div className="flex items-center space-x-3 flex-wrap">
              <div className="flex items-center space-x-2">
                <label className="text-sm font-medium">Speed:</label>
                <select 
                  value={processingSpeed} 
                  onChange={(e) => setProcessingSpeed(Number(e.target.value))}
                  className="bg-blue-600/80 text-white rounded px-2 py-1 text-sm border border-blue-400"
                >
                  <option value={2000}>Slow</option>
                  <option value={1200}>Normal</option>
                  <option value={600}>Fast</option>
                  <option value={300}>Very Fast</option>
                </select>
              </div>
              <button
                onClick={() => setShowTechnicalDetails(!showTechnicalDetails)}
                className="bg-purple-600/80 hover:bg-purple-700 px-3 py-1 rounded text-sm transition-all duration-300"
              >
                {showTechnicalDetails ? '🔧 Hide Tech' : '🔧 Show Tech'}
              </button>
              <button
                onClick={startAnimation}
                disabled={isProcessing}
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
              >
                <span>{isProcessing ? '🔄' : '▶️'}</span>
                <span>{isProcessing ? 'Processing...' : 'Start Demo'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>      {/* Neural Network Visualization */}
      <div className="relative z-10 mb-8">
        <div className="bg-black/30 rounded-xl p-6 backdrop-blur-sm border border-blue-500/20">
          <svg width="100%" height="350" viewBox="0 0 600 350" className="w-full h-auto">
            {/* Background Grid */}
            <defs>
              <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1E40AF" strokeWidth="0.5" opacity="0.1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />

            {/* Draw connections first (behind nodes) */}
            {connections.map((conn, index) => {
              const fromNode = nodes.find(n => n.id === conn.from)
              const toNode = nodes.find(n => n.id === conn.to)
              if (!fromNode || !toNode) return null

              const x1 = fromNode.x + 300 // Center offset
              const y1 = fromNode.y + 175 // Center offset
              const x2 = toNode.x + 300
              const y2 = toNode.y + 175

              return (
                <g key={index}>
                  <line
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke={conn.isActive ? '#60A5FA' : '#374151'}
                    strokeWidth={conn.isActive ? '3' : '1'}
                    opacity={conn.isActive ? 1 : 0.2}
                    className="transition-all duration-700 ease-in-out"
                    style={{
                      filter: conn.isActive ? 'drop-shadow(0 0 4px #60A5FA)' : 'none'
                    }}
                  />
                  {conn.isActive && (
                    <circle r="2" fill="#00FF88">
                      <animateMotion dur="0.8s" repeatCount="1">
                        <path d={`M ${x1} ${y1} L ${x2} ${y2}`} />
                      </animateMotion>
                    </circle>
                  )}
                </g>
              )
            })}

            {/* Draw nodes */}
            {nodes.map((node) => (
              <g key={node.id}>
                <circle
                  cx={node.x + 300}
                  cy={node.y + 175}
                  r={node.isActive ? '14' : '8'}
                  fill={node.isActive ? '#3B82F6' : '#6B7280'}
                  className="transition-all duration-700 ease-in-out"
                  style={{
                    filter: node.isActive ? `brightness(${1 + node.activation}) drop-shadow(0 0 12px #60A5FA)` : 'none',
                    transition: 'all 0.7s ease-in-out'
                  }}
                />
                {node.isActive && (
                  <>
                    <circle
                      cx={node.x + 300}
                      cy={node.y + 175}
                      r="20"
                      fill="none"
                      stroke="#60A5FA"
                      strokeWidth="2"
                      opacity="0.6"
                      className="animate-ping"
                    />
                    {showTechnicalDetails && (
                      <text
                        x={node.x + 300}
                        y={node.y + 175 + 35}
                        textAnchor="middle"
                        fill="white"
                        fontSize="8"
                        opacity="0.8"
                      >
                        {(node.activation * 100).toFixed(0)}%
                      </text>
                    )}
                  </>
                )}
              </g>
            ))}

            {/* Enhanced Layer Labels with better visibility */}
            <g>
              {/* Input Layer */}
              <rect x="250" y="15" width="100" height="25" fill="#1E40AF" rx="12" opacity="0.8"/>
              <text x="300" y="32" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">Input Layer</text>
              <text x="300" y="50" textAnchor="middle" fill="#60A5FA" fontSize="11">Raw Data</text>
              
              {/* Hidden Layers */}
              <rect x="400" y="15" width="100" height="25" fill="#7C3AED" rx="12" opacity="0.8"/>
              <text x="450" y="32" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">Hidden Layers</text>
              <text x="450" y="50" textAnchor="middle" fill="#A78BFA" fontSize="11">Feature Processing</text>
              
              {/* Output Layer */}
              <rect x="550" y="15" width="100" height="25" fill="#059669" rx="12" opacity="0.8"/>
              <text x="600" y="32" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">Output</text>
              <text x="600" y="50" textAnchor="middle" fill="#34D399" fontSize="11">Prediction</text>
            </g>

            {/* Data Flow Indicators with improved animation */}
            {isProcessing && (
              <>
                <circle r="5" fill="#00FF88" opacity="0.9">
                  <animateMotion dur="1.5s" repeatCount="indefinite">
                    <path d="M 250 175 L 650 175" />
                  </animateMotion>
                </circle>
                <circle r="5" fill="#00AAFF" opacity="0.9">
                  <animateMotion dur="1.5s" repeatCount="indefinite" begin="0.3s">
                    <path d="M 250 145 L 650 205" />
                  </animateMotion>
                </circle>
                <circle r="5" fill="#FF4488" opacity="0.9">
                  <animateMotion dur="1.5s" repeatCount="indefinite" begin="0.6s">
                    <path d="M 250 205 L 650 145" />
                  </animateMotion>
                </circle>
              </>
            )}

            {/* Processing wave effect */}
            {isProcessing && (
              <circle cx="300" cy="175" r="0" fill="none" stroke="#60A5FA" strokeWidth="2" opacity="0.5">
                <animate attributeName="r" values="0;100;200" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.5;0.2;0" dur="2s" repeatCount="indefinite" />
              </circle>
            )}
          </svg>
        </div>
      </div>

      {/* Enhanced Output Result with Better Visibility */}
      <div className="relative z-10 mb-4">
        <div className="bg-slate-800/90 rounded-xl p-4 border border-cyan-500/30 backdrop-blur-sm">
          <div className="flex items-center space-x-3 mb-2">
            <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
            <span className="text-cyan-300 font-bold text-lg">💻 Current Input:</span>
          </div>
          <div className="bg-black/50 p-4 rounded-lg border border-cyan-500/20">
            <div className="flex items-center justify-between">
              <div className="text-white text-lg font-mono break-words">
                {tasks[currentTask].input}
              </div>
              <div className="text-cyan-400 text-sm bg-cyan-500/20 px-2 py-1 rounded">
                {tasks[currentTask].name}
              </div>
            </div>
            <div className="mt-2 text-slate-400 text-sm">
              Processing: {tasks[currentTask].process}
            </div>
          </div>
        </div>
      </div>

      {/* Neural Network Visualization */}
      <div className="relative z-10 mb-4">
        <div className="bg-black/30 rounded-xl p-4 backdrop-blur-sm border border-blue-500/20">
          <svg width="100%" height="300" viewBox="0 0 600 300" className="w-full h-auto">
            {/* Background Grid */}
            <defs>
              <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1E40AF" strokeWidth="0.5" opacity="0.1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
      </div>

      {/* Process Steps */}
      <div className="relative z-10 mb-6">
        <div className="bg-black/20 rounded-xl p-4">
          <h4 className="font-semibold mb-3 flex items-center">
            <span className="mr-2">⚡</span>
            Processing Steps:
          </h4>
          <div className="text-sm opacity-90 leading-relaxed mb-3 bg-blue-900/30 p-3 rounded-lg">
            {tasks[currentTask].process}
          </div>
          
          {/* Step Indicators */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              {[0, 1, 2, 3].map(step => (
                <div
                  key={step}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentStep > step 
                      ? 'bg-green-400 animate-pulse' 
                      : currentStep === step 
                        ? 'bg-blue-400 animate-bounce' 
                        : 'bg-gray-500'
                  }`}
                />
              ))}
              <span className="ml-2 text-xs">
                {currentStep === 0 ? 'Ready' : 
                 currentStep === 1 ? 'Input Processing' :
                 currentStep === 2 ? 'Feature Extraction' :
                 currentStep === 3 ? 'Pattern Recognition' :
                 currentStep === 4 ? 'Output Generation' : 'Complete'}
              </span>
            </div>
            {showTechnicalDetails && (
              <div className="text-xs bg-blue-900/50 px-3 py-1 rounded">
                Step {currentStep}/4 • Layer {currentStep > 0 ? currentStep : 0} Active
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Enhanced Output Result with Better Visibility */}
      <div className="relative z-10 mb-6">
        <div className={`bg-gradient-to-r ${tasks[currentTask].color} rounded-xl p-6 transform transition-all duration-500 border-2 ${
          currentStep >= 4 ? 'scale-105 opacity-100 border-white/30 shadow-2xl' : 'scale-95 opacity-60 border-white/10'
        }`}>
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-bold text-xl flex items-center text-white">
              <span className="mr-3 text-2xl">🎯</span>
              AI Output Result:
            </h4>
            {currentStep >= 4 && (
              <div className="flex items-center bg-white/20 px-3 py-1 rounded-full">
                <span className="mr-2 animate-pulse text-green-300">✅</span>
                <span className="text-sm font-medium">Complete</span>
              </div>
            )}
          </div>
          
          <div className={`text-xl font-bold mb-3 bg-black/30 p-4 rounded-lg border-2 transition-all duration-500 ${
            currentStep >= 4 ? 'border-white/40 bg-black/40' : 'border-white/20'
          }`}>
            <div className="flex items-center justify-between">
              <div className="text-white">
                {currentStep >= 4 ? (
                  <div className="flex items-center">
                    <span className="mr-3 text-2xl animate-bounce">{tasks[currentTask].output.split(' ')[0]}</span>
                    <span>{tasks[currentTask].output.slice(tasks[currentTask].output.indexOf(' ') + 1)}</span>
                  </div>
                ) : (
                  <div className="flex items-center">
                    <span className="mr-3 animate-spin">⏳</span>
                    <span>Processing neural pathways...</span>
                  </div>
                )}
              </div>
              {currentStep >= 4 && (
                <div className="text-right">
                  <div className="text-green-300 text-sm font-medium">SUCCESS</div>
                  <div className="text-white/70 text-xs">
                    {Math.floor(Math.random() * 50) + 50}ms response
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Processing Steps Indicator */}
          <div className="mb-4">
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="text-white/80">Processing Pipeline:</span>
              <span className="text-white/60">{currentStep}/4 steps</span>
            </div>
            <div className="flex space-x-1">
              {[1, 2, 3, 4].map((step) => (
                <div 
                  key={step}
                  className={`flex-1 h-2 rounded transition-all duration-500 ${
                    currentStep >= step ? 'bg-white' : 'bg-white/20'
                  }`}
                />
              ))}
            </div>
            <div className="flex justify-between text-xs text-white/60 mt-1">
              <span>Input</span>
              <span>Process</span>
              <span>Analyze</span>
              <span>Output</span>
            </div>
          </div>

          {currentStep >= 4 && (
            <div className="border-t border-white/20 pt-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm">
                  <span className="mr-2 animate-pulse text-green-300">🚀</span>
                  <span className="text-white/90">Task completed successfully!</span>
                </div>
                {showTechnicalDetails && (
                  <div className="text-xs text-white/70 bg-white/10 px-2 py-1 rounded">
                    {tasks[currentTask].stats}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Educational Info */}
      <div className="relative z-10 grid md:grid-cols-3 gap-4 text-sm">
        <div className="bg-blue-500/20 rounded-lg p-3">
          <div className="font-semibold mb-1 flex items-center">
            <span className="mr-2">🔍</span>
            What&apos;s Happening?
          </div>
          <div className="opacity-90">Each node processes and transforms data, passing it to the next layer with different weights and biases.</div>
        </div>
        <div className="bg-purple-500/20 rounded-lg p-3">
          <div className="font-semibold mb-1 flex items-center">
            <span className="mr-2">⚡</span>
            Speed & Scale
          </div>
          <div className="opacity-90">Real AI models have millions of nodes processing billions of calculations per second!</div>
        </div>
        <div className="bg-green-500/20 rounded-lg p-3">
          <div className="font-semibold mb-1 flex items-center">
            <span className="mr-2">🎯</span>
            Learning Process
          </div>
          <div className="opacity-90">Through training, the network adjusts weights to make better predictions over time.</div>
        </div>
      </div>
    </div>
  )
}

export default NeuralNetworkAnimation
