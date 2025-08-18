import {
  FaMicrochip,
  FaLeaf,
  FaUsers,
  FaBatteryFull,
  FaMobileAlt,
  FaChartLine
} from 'react-icons/fa'
import { FaChargingStation } from 'react-icons/fa6'

export const About = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 transform -skew-y-3 origin-top-left"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-slide-up">
          <h2 className="text-5xl font-bold text-gray-800 dark:text-gray-200 mb-6">About Danab Power</h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
  We are a cutting-edge technology company transforming the power industry with our 
  <span className="font-semibold text-primary">innovative Power Bank Rental System</span>.  
  Our mission is to deliver sustainable, efficient, and accessible power solutions for all.
</p>

        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side */}
          <div className="animate-slide-up">
            <h3 className="text-4xl font-bold text-primary mb-8">Our Mission</h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              To democratize access to power through innovative technology, creating a world where 
              <span className="font-semibold"> no one is ever left without power</span>. We combine 
              cutting-edge IoT technology with sustainable energy practices to deliver reliable 
              power solutions that meet the demands of modern society.
            </p>

            <div className="space-y-6">
              {/* Feature 1 */}
              <div className="flex items-start group">
                <div className="bg-gradient-to-r from-primary to-accent rounded-full p-3 mr-4 mt-1 group-hover:scale-110 transition-transform duration-300">
                  <FaMicrochip className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Smart IoT Technology</h4>
                  <p className="text-gray-600 dark:text-gray-400">Advanced sensors and connectivity for real-time monitoring and management.</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start group">
                <div className="bg-gradient-to-r from-accent to-secondary rounded-full p-3 mr-4 mt-1 group-hover:scale-110 transition-transform duration-300">
                  <FaLeaf className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Sustainable Energy</h4>
                  <p className="text-gray-600 dark:text-gray-400">Eco-friendly power solutions that reduce carbon footprint.</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start group">
                <div className="bg-gradient-to-r from-secondary to-primary rounded-full p-3 mr-4 mt-1 group-hover:scale-110 transition-transform duration-300">
                  <FaUsers className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Customer-Centric</h4>
                  <p className="text-gray-600 dark:text-gray-400">24/7 support and personalized solutions for every user.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Icon Cards */}
          <div className="grid grid-cols-2 gap-6 animate-slide-up">
            {/* Card 1 */}
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 p-8 rounded-2xl text-center card-hover">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaChargingStation className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">Smart Stations</h4>
              <p className="text-gray-600 dark:text-gray-400">IoT-powered charging stations</p>
            </div>

            {/* Card 2 */}
            <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 dark:from-yellow-900 dark:to-yellow-800 p-8 rounded-2xl text-center card-hover">
              <div className="w-16 h-16 bg-gradient-to-r from-secondary to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaBatteryFull className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">Power Banks</h4>
              <p className="text-gray-600 dark:text-gray-400">High-capacity portable chargers</p>
            </div>

            {/* Card 3 */}
            <div className="bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900 dark:to-green-800 p-8 rounded-2xl text-center card-hover">
              <div className="w-16 h-16 bg-gradient-to-r from-accent to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaMobileAlt className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">Mobile App</h4>
              <p className="text-gray-600 dark:text-gray-400">Seamless rental experience</p>
            </div>

            {/* Card 4 */}
            <div className="bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900 dark:to-purple-800 p-8 rounded-2xl text-center card-hover">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaChartLine className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">Analytics</h4>
              <p className="text-gray-600 dark:text-gray-400">Real-time data insights</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
