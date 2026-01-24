import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#FEFCFB' }}>
      {/* Hero Section */}
      <section className="spacing-section" style={{ backgroundColor: '#FEFCFB' }}>
        <div className="spacing-container">
          <div className="text-center max-w-4xl mx-auto">
            {/* Main Headline - Empathetic and human-centered */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-700 mb-6 leading-tight">
              Learning that adapts to{' '}
              <span className="text-primary-600">how you think</span>
            </h1>
            
            {/* Subheadline - Problem + Solution */}
            <p className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
              NeuroFlow AI is an accessibility-first learning platform designed 
              for neurodivergent students. We transform overwhelming content into 
              bite-sized, visual, and voice-friendly learning experiences.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/login"
                className="w-full sm:w-auto px-8 py-4 bg-primary-600 text-white rounded-xl font-semibold text-lg shadow-soft hover:bg-primary-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                aria-label="Get started with NeuroFlow AI"
              >
                Get Started
              </Link>
              <Link 
                href="#solutions"
                className="w-full sm:w-auto px-8 py-4 bg-white text-primary-600 border-2 border-primary-600 rounded-xl font-semibold text-lg shadow-soft hover:bg-primary-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                aria-label="Learn more about our solutions"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="spacing-section" id="problems" aria-labelledby="problems-heading" style={{ backgroundColor: '#FEFEFE' }}>
        <div className="spacing-container">
          <h2 
            id="problems-heading"
            className="text-3xl sm:text-4xl font-bold text-center text-gray-700 mb-12"
          >
            The Challenges We Address
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* ADHD Card */}
            <div className="p-8 rounded-2xl shadow-soft border border-gray-100 hover:shadow-soft-lg transition-shadow duration-200" style={{ backgroundColor: '#FEFEFE' }}>
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl" aria-hidden="true">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-700 mb-4">ADHD</h3>
              <p className="text-gray-600 leading-relaxed">
                Long videos and dense lectures make it difficult to maintain focus. 
                Students need content broken into manageable chunks with clear 
                visual structure.
              </p>
            </div>

            {/* Dyslexia Card */}
            <div className="p-8 rounded-2xl shadow-soft border border-gray-100 hover:shadow-soft-lg transition-shadow duration-200" style={{ backgroundColor: '#FEFEFE' }}>
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl" aria-hidden="true">📖</span>
              </div>
              <h3 className="text-xl font-bold text-gray-700 mb-4">Dyslexia</h3>
              <p className="text-gray-600 leading-relaxed">
                Text-heavy content can be overwhelming and difficult to process. 
                Students benefit from visual representations and alternative 
                learning formats.
              </p>
            </div>

            {/* Autism Card */}
            <div className="p-8 rounded-2xl shadow-soft border border-gray-100 hover:shadow-soft-lg transition-shadow duration-200" style={{ backgroundColor: '#FEFEFE' }}>
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl" aria-hidden="true">🌈</span>
              </div>
              <h3 className="text-xl font-bold text-gray-700 mb-4">Autism</h3>
              <p className="text-gray-600 leading-relaxed">
                Cluttered interfaces and overstimulating designs can cause 
                sensory overload. Students need calm, minimal, and predictable 
                learning environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section 
        className="spacing-section"
        style={{ backgroundColor: '#FEFCFB' }} 
        id="solutions"
        aria-labelledby="solutions-heading"
      >
        <div className="spacing-container">
          <h2 
            id="solutions-heading"
            className="text-3xl sm:text-4xl font-bold text-center text-gray-700 mb-12"
          >
            How NeuroFlow AI Helps
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Magic Switch Feature */}
            <div className="p-8 rounded-2xl shadow-soft border border-gray-100" style={{ backgroundColor: '#FEFEFE' }}>
              <div className="w-16 h-16 bg-accent-100 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl" aria-hidden="true">🔄</span>
              </div>
              <h3 className="text-xl font-bold text-gray-700 mb-4 text-center">
                Magic Switch
              </h3>
              <p className="text-gray-600 leading-relaxed text-center">
                Transform dense text into visual flowcharts and concept maps. 
                See the big picture before diving into details.
              </p>
            </div>

            {/* Bite-sized Tasks Feature */}
            <div className="p-8 rounded-2xl shadow-soft border border-gray-100" style={{ backgroundColor: '#FEFEFE' }}>
              <div className="w-16 h-16 bg-accent-100 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl" aria-hidden="true">⏱️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-700 mb-4 text-center">
                Bite-sized Tasks
              </h3>
              <p className="text-gray-600 leading-relaxed text-center">
                Break down complex topics into 10-minute focused steps. 
                Maintain momentum without feeling overwhelmed.
              </p>
            </div>

            {/* Voice-based Learning Feature */}
            <div className="p-8 rounded-2xl shadow-soft border border-gray-100" style={{ backgroundColor: '#FEFEFE' }}>
              <div className="w-16 h-16 bg-accent-100 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl" aria-hidden="true">🎤</span>
              </div>
              <h3 className="text-xl font-bold text-gray-700 mb-4 text-center">
                Voice-based Learning
              </h3>
              <p className="text-gray-600 leading-relaxed text-center">
                Learn by talking instead of traditional tests. Express your 
                understanding in your own words, your own way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Powered by Gemini Section */}
      <section 
        className="spacing-section"
        style={{ backgroundColor: '#FEFEFE' }} 
        aria-labelledby="ai-heading"
      >
        <div className="spacing-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 
              id="ai-heading"
              className="text-2xl sm:text-3xl font-bold text-gray-700 mb-6"
            >
              Powered by Gemini AI
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              NeuroFlow AI leverages Google's Gemini AI to intelligently transform 
              learning content. Our AI analyzes text-based materials and converts 
              them into accessible formats—whether that's creating visual concept 
              maps, breaking content into digestible chunks, or generating 
              voice-friendly learning prompts. The AI adapts to each student's 
              learning style, making education more inclusive and effective.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8" style={{ backgroundColor: '#FEFCFB' }}>
        <div className="spacing-container">
          <div className="text-center">
            <p className="text-gray-600 font-semibold text-lg mb-2">
              NeuroFlow AI
            </p>
            <p className="text-gray-500 text-sm">
              An accessibility-first learning platform for neurodivergent students
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}


