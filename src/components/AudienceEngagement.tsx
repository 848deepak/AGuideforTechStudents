'use client'

import React, { useState } from 'react'

const AudienceEngagement = () => {
  const [currentPoll, setCurrentPoll] = useState<string | null>(null)
  const [pollResults, setPollResults] = useState<{[key: string]: number}>({})

  const polls = {
    'tech-interest': {
      question: "Which tech domain interests you most?",
      options: ['Web Development', 'AI/ML', 'Cybersecurity', 'Mobile Apps', 'Other']
    },
    'experience-level': {
      question: "What's your current tech experience?",
      options: ['Complete Beginner', 'Some Coding', 'CS Student', 'Career Changer', 'Just Curious']
    },
    'ai-familiarity': {
      question: "How familiar are you with AI/ML?",
      options: ['Never heard of it', 'Use AI tools', 'Understand basics', 'Some experience', 'Very familiar']
    }
  }

  const startPoll = (pollId: string) => {
    setCurrentPoll(pollId)
    setPollResults({})
  }

  const vote = (option: string) => {
    setPollResults(prev => ({
      ...prev,
      [option]: (prev[option] || 0) + 1
    }))
  }

  if (!currentPoll) {
    return (
      <div className="fixed top-20 right-4 bg-white rounded-lg shadow-lg p-4 max-w-xs z-40">
        <h4 className="font-bold mb-3">🎯 Audience Polls</h4>
        <div className="space-y-2">
          {Object.entries(polls).map(([id, poll]) => (
            <button
              key={id}
              onClick={() => startPoll(id)}
              className="w-full text-left p-2 hover:bg-blue-50 rounded text-sm"
            >
              {poll.question}
            </button>
          ))}
        </div>
      </div>
    )
  }

  const currentPollData = polls[currentPoll as keyof typeof polls]
  const totalVotes = Object.values(pollResults).reduce((sum, votes) => sum + votes, 0)

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-lg w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold">📊 Live Poll</h3>
          <button 
            onClick={() => setCurrentPoll(null)}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        
        <h4 className="text-md font-semibold mb-4">{currentPollData.question}</h4>
        
        <div className="space-y-3">
          {currentPollData.options.map((option) => {
            const votes = pollResults[option] || 0
            const percentage = totalVotes > 0 ? (votes / totalVotes) * 100 : 0
            
            return (
              <div key={option}>
                <button
                  onClick={() => vote(option)}
                  className="w-full text-left p-3 hover:bg-blue-50 rounded border border-gray-200 transition-colors"
                >
                  <div className="flex justify-between items-center">
                    <span>{option}</span>
                    <span className="text-sm text-gray-500">{votes} votes</span>
                  </div>
                  <div className="mt-2 bg-gray-100 rounded-full h-2">
                    <div 
                      className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </button>
              </div>
            )
          })}
        </div>
        
        <div className="mt-4 text-center text-sm text-gray-600">
          Total responses: {totalVotes}
        </div>
      </div>
    </div>
  )
}

export default AudienceEngagement
