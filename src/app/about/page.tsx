export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-600 to-amber-800 text-white py-20 pt-32 sm:pt-28 lg:pt-24 min-h-[60vh] -mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-black mb-6 leading-tight tracking-tight text-white">
              Our Story
            </h1>
            <p className="text-lg sm:text-xl text-amber-100 max-w-3xl mx-auto">
              Born from a vision to democratize data access across Africa, AfriData represents 
              the innovation and determination of JKUAT students under JHUB Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              {/* Decorative Line Design */}
              <div className="flex items-center mb-8">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-400 to-amber-600 max-w-24"></div>
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
                <div className="flex-1 h-px bg-gradient-to-l from-transparent via-amber-400 to-amber-600 max-w-24"></div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-6">
                Innovation Through Collaboration
              </h2>
              
              {/* Bottom decorative element */}
              <div className="flex items-center mb-6">
                <div className="w-16 h-px bg-gradient-to-r from-transparent to-amber-600"></div>
                <div className="mx-3 flex items-center space-x-1">
                  <div className="w-1 h-1 bg-amber-600 rounded-full"></div>
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  <div className="w-1 h-1 bg-amber-600 rounded-full"></div>
                </div>
                <div className="w-16 h-px bg-gradient-to-l from-transparent to-amber-600"></div>
              </div>
              <p className="text-base sm:text-lg text-amber-700 mb-6">
                AfriData emerged from a vision to bridge the critical data gap across Africa. 
                We recognized that while data drives innovation globally, African researchers, 
                businesses, and innovators often struggled to access relevant, localized datasets 
                that reflect the continent&apos;s unique contexts and challenges.
              </p>
              <p className="text-base sm:text-lg text-amber-700 mb-6">
                Developed through JHUB Africa - a leading innovation hub at Jomo Kenyatta 
                University of Agriculture and Technology - we created a platform that transforms 
                how African data is shared, accessed, and utilized. Our mission is clear: 
                democratize data access to fuel African innovation and development.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-amber-600 uppercase tracking-wide">
                    JKUAT • JHUB Africa
                  </div>
                  <div className="text-amber-700">Empowering African Innovation</div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                <div className="bg-white p-4 lg:p-6 rounded-lg text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-xl lg:text-2xl font-bold text-amber-600 mb-2">2025</div>
                  <div className="text-xs lg:text-sm text-amber-700">Platform Launch</div>
                </div>
                <div className="bg-white p-4 lg:p-6 rounded-lg text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-xl lg:text-2xl font-bold text-amber-600 mb-2">50+</div>
                  <div className="text-xs lg:text-sm text-amber-700">Datasets</div>
                </div>
                <div className="bg-white p-4 lg:p-6 rounded-lg text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-xl lg:text-2xl font-bold text-amber-600 mb-2">25+</div>
                  <div className="text-xs lg:text-sm text-amber-700">Contributors</div>
                </div>
                <div className="bg-white p-4 lg:p-6 rounded-lg text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-xl lg:text-2xl font-bold text-yellow-600 mb-2">5</div>
                  <div className="text-xs lg:text-sm text-amber-700">Countries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
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
            
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
              Our Mission & Vision
            </h2>
            
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
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-white p-6 lg:p-8 rounded-2xl shadow-lg border border-amber-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-amber-900 mb-4">Our Mission</h3>
              <p className="text-amber-700 text-base lg:text-lg leading-relaxed">
                To democratize access to African data by creating an open, collaborative platform 
                where researchers, students, innovators, and organizations can share, discover, 
                and utilize datasets that reflect African contexts and address local challenges.
              </p>
            </div>
            
            <div className="bg-white p-6 lg:p-8 rounded-2xl shadow-lg border border-yellow-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-amber-900 mb-4">Our Vision</h3>
              <p className="text-amber-700 text-base lg:text-lg leading-relaxed">
                To become Africa&apos;s leading data-sharing ecosystem, fostering innovation and 
                evidence-based decision making across the continent while empowering the next 
                generation of African data scientists and researchers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* JHUB Africa Connection */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-amber-600 to-yellow-700 p-8 rounded-2xl text-white">
                <div className="mb-6">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">JHUB Africa</h3>
                  <p className="text-amber-100">
                    Our Innovation Hub at JKUAT
                  </p>
                </div>
                <p className="text-white/90 mb-4">
                  JHUB Africa serves as the innovation and entrepreneurship hub at Jomo Kenyatta 
                  University of Agriculture and Technology, fostering student-led initiatives 
                  that address African challenges through technology.
                </p>
                <div className="border-t border-white/20 pt-4">
                  <div className="text-sm text-amber-100">Supported by</div>
                  <div className="text-lg font-semibold">JKUAT Innovation Ecosystem</div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              {/* Decorative Line Design */}
              <div className="flex items-center mb-8">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-400 to-amber-600 max-w-24"></div>
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
                <div className="flex-1 h-px bg-gradient-to-l from-transparent via-amber-400 to-amber-600 max-w-24"></div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-6">
                Powered by Innovation
              </h2>
              
              {/* Bottom decorative element */}
              <div className="flex items-center mb-6">
                <div className="w-16 h-px bg-gradient-to-r from-transparent to-amber-600"></div>
                <div className="mx-3 flex items-center space-x-1">
                  <div className="w-1 h-1 bg-amber-600 rounded-full"></div>
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  <div className="w-1 h-1 bg-amber-600 rounded-full"></div>
                </div>
                <div className="w-16 h-px bg-gradient-to-l from-transparent to-amber-600"></div>
              </div>
              <p className="text-base lg:text-lg text-amber-700 mb-6">
                AfriData is proudly developed through JHUB Africa, a premier innovation hub 
                that provides the strategic guidance, technical resources, and collaborative 
                environment needed to build transformative solutions for Africa.
              </p>
              <p className="text-base lg:text-lg text-amber-700 mb-8">
                This partnership ensures that our platform is built on solid technical 
                foundations while addressing real-world needs within the African research, 
                business, and academic communities.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span className="text-amber-700">Cutting-edge technology development and innovation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span className="text-amber-700">Strategic partnerships and industry collaboration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span className="text-amber-700">Access to extensive research and data networks</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span className="text-amber-700">Professional mentorship and technical expertise</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/images/bg2.jpg" 
            alt="Background"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
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
              Our Core Values
            </h2>
            
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
            
            <p className="text-lg lg:text-xl text-amber-100 max-w-3xl mx-auto">
              These principles guide everything we do at AfriData
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="text-center backdrop-blur-lg bg-white/10 p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:border-white/40">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg lg:text-xl font-semibold mb-2 text-white">Open Access</h3>
              <p className="text-amber-100 text-sm lg:text-base">
                We believe data should be accessible to everyone who can benefit from it
              </p>
            </div>
            
            <div className="text-center backdrop-blur-lg bg-white/10 p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:border-white/40">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg lg:text-xl font-semibold mb-2 text-white">Community-Driven</h3>
              <p className="text-amber-100 text-sm lg:text-base">
                Our platform grows and improves through the contributions of our community
              </p>
            </div>
            
            <div className="text-center backdrop-blur-lg bg-white/10 p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:border-white/40">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg lg:text-xl font-semibold mb-2 text-white">Innovation</h3>
              <p className="text-amber-100 text-sm lg:text-base">
                We continuously evolve our platform to meet the changing needs of Africa
              </p>
            </div>
            
            <div className="text-center backdrop-blur-lg bg-white/10 p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:border-white/40">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg lg:text-xl font-semibold mb-2 text-white">Impact</h3>
              <p className="text-amber-100 text-sm lg:text-base">
                Every dataset shared has the potential to create positive change in Africa
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
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
          
          <h2 className="text-3xl md:text-4xl font-bold text-amber-950 mb-4">
            Be Part of Our Story
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
            Join us in building Africa&apos;s premier data-sharing ecosystem
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-10">
            <a 
              href="/contact"
              className="group relative inline-flex items-center justify-center px-10 py-4 overflow-hidden bg-white text-amber-800 font-bold text-lg rounded-2xl shadow-2xl transition-all duration-500 hover:scale-110 hover:shadow-amber-400/50"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-amber-400 via-yellow-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <span className="absolute inset-0 w-full h-full bg-white/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center gap-3 group-hover:text-white transition-colors duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
                Join Our Community
              </span>
            </a>
            <a 
              href="/solutions"
              className="group relative inline-flex items-center justify-center px-10 py-4 overflow-hidden border-2 border-white/60 text-white font-bold text-lg rounded-2xl backdrop-blur-lg transition-all duration-500 hover:scale-110 hover:border-amber-300"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-white/10 to-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <span className="absolute inset-0 w-full h-full bg-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center gap-3 group-hover:text-amber-100 transition-colors duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Explore Datasets
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
