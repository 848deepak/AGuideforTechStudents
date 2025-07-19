'use client'

import React, { useState } from 'react'

const AudienceEngagement = () => {
  const [currentPoll, setCurrentPoll] = useState<string | null>(null)
  const [pollResults, setPollResults] = useState<{[key: string]: number}>({})
  const [showResults, setShowResults] = useState(false)

  const polls = {
    'tech-interest': {
      question: "Which tech domain interests you most?",
      icon: "🎯",
      options: [
        { text: 'Web Development', icon: '🌐', color: 'from-blue-500 to-cyan-500' },
        { text: 'AI/ML & Data Science', icon: '🤖', color: 'from-purple-500 to-pink-500' },
        { text: 'Cybersecurity', icon: '🔒', color: 'from-red-500 to-orange-500' },
        { text: 'Mobile App Development', icon: '📱', color: 'from-green-500 to-emerald-500' },
        { text: 'Blockchain & Web3', icon: '⛓️', color: 'from-indigo-500 to-purple-500' }
      ]
    },
    'experience-level': {
      question: "What's your current tech experience?",
      icon: "📚",
      options: [
        { text: 'Complete Beginner', icon: '🌱', color: 'from-green-500 to-emerald-500' },
        { text: 'Some Coding Experience', icon: '💻', color: 'from-blue-500 to-cyan-500' },
        { text: 'CS Student', icon: '🎓', color: 'from-purple-500 to-pink-500' },
        { text: 'Career Changer', icon: '🔄', color: 'from-orange-500 to-red-500' },
        { text: 'Just Curious', icon: '🤔', color: 'from-gray-500 to-slate-500' }
      ]
    },
    'ai-familiarity': {
      question: "How familiar are you with AI/ML?",
      icon: "🧠",
      options: [
        { text: 'Never heard of it', icon: '❓', color: 'from-gray-500 to-slate-500' },
        { text: 'Use AI tools daily', icon: '🤖', color: 'from-blue-500 to-cyan-500' },
        { text: 'Understand basics', icon: '📖', color: 'from-green-500 to-emerald-500' },
        { text: 'Some hands-on experience', icon: '🔬', color: 'from-purple-500 to-pink-500' },
        { text: 'Very familiar', icon: '🎯', color: 'from-orange-500 to-red-500' }
      ]
    },
    'learning-goals': {
      question: "What's your primary learning goal?",
      icon: "🎯",
      options: [
        { text: 'Career Change', icon: '💼', color: 'from-blue-500 to-cyan-500' },
        { text: 'Academic Interest', icon: '🎓', color: 'from-purple-500 to-pink-500' },
        { text: 'Personal Projects', icon: '🛠️', color: 'from-green-500 to-emerald-500' },
        { text: 'Stay Updated', icon: '📈', color: 'from-orange-500 to-red-500' },
        { text: 'Just Exploring', icon: '🔍', color: 'from-indigo-500 to-purple-500' }
      ]
    }
  }

  const startPoll = (pollId: string) => {
    setCurrentPoll(pollId)
    setPollResults({})
    setShowResults(false)
  }

  const vote = (option: string) => {
    setPollResults(prev => ({
      ...prev,
      [option]: (prev[option] || 0) + 1
    }))
  }

  const showPollResults = () => {
    setShowResults(true)
  }

  const resetPoll = () => {
    setPollResults({})
    setShowResults(false)
  }

  if (!currentPoll) {
    return (
      <div className="fixed top-20 right-4 glass rounded-2xl p-6 shadow-2xl max-w-xs z-40 animate-fade-in">
        <h4 className="font-bold mb-4 text-lg flex items-center">
          <span className="mr-2 text-xl">🎯</span>
          Audience Polls
        </h4>
        <div className="space-y-3">
          {Object.entries(polls).map(([id, poll]) => (
            <button
              key={id}
              onClick={() => startPoll(id)}
              className="w-full text-left p-4 rounded-xl hover:bg-white/50 transition-all duration-300 group hover:scale-105"
            >
              <div className="flex items-center space-x-3">
                <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{poll.icon}</span>
                <div>
                  <div className="font-semibold text-gray-700 text-sm">{poll.question}</div>
                  <div className="text-xs text-gray-500 mt-1">Click to start poll</div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    )
  }

  const currentPollData = polls[currentPoll as keyof typeof polls]
  const totalVotes = Object.values(pollResults).reduce((sum, votes) => sum + votes, 0)
  const maxVotes = Math.max(...Object.values(pollResults), 1)

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="glass rounded-3xl p-8 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto animate-fade-in">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold flex items-center">
            <span className="mr-3 text-3xl">{currentPollData.icon}</span>
            Live Poll
          </h3>
          <button 
            onClick={() => setCurrentPoll(null)}
            className="text-gray-500 hover:text-gray-700 hover:scale-110 transition-all duration-300 text-2xl"
          >
            ✕
          </button>
        </div>
        
        {/* Question */}
        <h4 className="text-xl font-semibold mb-6 text-gray-800">{currentPollData.question}</h4>
        
        {/* Poll Options */}
        <div className="space-y-4 mb-6">
          {currentPollData.options.map((option) => {
            const votes = pollResults[option.text] || 0
            const percentage = totalVotes > 0 ? (votes / totalVotes) * 100 : 0
            const barWidth = totalVotes > 0 ? (votes / maxVotes) * 100 : 0
            
            return (
              <div key={option.text} className="relative">
                <button
                  onClick={() => vote(option.text)}
                  disabled={showResults}
                  className={`w-full text-left p-4 rounded-2xl transition-all duration-300 group ${
                    showResults 
                      ? 'cursor-default' 
                      : 'hover:scale-105 hover:shadow-lg cursor-pointer'
                  } ${showResults ? 'bg-white/80' : 'bg-white/60 hover:bg-white/80'}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`bg-gradient-to-r ${option.color} rounded-xl p-3 text-white text-xl group-hover:scale-110 transition-transform duration-300`}>
                        {option.icon}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800">{option.text}</div>
                        {showResults && (
                          <div className="text-sm text-gray-600 mt-1">
                            {votes} votes ({percentage.toFixed(1)}%)
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {!showResults && (
                      <div className="text-2xl text-gray-400 group-hover:text-blue-500 transition-colors duration-300">
                        ➕
                      </div>
                    )}
                  </div>
                  
                  {/* Progress Bar */}
                  {showResults && (
                    <div className="mt-3">
                      <div className="bg-gray-200 rounded-full h-3 overflow-hidden">
                        <div 
                          className={`bg-gradient-to-r ${option.color} h-3 rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${barWidth}%` }}
                        />
                      </div>
                    </div>
                  )}
                </button>
              </div>
            )
          })}
        </div>
        
        {/* Results Summary */}
        {showResults && (
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 mb-6 border border-blue-200/50">
            <h5 className="font-bold text-lg mb-3 text-gray-800">Poll Summary</h5>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{totalVotes}</div>
                <div className="text-gray-600">Total Responses</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">{currentPollData.options.length}</div>
                <div className="text-gray-600">Options</div>
              </div>
            </div>
          </div>
        )}
        
        {/* Action Buttons */}
        <div className="flex space-x-3">
          {!showResults && totalVotes > 0 && (
            <button
              onClick={showPollResults}
              className="flex-1 btn-primary py-3"
            >
              📊 Show Results
            </button>
          )}
          
          {showResults && (
            <button
              onClick={resetPoll}
              className="flex-1 btn-secondary py-3"
            >
              🔄 Reset Poll
            </button>
          )}
          
          <button
            onClick={() => setCurrentPoll(null)}
            className="flex-1 btn-accent py-3"
          >
            {showResults ? '✅ Done' : '❌ Cancel'}
          </button>
        </div>

        {/* Instructions */}
        {!showResults && (
          <div className="mt-4 text-center">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 border border-blue-200">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span>Click options to vote • {totalVotes} responses so far</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default AudienceEngagement
