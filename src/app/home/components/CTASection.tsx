import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-gradient-to-br from-amber-600 via-yellow-700 to-amber-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Decorative Line Design - Variant 4 (Light for dark background) */}
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
          Join the African Data Community
        </h2>
        
        {/* Bottom decorative element - Variant 4 */}
        <div className="flex items-center justify-center mb-8">
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-white/60"></div>
          <div className="mx-3 flex items-center space-x-1">
            <div className="w-1 h-1 bg-white/80 rounded-full"></div>
            <div className="w-2 h-2 bg-white/90 rounded-full"></div>
            <div className="w-1 h-1 bg-white/80 rounded-full"></div>
          </div>
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-white/60"></div>
        </div>
        
        <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
          Whether you&apos;re a student, researcher, or innovator - contribute to Africa&apos;s data ecosystem and earn 
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center mt-10">
          <Link 
            href="/contact"
            className="group relative inline-flex items-center justify-center px-10 py-4 overflow-hidden bg-white text-amber-800 font-bold text-lg rounded-2xl shadow-2xl transition-all duration-500 hover:scale-110 hover:shadow-amber-400/50"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-amber-400 via-yellow-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            <span className="absolute inset-0 w-full h-full bg-white/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative flex items-center gap-3 group-hover:text-white transition-colors duration-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
              </svg>
              Join Community
            </span>
          </Link>
          <Link 
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
          </Link>
        </div>
      </div>
    </section>
  );
}
