export default function CTASection() {
  return (
    <section className="relative py-24 px-6 md:px-12 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-900 via-amber-700 to-orange-800"></div>
      <div className="absolute inset-0 bg-black/30"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-amber-400/20 rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-4xl mx-auto text-center">
        {/* Decorative Line */}
        <div className="flex items-center justify-center mb-8">
          <div className="h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent w-24"></div>
          <div className="w-2 h-2 bg-amber-300 rounded-full mx-4"></div>
          <div className="h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent w-24"></div>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
          Experience AfriData
          <span className="block bg-gradient-to-r from-amber-200 via-yellow-300 to-orange-300 bg-clip-text text-transparent">
            in Action
          </span>
        </h2>
        
        <p className="text-xl md:text-2xl text-amber-100 mb-12 max-w-3xl mx-auto leading-relaxed">
          See how our platform works by exploring live datasets and uploading your own data
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
            className="group relative inline-flex items-center justify-center px-10 py-4 overflow-hidden bg-transparent border-2 border-white text-white font-bold text-lg rounded-2xl transition-all duration-500 hover:scale-110 hover:bg-white hover:text-amber-800 hover:shadow-2xl hover:shadow-white/30"
          >
            <span className="relative flex items-center gap-3">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Start Contributing
            </span>
          </a>
        </div>
        
        {/* Bottom Decorative Line */}
        <div className="flex items-center justify-center mt-12">
          <div className="h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent w-32"></div>
          <div className="w-1 h-1 bg-amber-300 rounded-full mx-3"></div>
          <div className="h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent w-32"></div>
        </div>
      </div>
    </section>
  );
}
