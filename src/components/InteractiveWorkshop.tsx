'use client'

import React, { useState, useEffect } from 'react'

interface QuizQuestion {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

interface CodingExercise {
  id: number
  title: string
  description: string
  starterCode: string
  solution: string
  hints: string[]
}

const InteractiveWorkshop: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'quiz' | 'coding' | 'collab' | 'demo'>('quiz')
  const [currentQuiz, setCurrentQuiz] = useState(0)
  const [quizAnswers, setQuizAnswers] = useState<number[]>([])
  const [showQuizResults, setShowQuizResults] = useState(false)
  const [currentExercise, setCurrentExercise] = useState(0)
  const [userCode, setUserCode] = useState('')
  const [showSolution, setShowSolution] = useState(false)
  const [showHint, setShowHint] = useState(false)
  const [hintIndex, setHintIndex] = useState(0)
  const [participantCount, setParticipantCount] = useState(15)
  const [liveQuestions, setLiveQuestions] = useState<string[]>([])
  const [newQuestion, setNewQuestion] = useState('')

  const quizQuestions: QuizQuestion[] = [
    {
      id: 1,
      question: "What is the primary difference between AI and Machine Learning?",
      options: [
        "AI is a subset of ML",
        "ML is a subset of AI", 
        "They are completely different technologies",
        "AI only works with text, ML works with numbers"
      ],
      correctAnswer: 1,
      explanation: "Machine Learning is a subset of Artificial Intelligence. AI is the broader concept of machines performing tasks that typically require human intelligence, while ML specifically focuses on algorithms that learn from data."
    },
    {
      id: 2,
      question: "Which Python library is most commonly used for machine learning?",
      options: ["TensorFlow", "PyTorch", "scikit-learn", "Keras"],
      correctAnswer: 2,
      explanation: "scikit-learn is the most popular and beginner-friendly library for machine learning in Python. It provides simple and efficient tools for data mining and data analysis."
    },
    {
      id: 3,
      question: "What does 'overfitting' mean in machine learning?",
      options: [
        "The model performs too well on training data",
        "The model is too simple",
        "The model uses too much data",
        "The model is too fast"
      ],
      correctAnswer: 0,
      explanation: "Overfitting occurs when a model learns the training data too well, including noise and irrelevant patterns, making it perform poorly on new, unseen data."
    }
  ]

