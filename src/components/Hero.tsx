import { FaArrowRight, FaRocket, FaBolt } from 'react-icons/fa'

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="floating-shapes">
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <div className="mb-8">
            <div className="w-40 h-40 mx-auto mb-8 bg-gradient-to-r from-primary via-accent to-secondary rounded-full flex items-center justify-center animate-float shadow-2xl">
              <FaBolt className="text-white text-6xl animate-pulse-slow" />
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              <span className="text-gray-800 dark:text-gray-200">Smart</span>
              <span className="gradient-text"> Power</span>
              <br />
              <span className="text-gray-800 dark:text-gray-200">Solutions</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
              Revolutionizing the way people access power with our innovative
              <span className="font-semibold text-primary"> Power Bank Rental System</span>.
              Stay connected, stay powered, anywhere, anytime.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button
                onClick={() => scrollToSection('services')}
                className="group bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
              >
                <span className="flex items-center space-x-2">
                  <span>Explore Services</span>
                  <FaArrowRight className="w-5 h-5 text-white group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="group bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm hover:bg-white/30 dark:hover:bg-gray-700/30 text-gray-800 dark:text-gray-200 border-2 border-gray-300 dark:border-gray-600 hover:border-primary font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <span className="flex items-center space-x-2">
                  <span>Get Started</span>
                  <FaRocket className="w-5 h-5 text-gray-800 dark:text-gray-200 group-hover:rotate-12 transition-transform duration-300" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 dark:bg-gray-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
