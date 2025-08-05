'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    subject: 'general'
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
        subject: 'general'
      })
    }, 2000)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-600 to-amber-800 text-white py-20 pt-32 sm:pt-28 lg:pt-24 min-h-[60vh] -mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
          <div className="text-center">
            {/* Decorative Line Design */}
            <div className="flex items-center justify-center mb-8">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-200/50 to-white/60 max-w-32"></div>
              <div className="mx-4 flex items-center">
                <div className="w-3 h-3 bg-white/80 rounded-full"></div>
                <div className="mx-2 flex flex-col items-center">
                  <div className="w-5 h-px bg-white/80"></div>
                  <div className="w-4 h-4 border-2 border-white/80 rounded-full bg-amber-600/30 my-1 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  </div>
                  <div className="w-5 h-px bg-white/80"></div>
                </div>
                <div className="w-3 h-3 bg-white/80 rounded-full"></div>
              </div>
              <div className="flex-1 h-px bg-gradient-to-l from-transparent via-amber-200/50 to-white/60 max-w-32"></div>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-black mb-6 leading-tight tracking-tight text-white">
              Join Our Community
            </h1>
            
            {/* Bottom decorative element */}
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-white/60"></div>
              <div className="mx-3 flex items-center space-x-1">
                <div className="w-1 h-1 bg-white/80 rounded-full"></div>
                <div className="w-2 h-2 bg-white/90 rounded-full"></div>
                <div className="w-1 h-1 bg-white/80 rounded-full"></div>
              </div>
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-white/60"></div>
            </div>
            
            <p className="text-lg sm:text-xl text-amber-100 max-w-3xl mx-auto">
              Connect with African researchers, students, and data enthusiasts. 
              Get support, share ideas, and collaborate on meaningful projects.
            </p>
          </div>
        </div>
      </section>



      {/* Contact Form & Info */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            {/* Decorative Line Design */}
            <div className="flex items-center justify-center mb-8">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-400 to-amber-600 max-w-32"></div>
              <div className="mx-4 flex items-center">
                <div className="w-3 h-3 bg-amber-600 rounded-full"></div>
                <div className="mx-2 flex flex-col items-center">
                  <div className="w-6 h-px bg-amber-600"></div>
                  <div className="w-4 h-4 border-2 border-amber-600 rounded-full bg-amber-50 my-1 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-amber-600 rounded-full"></div>
                  </div>
                  <div className="w-6 h-px bg-amber-600"></div>
                </div>
                <div className="w-3 h-3 bg-amber-600 rounded-full"></div>
              </div>
              <div className="flex-1 h-px bg-gradient-to-l from-transparent via-amber-400 to-amber-600 max-w-32"></div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">Get In Touch</h2>
            
            {/* Bottom decorative element */}
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-amber-600"></div>
              <div className="mx-3 flex items-center space-x-1">
                <div className="w-1 h-1 bg-amber-600 rounded-full"></div>
                <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                <div className="w-1 h-1 bg-amber-600 rounded-full"></div>
              </div>
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-amber-600"></div>
            </div>
            
            <p className="text-lg sm:text-xl text-amber-700 max-w-3xl mx-auto">
              We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg border border-amber-200 p-8">
              <h3 className="text-2xl font-bold text-amber-900 mb-6">Send us a message</h3>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-amber-100 border border-amber-400 text-amber-700 rounded-lg">
                  Thank you for your message! We will get back to you within 24 hours.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-amber-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-white text-gray-800 placeholder-gray-500 transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-amber-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-white text-gray-800 placeholder-gray-500 transition-colors"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-amber-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-white text-gray-800 placeholder-gray-500 transition-colors"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-amber-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-white text-gray-800 transition-colors"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="sales">Sales & Pricing</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership</option>
                      <option value="demo">Request Demo</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-amber-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-white text-gray-800 placeholder-gray-500 transition-colors"
                    placeholder="Tell us about your project or how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden bg-amber-600 text-white font-bold text-lg rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-amber-400/50 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-2xl shadow-lg border border-amber-200 p-8">
              <h3 className="text-2xl font-bold text-amber-900 mb-6">Connect With Us</h3>
              <div className="space-y-8">
                {/* University Location */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-amber-900 mb-1">Our Location</h3>
                    <p className="text-amber-700">
                      Jomo Kenyatta University of Agriculture & Technology<br />
                      JHUB Africa Innovation Hub<br />
                      Juja, Kiambu County, Kenya
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-amber-900 mb-1">Email Us</h3>
                    <p className="text-amber-700">
                      General: afridata@jkuat.ac.ke<br />
                      Support: support@jhub.africa<br />
                      Partnerships: felix.ombongi@student.jkuat.ac.ke
                    </p>
                  </div>
                </div>

                {/* GitHub */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-amber-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-amber-900 mb-1">GitHub Repository</h3>
                    <p className="text-amber-700">
                      <a href="https://github.com/OmbongiFelix/AfriData-Commons.git" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline">
                        AfriData-Commons
                      </a><br />
                      Open source • Contributions welcome
                    </p>
                  </div>
                </div>

                {/* Community Hours */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-amber-900 mb-1">Business Hours</h3>
                    <p className="text-amber-700">
                      Monday - Friday: 8:00 AM - 6:00 PM WAT<br />
                      Saturday: 9:00 AM - 2:00 PM WAT<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-12">
                <h3 className="text-lg font-semibold text-amber-900 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-amber-600 text-white rounded-lg flex items-center justify-center hover:bg-amber-700 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-yellow-600 text-white rounded-lg flex items-center justify-center hover:bg-yellow-700 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-amber-700 text-white rounded-lg flex items-center justify-center hover:bg-amber-800 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-pink-600 text-white rounded-lg flex items-center justify-center hover:bg-pink-700 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.22.082.342-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.750-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            {/* Decorative Line Design */}
            <div className="flex items-center justify-center mb-8">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-400 to-amber-600 max-w-32"></div>
              <div className="mx-4 flex items-center">
                <div className="w-3 h-3 bg-amber-600 rounded-full"></div>
                <div className="mx-2 flex flex-col items-center">
                  <div className="w-6 h-px bg-amber-600"></div>
                  <div className="w-4 h-4 border-2 border-amber-600 rounded-full bg-white my-1 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-amber-600 rounded-full"></div>
                  </div>
                  <div className="w-6 h-px bg-amber-600"></div>
                </div>
                <div className="w-3 h-3 bg-amber-600 rounded-full"></div>
              </div>
              <div className="flex-1 h-px bg-gradient-to-l from-transparent via-amber-400 to-amber-600 max-w-32"></div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">Frequently Asked Questions</h2>
            
            {/* Bottom decorative element */}
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-amber-600"></div>
              <div className="mx-3 flex items-center space-x-1">
                <div className="w-1 h-1 bg-amber-600 rounded-full"></div>
                <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                <div className="w-1 h-1 bg-amber-600 rounded-full"></div>
              </div>
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-amber-600"></div>
            </div>
            
            <p className="text-lg sm:text-xl text-amber-700 max-w-3xl mx-auto">
              Have questions? We have answers. Here are some common questions we receive.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-amber-50 rounded-2xl shadow-lg border border-amber-200 p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-lg font-semibold text-amber-900 mb-2">
                How quickly can we get started with AfriData?
              </h3>
              <p className="text-amber-700">
                We can have you up and running within 24-48 hours for most standard implementations. 
                More complex integrations may take 1-2 weeks depending on your specific requirements.
              </p>
            </div>

            <div className="bg-amber-50 rounded-2xl shadow-lg border border-amber-200 p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-lg font-semibold text-amber-900 mb-2">
                Do you offer training for our team?
              </h3>
              <p className="text-amber-700">
                Yes! We provide comprehensive training sessions for your team to ensure they can 
                effectively use our platform. Training includes both online sessions and on-site 
                workshops when needed.
              </p>
            </div>

            <div className="bg-amber-50 rounded-2xl shadow-lg border border-amber-200 p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-lg font-semibold text-amber-900 mb-2">
                What kind of support do you provide?
              </h3>
              <p className="text-amber-700">
                We offer 24/7 technical support through multiple channels including email, chat, 
                and phone. Our dedicated customer success team ensures you get the most value 
                from our platform.
              </p>
            </div>

            <div className="bg-amber-50 rounded-2xl shadow-lg border border-amber-200 p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-lg font-semibold text-amber-900 mb-2">
                Can you integrate with our existing systems?
              </h3>
              <p className="text-amber-700">
                Absolutely! We have pre-built connectors for 500+ popular business applications 
                and can create custom integrations for your specific systems if needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gradient-to-br from-amber-600 via-yellow-700 to-amber-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Decorative Line Design - Light for dark background */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-200/50 to-white/60 max-w-32"></div>
            <div className="mx-4 flex items-center">
              <div className="w-3 h-3 bg-white/80 rounded-full"></div>
              <div className="mx-2 flex flex-col items-center">
                <div className="w-5 h-px bg-white/80"></div>
                <div className="w-4 h-4 border-2 border-white/80 rounded-full bg-amber-600/30 my-1 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                </div>
                <div className="w-5 h-px bg-white/80"></div>
              </div>
              <div className="w-3 h-3 bg-white/80 rounded-full"></div>
            </div>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-amber-200/50 to-white/60 max-w-32"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Join the African Data Revolution?
          </h2>
          
          {/* Bottom decorative element */}
          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-white/60"></div>
            <div className="mx-3 flex items-center space-x-1">
              <div className="w-1 h-1 bg-white/80 rounded-full"></div>
              <div className="w-2 h-2 bg-white/90 rounded-full"></div>
              <div className="w-1 h-1 bg-white/80 rounded-full"></div>
            </div>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-white/60"></div>
          </div>
          
          <p className="text-lg sm:text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Don&apos;t just read about AfriData - experience it! Join thousands of researchers already using our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-10">
            <a 
              href="https://afridata-commons-1.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-10 py-4 overflow-hidden bg-white text-amber-800 font-bold text-lg rounded-2xl shadow-2xl transition-all duration-500 hover:scale-110 hover:shadow-amber-400/50"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-amber-400 via-yellow-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <span className="absolute inset-0 w-full h-full bg-white/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center gap-3 group-hover:text-white transition-colors duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m0 0a9 9 0 01-9-9m9 9v-9m0 9l-3-3m3 3l3-3M3 12a9 9 0 019-9m0 0a9 9 0 019 9m-9-9v9m0-9l3 3m-3-3l-3 3" />
                </svg>
                Explore AfriData Platform
              </span>
            </a>
            <a 
              href="https://afridata-commons-1.onrender.com/accounts/?mode=signup"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-10 py-4 overflow-hidden border-2 border-white/60 text-white font-bold text-lg rounded-2xl backdrop-blur-lg transition-all duration-500 hover:scale-110 hover:border-amber-300"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-white/10 to-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <span className="absolute inset-0 w-full h-full bg-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center gap-3 group-hover:text-amber-100 transition-colors duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                Sign Up & Upload Data
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
