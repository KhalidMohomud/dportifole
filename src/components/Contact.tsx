import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
   
    alert('Thank you for your message! .')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-24 bg-gray-900 dark:bg-black text-white relative">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join thousands of users who are already enjoying the convenience of our smart power solutions. 
            Contact us today to learn more about implementing our system in your area.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-3xl font-bold mb-8">Get In Touch</h3>
            <div className="space-y-6">
           
              <div className="flex items-center group">
                <div className="w-14 h-14 bg-gradient-to-r from-accent to-secondary rounded-full flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Phone</h4>
                  <p className="text-gray-300">+252 619006007</p>
                </div>
              </div>
              <div className="flex items-center group">
                <div className="w-14 h-14 bg-gradient-to-r from-secondary to-primary rounded-full flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Email</h4>
                  <p className="text-gray-300">qaalidsome@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center group">
                <div className="w-14 h-14 bg-gradient-to-r from-primary to-purple-600 rounded-full flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Business Hours</h4>
                  <p className="text-gray-300">Mon - Fri: 8:00 AM - 8:00 PM</p>
                </div>
              </div>

               <div className="flex items-center group">
                <div className="w-14 h-14 bg-gradient-to-r from-primary to-purple-600 rounded-full flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Content Ict solutions</h4>
                  <p className="text-gray-300">Hirsi ICT Solution</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-10 rounded-3xl border border-white/20">
            <h3 className="text-3xl font-bold mb-8">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Your Name" 
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:border-primary text-white placeholder-gray-300 transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Your Email" 
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:border-primary text-white placeholder-gray-300 transition-all duration-300"
                    required
                  />
                </div>
              </div>
              <div>
                <input 
                  type="text" 
                  name="subject"
                  placeholder="Subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:border-primary text-white placeholder-gray-300 transition-all duration-300"
                  required
                />
              </div>
              <div>
                <textarea 
                  name="message"
                  placeholder="Your Message" 
                  rows={5} 
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:border-primary text-white placeholder-gray-300 transition-all duration-300 resize-none"
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                <span className="flex items-center justify-center space-x-2">
                  <span>Send Message</span>
                  <Send className="w-5 h-5" />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
