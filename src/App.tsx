
import { Navigation } from './components/Navigation'
import { Hero } from './components/Hero'
import { About } from './components/About'

import { Stats } from './components/Stats'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { DarkModeProvider } from './contexts/DarkModeContext'

function App() {
  return (
    <DarkModeProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-500 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-200 overflow-x-hidden">
        <Navigation />
                 <div className="relative mt-24 md:relative md:mt-0">
           <Hero />
                  </div>
     
        <About />
      
        <Stats />
        <Contact />
        <Footer />
      </div>
    </DarkModeProvider>
  )
}

export default App
