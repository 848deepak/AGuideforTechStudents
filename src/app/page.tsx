'use client'

import React, { useState, useEffect } from 'react'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import TechDomains from '@/components/TechDomains'
import AIMLSection from '@/components/AIMLSection'
import Conclusion from '@/components/Conclusion'
import { SpeakerModeToggle } from '@/components/SpeakerNotes'
import WorkshopTimer from '@/components/WorkshopTimer'
import AudienceEngagement from '@/components/AudienceEngagement'

export default function Home() {
  const [currentSection, setCurrentSection] = useState('hero')
  const [keyboardShortcuts, setKeyboardShortcuts] = useState(false)
  const [showEngagement, setShowEngagement] = useState(false)

  // Keyboard navigation for presentation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault()
        scrollToNextSection()
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault()
        scrollToPrevSection()
      } else if (e.key === 'Home') {
        e.preventDefault()
        document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })
      } else if (e.key === 'End') {
        e.preventDefault()
        document.getElementById('conclusion')?.scrollIntoView({ behavior: 'smooth' })
      } else if (e.key === 'F1') {
        e.preventDefault()
        setKeyboardShortcuts(!keyboardShortcuts)
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [keyboardShortcuts])

  const sections = ['hero', 'tech-domains', 'ai-deep-dive', 'conclusion']
  
  const scrollToNextSection = () => {
    const currentIndex = sections.indexOf(currentSection)
    const nextIndex = Math.min(currentIndex + 1, sections.length - 1)
    document.getElementById(sections[nextIndex])?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToPrevSection = () => {
    const currentIndex = sections.indexOf(currentSection)
    const prevIndex = Math.max(currentIndex - 1, 0)
    document.getElementById(sections[prevIndex])?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="relative">
        <Hero />
        <TechDomains />
        <AIMLSection />
        <Conclusion />
      </main>
      
      {/* Workshop Speaker Controls */}
      <SpeakerModeToggle />
      <WorkshopTimer />
      
      {/* Audience Engagement */}
      {showEngagement && <AudienceEngagement />}
      
      {/* Keyboard Shortcuts Help */}
      {keyboardShortcuts && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md">
            <h3 className="text-lg font-bold mb-4">Presentation Shortcuts</h3>
            <div className="space-y-2 text-sm">
              <div><kbd className="bg-gray-200 px-2 py-1 rounded">Space</kbd> / <kbd className="bg-gray-200 px-2 py-1 rounded">↓</kbd> - Next section</div>
              <div><kbd className="bg-gray-200 px-2 py-1 rounded">↑</kbd> - Previous section</div>
              <div><kbd className="bg-gray-200 px-2 py-1 rounded">Home</kbd> - Go to start</div>
              <div><kbd className="bg-gray-200 px-2 py-1 rounded">End</kbd> - Go to conclusion</div>
              <div><kbd className="bg-gray-200 px-2 py-1 rounded">F1</kbd> - Toggle this help</div>
            </div>
            <button 
              onClick={() => setKeyboardShortcuts(false)}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Got it!
            </button>
          </div>
        </div>
      )}
      
      {/* Presentation Progress Indicator */}
      <div className="fixed bottom-0 left-0 right-0 h-1 bg-gray-200 z-30">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"
          style={{ 
            width: `${((sections.indexOf(currentSection) + 1) / sections.length) * 100}%` 
          }}
        />
      </div>
    </div>
  )
}
