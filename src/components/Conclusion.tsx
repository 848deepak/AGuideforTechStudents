'use client'

import React from 'react'

const Conclusion = () => {
  const keyTakeaways = [
    {
      icon: '🌐',
      title: 'Diverse Opportunities',
      description: 'From web development to AI, each tech domain offers unique challenges and career paths'
    },
    {
      icon: '🤖',
      title: 'AI Revolution',
      description: 'Understanding AI/ML fundamentals opens doors to the most transformative field of our time'
    },
    {
      icon: '🛠️',
      title: 'Practical Skills',
      description: 'Start with beginner projects and build foundational skills in your area of interest'
    },
    {
      icon: '🚀',
      title: 'Future Ready',
      description: 'Technology is not abstract—it\'s a tangible force shaping everyday experiences'
    }
  ]

  const nextSteps = [
    'Explore the domains that spark your curiosity',
    'Start with beginner-friendly projects',
    'Join communities and find mentors',
    'Build a portfolio showcasing your skills',
    'Stay curious and keep learning'
  ]

  return (
    <section id="conclusion" className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Thank You for an
            </span>
            <br />
            <span className="text-white">Amazing Workshop!</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            I hope this session has given you clarity, inspiration, and actionable next steps 
            for your technology journey. Remember, every expert was once a beginner!
          </p>
        </div>

        {/* Key Takeaways */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-white">
            Key Takeaways from Today&apos;s Journey
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyTakeaways.map((takeaway, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 card-hover"
              >
                <div className="text-4xl mb-4">{takeaway.icon}</div>
                <h4 className="text-xl font-bold mb-3 text-white">{takeaway.title}</h4>
                <p className="text-gray-300 text-sm leading-relaxed">{takeaway.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* AI/ML Summary */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-8 border border-purple-500/30">
            <h3 className="text-2xl font-bold mb-6 text-center">
              🧠 AI & Machine Learning: The Heart of Modern Innovation
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="space-y-3">
                <div className="text-3xl">🎯</div>
                <h4 className="font-semibold">AI Types</h4>
                <p className="text-sm text-gray-300">From Narrow AI (today) to theoretical Super AI</p>
              </div>
              <div className="space-y-3">
                <div className="text-3xl">📊</div>
                <h4 className="font-semibold">ML Learning</h4>
                <p className="text-sm text-gray-300">Supervised, Unsupervised, and Reinforcement approaches</p>
              </div>
              <div className="space-y-3">
                <div className="text-3xl">⚙️</div>
                <h4 className="font-semibold">ML Workflow</h4>
                <p className="text-sm text-gray-300">7-step process from problem to deployment</p>
              </div>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-3xl font-bold text-center mb-8 text-white">
              Your Next Steps in Technology
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-6 text-blue-400">Action Plan</h4>
                <div className="space-y-4">
                  {nextSteps.map((step, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        {index + 1}
                      </div>
                      <p className="text-gray-300">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-6 text-green-400">Remember</h4>
                <div className="space-y-4">
                  <div className="bg-green-500/20 p-4 rounded-lg border border-green-500/30">
                    <p className="text-sm text-gray-300">
                      <strong className="text-green-400">Start Small:</strong> Every expert was once a beginner. 
                      Begin with simple projects and gradually tackle more complex challenges.
                    </p>
                  </div>
                  <div className="bg-blue-500/20 p-4 rounded-lg border border-blue-500/30">
                    <p className="text-sm text-gray-300">
                      <strong className="text-blue-400">Stay Curious:</strong> Technology evolves rapidly. 
                      Cultivate a mindset of continuous learning and adaptation.
                    </p>
                  </div>
                  <div className="bg-purple-500/20 p-4 rounded-lg border border-purple-500/30">
                    <p className="text-sm text-gray-300">
                      <strong className="text-purple-400">Build Community:</strong> Connect with fellow learners, 
                      join tech communities, and don&apos;t be afraid to ask questions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final Message */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-2xl p-8 border border-yellow-400/30 mb-8">
            <h3 className="text-2xl font-bold mb-4 text-yellow-400">
              🌟 Keep the Momentum Going!
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto mb-6">
              You now have a roadmap to navigate the exciting world of technology. 
              The journey starts with curiosity and grows with consistent learning.
            </p>
            
            <div className="bg-white/10 rounded-lg p-6 mb-6">
              <h4 className="text-xl font-semibold text-white mb-4">🤝 Let&apos;s Connect & Stay in Touch!</h4>
              
              {/* Presenter Connect Section */}
              <div className="bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-lg p-6 mb-6 border border-blue-500/20">
                <div className="flex items-center justify-between mb-4">
                  <h5 className="text-lg font-bold flex items-center text-white">
                    <span className="mr-2 text-xl">👨‍🏫</span>
                    Connect with Deepak Pandey
                  </h5>
                  <div className="flex space-x-3">
                    <a href="https://github.com/848deepak" target="_blank" rel="noopener noreferrer" 
                       className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-all duration-300 group">
                      <span className="text-lg group-hover:scale-110 transition-transform">🐙</span>
                    </a>
                    <a href="https://www.linkedin.com/in/848deepak/" target="_blank" rel="noopener noreferrer"
                       className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-all duration-300 group">
                      <span className="text-lg group-hover:scale-110 transition-transform">💼</span>
                    </a>
                    <a href="https://www.codeunia.com" target="_blank" rel="noopener noreferrer"
                       className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-all duration-300 group">
                      <span className="text-lg group-hover:scale-110 transition-transform">💻</span>
                    </a>
                    <a href="mailto:deepakpandey911494@gmail.com"
                       className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-all duration-300 group">
                      <span className="text-lg group-hover:scale-110 transition-transform">📧</span>
                    </a>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="bg-white/10 rounded-lg p-3">
                    <h6 className="font-semibold mb-2 text-blue-300">🎓 About Me</h6>
                    <p className="text-gray-300">B.E. Computer Science Engineering</p>
                    <p className="text-gray-300">Chandigarh University (2023-2027)</p>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-3">
                    <h6 className="font-semibold mb-2 text-purple-300">🚀 Leadership</h6>
                    <p className="text-gray-300">Founder & Community Head: Codeunia</p>
                    <p className="text-gray-300">Campus Ambassador: GeeksforGeeks</p>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-3">
                    <h6 className="font-semibold mb-2 text-green-300">💡 Focus Areas</h6>
                    <p className="text-gray-300">Full-Stack Development</p>
                    <p className="text-gray-300">AI/ML & IoT Solutions</p>
                  </div>
                </div>
                
                <div className="mt-4 text-center">
                  <p className="text-blue-200 text-sm">
                    Feel free to connect with me for mentorship, collaboration, or just tech discussions! 
                    I&apos;m always excited to help fellow tech enthusiasts on their journey.
                  </p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div>
                  <h5 className="font-semibold text-blue-400 mb-2">❓ Questions & Follow-up:</h5>
                  <p className="text-sm text-gray-300">Have questions about your tech journey? Want to discuss career paths or project ideas? I&apos;m here to help!</p>
                </div>
                <div>
                  <h5 className="font-semibold text-green-400 mb-2">📚 Workshop Resources:</h5>
                  <p className="text-sm text-gray-300">This presentation and additional learning resources will be shared. Check out Codeunia for more tech content!</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <p className="text-2xl font-semibold text-white">
              Questions & Discussion Time! 🤝
            </p>
            <p className="text-gray-400">
              What aspects of technology excite you the most? Let&apos;s discuss your interests and next steps!
            </p>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="bg-blue-500/20 p-4 rounded-lg border border-blue-500/30">
                <div className="text-2xl mb-2">💬</div>
                <div className="text-sm font-medium">Ask Questions</div>
              </div>
              <div className="bg-purple-500/20 p-4 rounded-lg border border-purple-500/30">
                <div className="text-2xl mb-2">🤝</div>
                <div className="text-sm font-medium">Network & Connect</div>
              </div>
              <div className="bg-green-500/20 p-4 rounded-lg border border-green-500/30">
                <div className="text-2xl mb-2">🚀</div>
                <div className="text-sm font-medium">Plan Your Next Step</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Conclusion
