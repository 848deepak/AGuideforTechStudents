'use client'

import React, { useState, useEffect } from 'react'

const WorkshopTimer = () => {
  const [startTime] = useState(new Date())
  const [currentTime, setCurrentTime] = useState(new Date())
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const elapsed = Math.floor((currentTime.getTime() - startTime.getTime()) / 1000 / 60)
  const remaining = Math.max(50 - elapsed, 0) // 50-minute workshop

  const getStatusColor = () => {
    if (remaining > 30) return 'text-green-500'
    if (remaining > 10) return 'text-yellow-500'
    return 'text-red-500'
  }

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed top-20 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg text-sm z-40"
      >
        ⏱️ Timer
      </button>
    )
  }

  return (
    <div className="fixed top-20 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg z-40 min-w-[200px]">
      <div className="flex justify-between items-center mb-3">
        <h4 className="font-bold text-gray-800">Workshop Timer</h4>
        <button 
          onClick={() => setIsVisible(false)}
          className="text-gray-500 hover:text-gray-700"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span>Started:</span>
          <span>{startTime.toLocaleTimeString()}</span>
        </div>
        
        <div className="flex justify-between">
          <span>Elapsed:</span>
          <span className="font-mono">{elapsed} min</span>
        </div>
        
        <div className="flex justify-between">
          <span>Remaining:</span>
          <span className={`font-mono font-bold ${getStatusColor()}`}>
            {remaining} min
          </span>
        </div>
        
        <div className="mt-3 bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-500 h-2 rounded-full transition-all duration-1000"
            style={{ width: `${(elapsed / 50) * 100}%` }}
          />
        </div>
        
        <div className="mt-3 text-xs text-gray-600">
          Workshop Progress
        </div>
      </div>
    </div>
  )
}

export default WorkshopTimer
