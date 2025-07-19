'use client'

import React, { useState, useEffect } from 'react'

interface SpeakerNotesProps {
  currentSection: string
}

const SpeakerNotes: React.FC<SpeakerNotesProps> = ({ currentSection }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const speakerNotes = {
    'hero': {
      duration: '5 min',
      keyPoints: [
        'Welcome everyone and introduce yourself',
        'Set expectations for interactive session',
        'Mention the workshop will be practical and engaging',
        'Ask about their current tech interests'
      ],
      transitions: 'Ask: "How many of you are curious about specific tech fields like web dev or AI?"'
    },
    'tech-domains': {
      duration: '20 min',
      keyPoints: [
        'Emphasize the diversity of opportunities',
        'Use real-world examples they recognize',
        'Encourage questions about specific domains',
        'Highlight beginner-friendly entry points'
      ],
      transitions: 'Transition: "Now let\'s dive deeper into the most exciting field - AI and ML"'
    },
    'ai-deep-dive': {
      duration: '20 min',
      keyPoints: [
        'Start with familiar AI examples (Netflix, ChatGPT)',
        'Use analogies for technical concepts',
        'Interactive: Ask what AI they use daily',
        'Emphasize practical applications'
      ],
      transitions: 'Ask: "What questions do you have about starting in tech?"'
    },
    'conclusion': {
      duration: '5 min',
      keyPoints: [
        'Summarize key takeaways',
        'Provide actionable next steps',
        'Open floor for questions',
        'Share contact info for follow-up'
      ],
      transitions: 'Open for discussion and networking'
    }
  }

  const currentNotes = speakerNotes[currentSection as keyof typeof speakerNotes]

  if (!isVisible || !currentNotes) return null

  return (
    <div className="fixed bottom-4 right-4 bg-black/90 text-white p-4 rounded-lg max-w-sm z-50 text-sm">
      <div className="flex justify-between items-center mb-2">
        <h4 className="font-bold text-green-400">Speaker Notes</h4>
        <button 
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-blue-400">Section Duration:</span>
          <span>{currentNotes.duration}</span>
        </div>
        
        <div className="text-yellow-400">Current Time:</div>
        <div className="text-xs">{currentTime.toLocaleTimeString()}</div>
        
        <div className="text-yellow-400">Key Points:</div>
        <ul className="text-xs space-y-1">
          {currentNotes.keyPoints.map((point, index) => (
            <li key={index}>• {point}</li>
          ))}
        </ul>
        
        <div className="text-green-400">Transition:</div>
        <div className="text-xs italic">{currentNotes.transitions}</div>
      </div>
    </div>
  )
}

// Floating action button for speaker mode
export const SpeakerModeToggle = () => {
  const [isActive, setIsActive] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsActive(!isActive)}
        className={`fixed bottom-4 left-4 p-3 rounded-full shadow-lg z-40 transition-all duration-300 ${
          isActive 
            ? 'bg-green-600 text-white' 
            : 'bg-white text-gray-700 hover:bg-gray-100'
        }`}
      >
        🎤
      </button>
      
      {isActive && (
        <div className="fixed bottom-16 left-4 bg-white rounded-lg shadow-xl p-4 z-40 max-w-xs">
          <h4 className="font-bold mb-2">Workshop Controls</h4>
          <div className="space-y-2 text-sm">
            <button className="w-full text-left p-2 hover:bg-gray-100 rounded">
              📊 Show Speaker Notes
            </button>
            <button className="w-full text-left p-2 hover:bg-gray-100 rounded">
              ⏱️ Timer Controls
            </button>
            <button className="w-full text-left p-2 hover:bg-gray-100 rounded">
              🎯 Jump to Section
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default SpeakerNotes
