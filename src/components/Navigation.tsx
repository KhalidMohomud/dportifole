import { useState, useEffect } from 'react'
import { useDarkMode } from '../contexts/DarkModeContext'
import { Menu, X, Sun, Moon, Zap } from 'lucide-react'

export const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { isDarkMode, toggleDarkMode } = useDarkMode()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <h1 className="text-2xl font-bold gradient-text">Danab Power</h1>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-baseline space-x-8">
              {['home', 'about', 'stats', 'contact'].map(section => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="nav-link text-gray-700 dark:text-gray-300 hover:text-primary px-4 py-2 rounded-full transition-all duration-300 hover:bg-white/20 dark:hover:bg-gray-800/20 hover:backdrop-blur-sm"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-gray-600" />
              )}
            </button>
          </div>

          {/* Mobile Menu Toggle + Dark Mode */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-gray-600" />
              )}
            </button>

            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-primary p-2"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-t border-gray-200 dark:border-gray-700 transition-all duration-300 ${
        isMobileMenuOpen ? 'block' : 'hidden'
      }`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {['home', 'about', 'services', 'stats', 'contact'].map(section => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
