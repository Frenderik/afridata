'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [isOverHero, setIsOverHero] = useState(true)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Detect if navbar is over hero section
  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.75 // 75vh hero section height
      const scrollY = window.scrollY
      setIsOverHero(scrollY < heroHeight - 100) // 100px buffer
    }

    handleScroll() // Initial check
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/solutions', label: 'Datasets' },
    { href: '/features', label: 'How It Works' },
    { href: '/team', label: 'Team' },
    { href: '/contact', label: 'Contact Us' }
  ]

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isOverHero 
        ? 'bg-transparent backdrop-blur-md' 
        : 'bg-black/20 backdrop-blur-md border-b border-white/10'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo - Centered */}
        <div className="flex justify-center py-4">
          <Link href="/" className="flex-shrink-0">
            <div className="flex items-center space-x-2">
              <h1 className="text-3xl md:text-4xl font-black text-white drop-shadow-2xl filter brightness-110 contrast-125 tracking-wide hover:scale-105 transition-transform duration-300">
                AfriData
              </h1>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation - Centered below logo */}
        <div className="hidden md:flex justify-center pb-6">
          <div className="relative bg-white/10 backdrop-blur-lg rounded-full border border-white/20 shadow-lg px-8 py-3">
            <div className="flex items-center space-x-1 relative">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onMouseEnter={() => setHoveredItem(item.href)}
                    onMouseLeave={() => setHoveredItem(null)}
                    className={`
                      relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-out
                      ${isActive 
                        ? 'text-white bg-amber-600/80 shadow-lg transform scale-110 z-10' 
                        : 'text-white hover:text-amber-200'
                      }
                      ${hoveredItem === item.href && !isActive 
                        ? 'transform scale-105 bg-white/20 shadow-md z-10' 
                        : ''
                      }
                    `}
                  >
                    {/* Light following effect */}
                    {hoveredItem === item.href && !isActive && (
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-400/30 to-amber-600/30 rounded-full animate-pulse" />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex justify-center pb-4">
          <button
            onClick={toggleMenu}
            className="inline-flex items-center justify-center p-3 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-500 transition-all duration-300"
          >
            <span className="sr-only">Open main menu.</span>
            {/* Hamburger icon */}
            <svg
              className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            {/* Close icon */}
            <svg
              className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="mx-4 mb-4 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-lg overflow-hidden">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300
                    ${isActive 
                      ? 'text-white bg-amber-600/80 shadow-lg transform scale-105' 
                      : 'text-white hover:bg-white/20 hover:scale-105'
                    }
                  `}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>
        </div>
      </div>

      {/* Horizontal underline separator */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
    </nav>
  )
}
