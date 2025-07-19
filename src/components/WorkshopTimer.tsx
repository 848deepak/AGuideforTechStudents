'use client'

import React, { useState, useEffect } from 'react'

const WorkshopTimer = () => {
  const [startTime] = useState(new Date())
  const [currentTime, setCurrentTime] = useState(new Date())
  const [isVisible, setIsVisible] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [pausedTime, setPausedTime] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isPaused) {
        setCurrentTime(new Date())
      }
    }, 1000)
    return () => clearInterval(timer)
  }, [isPaused])

  const elapsed = Math.floor((currentTime.getTime() - startTime.getTime() - pausedTime) / 1000 / 60)
  const remaining = Math.max(50 - elapsed, 0) // 50-minute workshop
  const progress = (elapsed / 50) * 100

  const getStatusColor = () => {
    if (remaining > 30) return 'text-green-500'
    if (remaining > 10) return 'text-yellow-500'
    return 'text-red-500'
  }

  const getStatusEmoji = () => {
    if (remaining > 30) return '🟢'
    if (remaining > 10) return '🟡'
    return '🔴'
  }

  const formatTime = (minutes: number) => {
    const hrs = Math.floor(minutes / 60)
    const mins = minutes % 60
    return hrs > 0 ? `${hrs}h ${mins}m` : `${mins}m`
  }

  const handlePause = () => {
    if (isPaused) {
      setIsPaused(false)
    } else {
      setIsPaused(true)
      setPausedTime(pausedTime + (new Date().getTime() - currentTime.getTime()))
    }
  }

  const handleReset = () => {
    setIsPaused(false)
    setPausedTime(0)
    setCurrentTime(new Date())
  }

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed top-20 left-4 glass rounded-2xl px-4 py-3 shadow-xl text-sm font-semibold z-40 hover:scale-105 transition-all duration-300 group"
      >
        <div className="flex items-center space-x-2">
          <span className="text-lg group-hover:animate-pulse">⏱️</span>
          <span>Workshop Timer</span>
        </div>
      </button>
    )
  }

  return (
    <div className="fixed top-20 left-4 glass rounded-2xl p-6 shadow-2xl z-40 min-w-[280px] animate-fade-in">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h4 className="font-bold text-gray-800 text-lg flex items-center">
          <span className="mr-2 text-xl">⏱️</span>
          Workshop Timer
        </h4>
        <button 
          onClick={() => setIsVisible(false)}
          className="text-gray-500 hover:text-gray-700 hover:scale-110 transition-all duration-300 text-xl"
        >
          ×
        </button>
      </div>
      
      {/* Timer Display */}
      <div className="space-y-4">
        {/* Current Time */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 border border-blue-200/50">
          <div className="flex justify-between items-center">
            <span className="text-gray-600 font-medium">Current Time:</span>
            <span className="font-mono font-bold text-blue-600">{currentTime.toLocaleTimeString()}</span>
          </div>
        </div>
        
        {/* Elapsed Time */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200/50">
          <div className="flex justify-between items-center">
            <span className="text-gray-600 font-medium">Elapsed:</span>
            <span className="font-mono font-bold text-green-600">{formatTime(elapsed)}</span>
          </div>
        </div>
        
        {/* Remaining Time */}
        <div className={`bg-gradient-to-r ${remaining > 30 ? 'from-green-50 to-emerald-50 border-green-200/50' : remaining > 10 ? 'from-yellow-50 to-orange-50 border-yellow-200/50' : 'from-red-50 to-pink-50 border-red-200/50'} rounded-xl p-4 border`}>
          <div className="flex justify-between items-center">
            <span className="text-gray-600 font-medium">Remaining:</span>
            <div className="flex items-center space-x-2">
              <span className="text-lg">{getStatusEmoji()}</span>
              <span className={`font-mono font-bold ${getStatusColor()}`}>
                {formatTime(remaining)}
              </span>
            </div>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Progress</span>
            <span className="font-semibold text-gray-700">{Math.round(progress)}%</span>
          </div>
          <div className="bg-gray-200 rounded-full h-3 overflow-hidden">
            <div 
              className={`h-full rounded-full transition-all duration-1000 ease-out ${
                progress < 30 ? 'bg-gradient-to-r from-green-500 to-emerald-500' :
                progress < 70 ? 'bg-gradient-to-r from-yellow-500 to-orange-500' :
                'bg-gradient-to-r from-red-500 to-pink-500'
              }`}
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
        </div>

        {/* Workshop Phases */}
        <div className="space-y-2">
          <div className="text-sm font-semibold text-gray-700 mb-2">Workshop Phases:</div>
          <div className="space-y-1">
            <div className={`flex justify-between text-xs ${elapsed >= 0 && elapsed < 5 ? 'text-blue-600 font-semibold' : 'text-gray-500'}`}>
              <span>Introduction (0-5m)</span>
              <span>{elapsed >= 0 && elapsed < 5 ? '🔄 Active' : elapsed >= 5 ? '✅ Complete' : '⏳ Pending'}</span>
            </div>
            <div className={`flex justify-between text-xs ${elapsed >= 5 && elapsed < 25 ? 'text-blue-600 font-semibold' : 'text-gray-500'}`}>
              <span>Tech Overview (5-25m)</span>
              <span>{elapsed >= 5 && elapsed < 25 ? '🔄 Active' : elapsed >= 25 ? '✅ Complete' : '⏳ Pending'}</span>
            </div>
            <div className={`flex justify-between text-xs ${elapsed >= 25 && elapsed < 45 ? 'text-blue-600 font-semibold' : 'text-gray-500'}`}>
              <span>AI Deep Dive (25-45m)</span>
              <span>{elapsed >= 25 && elapsed < 45 ? '🔄 Active' : elapsed >= 45 ? '✅ Complete' : '⏳ Pending'}</span>
            </div>
            <div className={`flex justify-between text-xs ${elapsed >= 45 ? 'text-blue-600 font-semibold' : 'text-gray-500'}`}>
              <span>Conclusion (45-50m)</span>
              <span>{elapsed >= 45 ? '🔄 Active' : '⏳ Pending'}</span>
            </div>
          </div>
        </div>
        
        {/* Control Buttons */}
        <div className="flex space-x-2 pt-2">
          <button
            onClick={handlePause}
            className={`flex-1 px-3 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
              isPaused 
                ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:shadow-lg' 
                : 'bg-gradient-to-r from-yellow-600 to-orange-600 text-white hover:shadow-lg'
            }`}
          >
            {isPaused ? '▶️ Resume' : '⏸️ Pause'}
          </button>
          <button
            onClick={handleReset}
            className="flex-1 px-3 py-2 rounded-xl text-sm font-medium bg-gradient-to-r from-gray-600 to-slate-600 text-white hover:shadow-lg transition-all duration-300"
          >
            🔄 Reset
          </button>
        </div>

        {/* Status Indicator */}
        <div className="text-center">
          <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-medium ${
            isPaused 
              ? 'bg-yellow-100 text-yellow-800 border border-yellow-200' 
              : 'bg-green-100 text-green-800 border border-green-200'
          }`}>
            <div className={`w-2 h-2 rounded-full ${isPaused ? 'bg-yellow-500' : 'bg-green-500'} animate-pulse`}></div>
            <span>{isPaused ? 'Timer Paused' : 'Timer Running'}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkshopTimer
