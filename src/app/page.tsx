'use client'

import React, { useState, useEffect } from 'react'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import TechDomains from '@/components/TechDomains'
import AIMLSection from '@/components/AIMLSection'
import Conclusion from '@/components/Conclusion'
import { SpeakerModeToggle } from '@/components/SpeakerNotes'
import AudienceEngagement from '@/components/AudienceEngagement'
import InteractiveWorkshop from '@/components/InteractiveWorkshop'
import ClientOnly from '@/components/ClientOnly'

// Force dynamic rendering to avoid SSR issues
export const dynamic = 'force-dynamic'

export default function Home() {
  const [currentSection, setCurrentSection] = useState('hero')
  const [keyboardShortcuts, setKeyboardShortcuts] = useState(false)
  const [showEngagement, setShowEngagement] = useState(false)
  const [showInteractiveWorkshop, setShowInteractiveWorkshop] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  // Keyboard navigation for presentation
  useEffect(() => {
    if (typeof window === 'undefined') return

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
      } else if (e.key === 'e' || e.key === 'E') {
        e.preventDefault()
        setShowEngagement(!showEngagement)
      } else if (e.key === 'i' || e.key === 'I') {
        e.preventDefault()
        setShowInteractiveWorkshop(!showInteractiveWorkshop)
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [keyboardShortcuts, showEngagement, showInteractiveWorkshop])

  // Scroll progress tracking
  useEffect(() => {
    if (typeof window === 'undefined') return

    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = (scrollTop / docHeight) * 100
      setScrollProgress(scrollPercent)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const sections = ['hero', 'tech-domains', 'ai-deep-dive', 'conclusion']
  
  const scrollToNextSection = () => {
    if (typeof window === 'undefined') return
    const currentIndex = sections.indexOf(currentSection)
    const nextIndex = Math.min(currentIndex + 1, sections.length - 1)
    document.getElementById(sections[nextIndex])?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToPrevSection = () => {
    if (typeof window === 'undefined') return
    const currentIndex = sections.indexOf(currentSection)
    const prevIndex = Math.max(currentIndex - 1, 0)
    document.getElementById(sections[prevIndex])?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      {/* Add top padding to prevent header overlap */}
      <main className="relative pt-20">
        <Hero />
        <TechDomains />
        <AIMLSection />
        <Conclusion />
      </main>
      
      {/* Workshop Speaker Controls */}
      <SpeakerModeToggle />
      
      {/* Audience Engagement */}
      <ClientOnly>
        {showEngagement && <AudienceEngagement />}
      </ClientOnly>
      
      {/* Interactive Workshop */}
      <ClientOnly>
        {showInteractiveWorkshop && <InteractiveWorkshop />}
      </ClientOnly>
      
      {/* Enhanced Keyboard Shortcuts Help */}
      {keyboardShortcuts && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="glass rounded-3xl p-8 max-w-2xl w-full mx-4 animate-fade-in">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold flex items-center">
                <span className="mr-3 text-3xl">⌨️</span>
                Presentation Shortcuts
              </h3>
              <button 
                onClick={() => setKeyboardShortcuts(false)}
                className="text-gray-500 hover:text-gray-700 hover:scale-110 transition-all duration-300 text-2xl"
              >
                ✕
              </button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Navigation</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                    <span className="text-gray-700">Next Section</span>
                    <div className="flex space-x-2">
                      <kbd className="bg-white px-3 py-1 rounded-lg shadow-sm text-sm font-mono">Space</kbd>
                      <kbd className="bg-white px-3 py-1 rounded-lg shadow-sm text-sm font-mono">↓</kbd>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
                    <span className="text-gray-700">Previous Section</span>
                    <kbd className="bg-white px-3 py-1 rounded-lg shadow-sm text-sm font-mono">↑</kbd>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
                    <span className="text-gray-700">Go to Start</span>
                    <kbd className="bg-white px-3 py-1 rounded-lg shadow-sm text-sm font-mono">Home</kbd>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl">
                    <span className="text-gray-700">Go to End</span>
                    <kbd className="bg-white px-3 py-1 rounded-lg shadow-sm text-sm font-mono">End</kbd>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Interactive Features</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl">
                    <span className="text-gray-700">Toggle Help</span>
                    <kbd className="bg-white px-3 py-1 rounded-lg shadow-sm text-sm font-mono">F1</kbd>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl">
                    <span className="text-gray-700">Audience Polls</span>
                    <kbd className="bg-white px-3 py-1 rounded-lg shadow-sm text-sm font-mono">E</kbd>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl">
                    <span className="text-gray-700">Interactive Workshop</span>
                    <kbd className="bg-white px-3 py-1 rounded-lg shadow-sm text-sm font-mono">I</kbd>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border border-yellow-200/50">
                  <h5 className="font-semibold text-gray-800 mb-2">💡 Pro Tips</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Use Space bar for smooth progression</li>
                    <li>• Press E to engage audience with polls</li>
                                          <li>• Press I for interactive coding &amp; quizzes</li>
                    <li>• Presenter mode shows speaker notes</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <button 
                onClick={() => setKeyboardShortcuts(false)}
                className="btn-primary px-8 py-3"
              >
                Got it! Let&apos;s continue
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Enhanced Presentation Progress Indicator */}
      <ClientOnly>
        <div className="fixed bottom-0 left-0 right-0 h-2 bg-gray-200/50 backdrop-blur-sm z-30">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 transition-all duration-500 ease-out shadow-lg"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </ClientOnly>

      {/* Floating Action Buttons */}
      <ClientOnly>
        <div className="fixed bottom-6 right-6 flex flex-col space-y-3 z-40">
          <button
            onClick={() => setShowInteractiveWorkshop(!showInteractiveWorkshop)}
            className={`p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 ${
              showInteractiveWorkshop 
                ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white' 
                : 'glass text-gray-700 hover:text-purple-600'
            }`}
            title="Interactive Workshop"
          >
            <span className="text-2xl">🚀</span>
          </button>
          
          <button
            onClick={() => setShowEngagement(!showEngagement)}
            className={`p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 ${
              showEngagement 
                ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white' 
                : 'glass text-gray-700 hover:text-blue-600'
            }`}
            title="Audience Engagement"
          >
            <span className="text-2xl">🎯</span>
          </button>
          
          <button
            onClick={() => setKeyboardShortcuts(true)}
            className="p-4 rounded-full glass shadow-2xl transition-all duration-300 hover:scale-110 text-gray-700 hover:text-blue-600"
            title="Keyboard Shortcuts"
          >
            <span className="text-2xl">⌨️</span>
          </button>
        </div>
      </ClientOnly>
    </div>
  )
}