  const codingExercises: CodingExercise[] = [
    {
      id: 1,
      title: "Hello AI World",
      description: "Write a simple Python function that predicts if a number is even or odd.",
      starterCode: `def predict_even_odd(number):
    # Your code here
    # Hint: Use modulo operator (%)
    pass

# Test your function
print(predict_even_odd(4))  # Should print: Even
print(predict_even_odd(7))  # Should print: Odd`,
      solution: `def predict_even_odd(number):
    if number % 2 == 0:
        return "Even"
    else:
        return "Odd"

# Test your function
print(predict_even_odd(4))  # Should print: Even
print(predict_even_odd(7))  # Should print: Odd`,
      hints: [
        "Think about how to check if a number is even or odd mathematically",
        "Use the modulo operator (%) to find the remainder",
        "If remainder is 0, the number is even; otherwise, it's odd"
      ]
    },
    {
      id: 2,
      title: "Simple Linear Regression",
      description: "Create a basic linear regression model to predict house prices based on square footage.",
      starterCode: `import numpy as np
from sklearn.linear_model import LinearRegression

# Sample data: square footage and prices
X = np.array([[1000], [1500], [2000], [2500], [3000]])  # Square footage
y = np.array([200000, 300000, 400000, 500000, 600000])  # Prices

# Create and train the model
# Your code here

# Predict price for a 1800 sq ft house
prediction = # Your prediction code here
print("Predicted price: $" + str(prediction))`,
      solution: `import numpy as np
from sklearn.linear_model import LinearRegression

# Sample data: square footage and prices
X = np.array([[1000], [1500], [2000], [2500], [3000]])  # Square footage
y = np.array([200000, 300000, 400000, 500000, 600000])  # Prices

# Create and train the model
model = LinearRegression()
model.fit(X, y)

# Predict price for a 1800 sq ft house
prediction = model.predict([[1800]])[0]
print("Predicted price: $" + str(prediction))`,
      hints: [
        "Import LinearRegression from sklearn.linear_model",
        "Create a LinearRegression() instance",
        "Use model.fit(X, y) to train the model",
        "Use model.predict([[1800]]) to make predictions"
      ]
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setParticipantCount(prev => Math.max(15, prev + Math.floor(Math.random() * 3) - 1))
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const handleQuizAnswer = (answerIndex: number) => {
    const newAnswers = [...quizAnswers]
    newAnswers[currentQuiz] = answerIndex
    setQuizAnswers(newAnswers)
  }

  const calculateQuizScore = () => {
    let correct = 0
    quizAnswers.forEach((answer, index) => {
      if (answer === quizQuestions[index].correctAnswer) {
        correct++
      }
    })
    return Math.round((correct / quizQuestions.length) * 100)
  }

  const submitQuestion = () => {
    if (newQuestion.trim()) {
      setLiveQuestions(prev => [...prev, newQuestion])
      setNewQuestion('')
    }
  }

  const runCode = () => {
    alert('Code execution would happen here! In a real workshop, this would run your code safely.')
  }

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="glass rounded-3xl p-6 max-w-6xl w-full mx-4 animate-fade-in max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold flex items-center">
            <span className="mr-3 text-4xl">🚀</span>
            Interactive Workshop
          </h2>
          <div className="flex items-center space-x-4">
            <div className="glass rounded-xl p-3">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{participantCount}</div>
                <div className="text-xs text-gray-600">Participants</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-2 mb-6">
          {[
            { id: 'quiz', label: 'Interactive Quiz', icon: '🧠' },
            { id: 'coding', label: 'Live Coding', icon: '💻' },
            { id: 'demo', label: 'Live Demo', icon: '🎬' },
            { id: 'collab', label: 'Collaboration', icon: '👥' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 rounded-xl transition-all duration-300 flex items-center space-x-2 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'glass text-gray-700 hover:bg-white/20'
              }`}
            >
              <span>{tab.icon}</span>
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="space-y-6">
          {/* Interactive Quiz */}
          {activeTab === 'quiz' && (
            <div className="space-y-6">
              {!showQuizResults ? (
                <div className="glass rounded-2xl p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold">Question {currentQuiz + 1} of {quizQuestions.length}</h3>
                    <div className="text-sm text-gray-600">
                      {quizAnswers.filter(a => a !== undefined).length}/{quizQuestions.length} answered
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <p className="text-lg mb-4">{quizQuestions[currentQuiz].question}</p>
                    <div className="space-y-3">
                      {quizQuestions[currentQuiz].options.map((option, index) => (
                        <button
                          key={index}
                          onClick={() => handleQuizAnswer(index)}
                          className={`w-full p-4 rounded-xl text-left transition-all duration-300 ${
                            quizAnswers[currentQuiz] === index
                              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                              : 'glass hover:bg-white/20'
                          }`}
                        >
                          <span className="font-bold mr-3">{String.fromCharCode(65 + index)}.</span>
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <button
                      onClick={() => setCurrentQuiz(Math.max(0, currentQuiz - 1))}
                      disabled={currentQuiz === 0}
                      className="btn-secondary disabled:opacity-50"
                    >
                      ← Previous
                    </button>
                    <button
                      onClick={() => {
                        if (currentQuiz < quizQuestions.length - 1) {
                          setCurrentQuiz(currentQuiz + 1)
                        } else {
                          setShowQuizResults(true)
                        }
                      }}
                      className="btn-primary"
                    >
                      {currentQuiz < quizQuestions.length - 1 ? 'Next →' : 'See Results'}
                    </button>
                  </div>
                </div>
              ) : (
                <div className="glass rounded-2xl p-6">
                  <h3 className="text-2xl font-bold mb-4">Quiz Results</h3>
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-blue-600 mb-2">{calculateQuizScore()}%</div>
                    <div className="text-gray-600">Your Score</div>
                  </div>
                  
                  <div className="space-y-4">
                    {quizQuestions.map((question, index) => (
                      <div key={question.id} className="glass rounded-xl p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-semibold">Question {index + 1}</span>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            quizAnswers[index] === question.correctAnswer
                              ? 'bg-green-100 text-green-800'
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {quizAnswers[index] === question.correctAnswer ? '✓ Correct' : '✗ Incorrect'}
                          </span>
                        </div>
                        <p className="text-sm mb-2">{question.question}</p>
                        <p className="text-xs text-gray-600 bg-white/50 p-2 rounded-lg">
                          <strong>Explanation:</strong> {question.explanation}
                        </p>
                      </div>
                    ))}
                  </div>
                  
                  <button
                    onClick={() => {
                      setShowQuizResults(false)
                      setCurrentQuiz(0)
                      setQuizAnswers([])
                    }}
                    className="btn-primary mt-4"
                  >
                    Take Quiz Again
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Live Coding */}
          {activeTab === 'coding' && (
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="glass rounded-2xl p-4">
                  <h3 className="text-xl font-bold mb-2">{codingExercises[currentExercise].title}</h3>
                  <p className="text-gray-600 mb-4">{codingExercises[currentExercise].description}</p>
                </div>

                <div className="flex space-x-2">
                  <button
                    onClick={() => setShowHint(!showHint)}
                    className="btn-secondary"
                  >
                    💡 Hint {showHint && `(${hintIndex + 1}/${codingExercises[currentExercise].hints.length})`}
                  </button>
                  <button
                    onClick={() => setShowSolution(!showSolution)}
                    className="btn-secondary"
                  >
                    {showSolution ? 'Hide' : 'Show'} Solution
                  </button>
                  <button
                    onClick={runCode}
                    className="btn-primary"
                  >
                    ▶️ Run Code
                  </button>
                </div>

                {showHint && (
                  <div className="glass rounded-xl p-4">
                    <h4 className="font-semibold mb-2">Hint {hintIndex + 1}:</h4>
                    <p className="text-sm">{codingExercises[currentExercise].hints[hintIndex]}</p>
                    <div className="flex justify-between mt-3">
                      <button
                        onClick={() => setHintIndex(Math.max(0, hintIndex - 1))}
                        disabled={hintIndex === 0}
                        className="text-sm text-blue-600 disabled:opacity-50"
                      >
                        ← Previous Hint
                      </button>
                      <button
                        onClick={() => setHintIndex(Math.min(codingExercises[currentExercise].hints.length - 1, hintIndex + 1))}
                        disabled={hintIndex === codingExercises[currentExercise].hints.length - 1}
                        className="text-sm text-blue-600 disabled:opacity-50"
                      >
                        Next Hint →
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-4">
                <div className="glass rounded-2xl p-4">
                  <h4 className="font-semibold mb-3">Code Editor</h4>
                  <textarea
                    value={userCode || codingExercises[currentExercise].starterCode}
                    onChange={(e) => setUserCode(e.target.value)}
                    className="w-full h-64 p-4 bg-gray-900 text-green-400 font-mono text-sm rounded-xl resize-none"
                    placeholder="Write your code here..."
                  />
                </div>

                {showSolution && (
                  <div className="glass rounded-2xl p-4">
                    <h4 className="font-semibold mb-3">Solution</h4>
                    <pre className="bg-gray-900 text-green-400 p-4 rounded-xl overflow-x-auto text-sm">
                      {codingExercises[currentExercise].solution}
                    </pre>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Live Demo */}
          {activeTab === 'demo' && (
            <div className="glass rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4">Live AI/ML Demo</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="glass rounded-xl p-4">
                    <h4 className="font-semibold mb-3">Image Classification Demo</h4>
                    <div className="bg-gray-100 rounded-xl p-8 text-center">
                      <span className="text-4xl">📷</span>
                      <p className="text-sm text-gray-600 mt-2">Upload an image to classify</p>
                      <button className="btn-primary mt-3">Choose Image</button>
                    </div>
                  </div>

                  <div className="glass rounded-xl p-4">
                    <h4 className="font-semibold mb-3">Text Analysis Demo</h4>
                    <textarea
                      placeholder="Enter text to analyze sentiment..."
                      className="w-full p-3 rounded-xl border border-gray-300 resize-none"
                      rows={3}
                    />
                    <button className="btn-primary mt-3">Analyze Sentiment</button>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="glass rounded-xl p-4">
                    <h4 className="font-semibold mb-3">Real-time Predictions</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                        <span>House Price Prediction</span>
                        <span className="font-bold text-green-600">$450,000</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
                        <span>Spam Detection</span>
                        <span className="font-bold text-red-600">Not Spam</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
                        <span>Image Classification</span>
                        <span className="font-bold text-blue-600">Cat (95%)</span>
                      </div>
                    </div>
                  </div>

                  <div className="glass rounded-xl p-4">
                    <h4 className="font-semibold mb-3">Model Performance</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Accuracy</span>
                        <span className="font-bold text-green-600">94.2%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{width: '94.2%'}}></div>
                      </div>
                      <div className="flex justify-between">
                        <span>Precision</span>
                        <span className="font-bold text-blue-600">92.8%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{width: '92.8%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Collaboration */}
          {activeTab === 'collab' && (
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="glass rounded-2xl p-4">
                  <h4 className="font-semibold mb-3">Live Questions & Discussion</h4>
                  
                  <div className="space-y-3 mb-4">
                    {liveQuestions.map((question, index) => (
                      <div key={index} className="glass rounded-xl p-3">
                        <div className="flex items-start space-x-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                            {String.fromCharCode(65 + (index % 26))}
                          </div>
                          <div className="flex-1">
                            <p className="text-sm">{question}</p>
                            <div className="flex items-center space-x-4 mt-2">
                              <button className="text-xs text-blue-600 hover:text-blue-800">👍 Like</button>
                              <button className="text-xs text-green-600 hover:text-green-800">💬 Reply</button>
                              <span className="text-xs text-gray-500">2 min ago</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={newQuestion}
                      onChange={(e) => setNewQuestion(e.target.value)}
                      placeholder="Ask a question..."
                      className="flex-1 p-3 rounded-xl border border-gray-300"
                      onKeyPress={(e) => e.key === 'Enter' && submitQuestion()}
                    />
                    <button onClick={submitQuestion} className="btn-primary">
                      Send
                    </button>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="glass rounded-2xl p-4">
                  <h4 className="font-semibold mb-3">Group Activities</h4>
                  
                  <div className="space-y-3">
                    <div className="glass rounded-xl p-3 border-l-4 border-green-500">
                      <h5 className="font-semibold text-sm">Team Challenge #1</h5>
                      <p className="text-xs text-gray-600 mb-2">Build a simple chatbot using Python</p>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Active</span>
                        <span className="text-xs text-gray-500">5 teams participating</span>
                      </div>
                    </div>

                    <div className="glass rounded-xl p-3 border-l-4 border-blue-500">
                      <h5 className="font-semibold text-sm">Code Review Session</h5>
                      <p className="text-xs text-gray-600 mb-2">Review and improve each other&apos;s ML models</p>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Starting Soon</span>
                        <span className="text-xs text-gray-500">10 min</span>
                      </div>
                    </div>

                    <div className="glass rounded-xl p-3 border-l-4 border-purple-500">
                      <h5 className="font-semibold text-sm">Hackathon Prep</h5>
                      <p className="text-xs text-gray-600 mb-2">Form teams for the final project</p>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">Planning</span>
                        <span className="text-xs text-gray-500">3 teams formed</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="glass rounded-2xl p-4">
                  <h4 className="font-semibold mb-3">Workshop Resources</h4>
                  
                  <div className="space-y-2">
                    <a href="#" className="flex items-center space-x-2 p-2 rounded-lg hover:bg-white/20 transition-all duration-300">
                      <span className="text-lg">📚</span>
                      <span className="text-sm">Workshop Slides & Notes</span>
                    </a>
                    <a href="#" className="flex items-center space-x-2 p-2 rounded-lg hover:bg-white/20 transition-all duration-300">
                      <span className="text-lg">💻</span>
                      <span className="text-sm">Code Examples Repository</span>
                    </a>
                    <a href="#" className="flex items-center space-x-2 p-2 rounded-lg hover:bg-white/20 transition-all duration-300">
                      <span className="text-lg">🎥</span>
                      <span className="text-sm">Recording (Available Later)</span>
                    </a>
                    <a href="#" className="flex items-center space-x-2 p-2 rounded-lg hover:bg-white/20 transition-all duration-300">
                      <span className="text-lg">📝</span>
                      <span className="text-sm">Feedback Form</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default InteractiveWorkshop 