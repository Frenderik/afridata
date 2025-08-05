import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/africa-poster.jpg"
        >
          <source src="/images/africa.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Dark chocolate overlay - reduced opacity */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-amber-950/80 to-yellow-950/75"></div>
        {/* Additional deep chocolate brown overlay for richer color - reduced opacity */}
        <div className="absolute inset-0 bg-gradient-to-t from-amber-950/80 via-yellow-950/70 to-black/60"></div>
        {/* Extra dark layer for maximum depth - reduced opacity */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          
          {/* Header Section */}
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AfriData
            </h3>
            <p className="text-lg md:text-xl text-white mb-2 font-medium">
              Africa&apos;s Stories, Told by Africans
            </p>
            <p className="text-amber-200 max-w-2xl mx-auto">
              A community-driven platform for sharing African datasets. Created by JKUAT students under JHUB Africa 
              to promote data ownership and collaborative problem-solving across the African tech ecosystem.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Quick Links */}
            <div className="text-center sm:text-left">
              <h4 className="text-lg font-semibold mb-6 text-white relative inline-block">
                Quick Links
                {/* Decorative underline */}
                <div className="absolute -bottom-1 left-1/2 sm:left-0 transform -translate-x-1/2 sm:translate-x-0 w-12">
                  <div className="flex items-center">
                    <div className="w-3 h-px bg-white"></div>
                    <div className="w-1 h-1 bg-amber-400 rounded-full mx-1"></div>
                    <div className="w-3 h-px bg-white"></div>
                  </div>
                </div>
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-amber-200 hover:text-white hover:translate-x-1 transition-all duration-300 text-sm relative group">
                    Home
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-amber-200 hover:text-white hover:translate-x-1 transition-all duration-300 text-sm relative group">
                    About Us
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </li>
                <li>
                  <Link href="/solutions" className="text-amber-200 hover:text-white hover:translate-x-1 transition-all duration-300 text-sm relative group">
                    Datasets
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </li>
                <li>
                  <Link href="/features" className="text-amber-200 hover:text-white hover:translate-x-1 transition-all duration-300 text-sm relative group">
                    How It Works
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="text-amber-200 hover:text-white hover:translate-x-1 transition-all duration-300 text-sm relative group">
                    Team
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Data Categories */}
            <div className="text-center sm:text-left">
              <h4 className="text-lg font-semibold mb-6 text-white relative inline-block">
                Data Categories
                {/* Decorative underline */}
                <div className="absolute -bottom-1 left-1/2 sm:left-0 transform -translate-x-1/2 sm:translate-x-0 w-12">
                  <div className="flex items-center">
                    <div className="w-3 h-px bg-white"></div>
                    <div className="w-1 h-1 bg-amber-400 rounded-full mx-1"></div>
                    <div className="w-3 h-px bg-white"></div>
                  </div>
                </div>
              </h4>
              <ul className="space-y-3 text-amber-200">
                <li>
                  <Link href="/solutions" className="text-sm hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer relative group block">
                    Agriculture & Environment
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </li>
                <li>
                  <Link href="/solutions" className="text-sm hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer relative group block">
                    Health & Demographics
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </li>
                <li>
                  <Link href="/solutions" className="text-sm hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer relative group block">
                    Education & Research
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </li>
                <li>
                  <Link href="/solutions" className="text-sm hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer relative group block">
                    Economics & Finance
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </li>
                <li>
                  <Link href="/solutions" className="text-sm hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer relative group block">
                    Social & Cultural
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="text-center sm:text-left">
              <h4 className="text-lg font-semibold mb-6 text-white relative inline-block">
                Connect With Us
                {/* Decorative underline */}
                <div className="absolute -bottom-1 left-1/2 sm:left-0 transform -translate-x-1/2 sm:translate-x-0 w-12">
                  <div className="flex items-center">
                    <div className="w-3 h-px bg-white"></div>
                    <div className="w-1 h-1 bg-amber-400 rounded-full mx-1"></div>
                    <div className="w-3 h-px bg-white"></div>
                  </div>
                </div>
              </h4>
              <ul className="space-y-4 text-amber-200">
                <li className="flex items-start justify-center sm:justify-start hover:text-white transition-colors duration-300 group">
                  <svg className="h-5 w-5 mr-3 mt-0.5 text-white flex-shrink-0 group-hover:text-amber-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <span className="text-sm">JKUAT, Juja Campus<br />Kiambu County, Kenya</span>
                </li>
                <li className="flex items-center justify-center sm:justify-start hover:text-white transition-colors duration-300 group cursor-pointer">
                  <svg className="h-5 w-5 mr-3 text-white flex-shrink-0 group-hover:text-amber-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm">community@afridata.org</span>
                </li>
                <li className="flex items-center justify-center sm:justify-start hover:text-white transition-colors duration-300 group">
                  <svg className="h-5 w-5 mr-3 text-white flex-shrink-0 group-hover:text-amber-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                  <span className="text-sm">JHUB Africa Initiative</span>
                </li>
              </ul>
            </div>

            {/* Social Media & CTA */}
            <div className="text-center sm:text-left">
              <h4 className="text-lg font-semibold mb-6 text-white relative inline-block">
                Follow Us
                {/* Decorative underline */}
                <div className="absolute -bottom-1 left-1/2 sm:left-0 transform -translate-x-1/2 sm:translate-x-0 w-12">
                  <div className="flex items-center">
                    <div className="w-3 h-px bg-white"></div>
                    <div className="w-1 h-1 bg-amber-400 rounded-full mx-1"></div>
                    <div className="w-3 h-px bg-white"></div>
                  </div>
                </div>
              </h4>
              <div className="flex justify-center sm:justify-start space-x-4 mb-6">
                <a href="#" className="text-white hover:text-amber-400 transition-all duration-300 transform hover:scale-110 hover:translate-x-1 group relative">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <div className="absolute -bottom-1 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300"></div>
                </a>
                <a href="#" className="text-white hover:text-amber-400 transition-all duration-300 transform hover:scale-110 hover:translate-x-1 group relative">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                  <div className="absolute -bottom-1 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300"></div>
                </a>
                <a href="#" className="text-white hover:text-amber-400 transition-all duration-300 transform hover:scale-110 hover:translate-x-1 group relative">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <div className="absolute -bottom-1 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300"></div>
                </a>
              </div>
              
              <div className="bg-amber-900/40 backdrop-blur-sm rounded-lg p-4 border border-amber-200/20">
                <p className="text-white text-sm font-semibold mb-2">
                 Real Data. Real Impact.
                </p>
                <p className="text-amber-200 text-xs">
                  Where African researchers shape tomorrow&apos;s innovations
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-12 pt-8 border-t border-white/30">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-white text-sm text-center md:text-left">
                © 2025 AfriData. By the People for the People. Open for the community.
              </p>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6">
                <Link href="/privacy" className="text-amber-300 hover:text-white text-sm transition-all duration-300 text-center hover:translate-x-1 relative group">
                  Privacy Policy
                  <div className="absolute bottom-0 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300"></div>
                </Link>
                <Link href="/terms" className="text-amber-300 hover:text-white text-sm transition-all duration-300 text-center hover:translate-x-1 relative group">
                  Terms of Service
                  <div className="absolute bottom-0 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300"></div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
