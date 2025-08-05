export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-amber-600 to-yellow-700 text-white py-20 pt-32 sm:pt-28 lg:pt-24 min-h-[60vh] -mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black mb-6 leading-tight tracking-tight text-white">
            How AfriData 
            <span className="bg-gradient-to-r from-amber-200 via-yellow-200 to-amber-200 bg-clip-text text-transparent"> Works</span>
          </h1>
          <p className="text-lg sm:text-xl text-amber-100 max-w-3xl mx-auto mb-10 leading-relaxed">
            Discover how we collect, process, and share African datasets through our 
            secure cloud infrastructure and collaborative platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Explore Live Platform
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Start Contributing
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
