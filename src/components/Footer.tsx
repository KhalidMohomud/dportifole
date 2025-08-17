import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

export const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <footer className="bg-black text-white py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center">
                <i className="fas fa-bolt text-white text-xl"></i>
              </div>
              <h3 className="text-2xl font-bold gradient-text">Danab Power</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Empowering the future with smart, sustainable power solutions. 
              Join us in creating a world where power is accessible to everyone, everywhere.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><button onClick={() => scrollToSection('home')} className="text-gray-400 hover:text-white transition-colors duration-300">Home</button></li>
              <li><button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-white transition-colors duration-300">About</button></li>
              <li><button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-white transition-colors duration-300">Services</button></li>
              <li><button onClick={() => scrollToSection('stats')} className="text-gray-400 hover:text-white transition-colors duration-300">Statistics</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-white transition-colors duration-300">Contact</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Smart Stations</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Power Banks</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Mobile App</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">IoT Solutions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Consulting</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-6">Connect With Us</h4>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 bg-gradient-to-r from-accent to-secondary rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 bg-gradient-to-r from-secondary to-primary rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 bg-gradient-to-r from-primary to-purple-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              Subscribe to our newsletter for updates and insights.
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Danab Power. All rights reserved. | 
            
          </p>
        </div>
      </div>
    </footer>
  )
}
