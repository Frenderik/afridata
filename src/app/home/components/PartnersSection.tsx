export default function PartnersSection() {
  return (
    <section className="relative min-h-[75vh] lg:h-[75vh] overflow-hidden">
      {/* Full-width background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/bg.jpg')"
        }}
      >
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/60"></div>
        {/* Amber gradient overlay for brand consistency */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/40 via-transparent to-yellow-900/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center min-h-[75vh] lg:h-full py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Section */}
          <div className="text-center mb-12">
            {/* Decorative Line Design - White version for dark background */}
            <div className="flex items-center justify-center mb-8">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-400 to-white max-w-48"></div>
              <div className="mx-6 flex items-center">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  <div className="w-6 h-px bg-white"></div>
                  <div className="relative">
                    <div className="w-8 h-8 border-2 border-white rounded-full bg-amber-600/20 backdrop-blur-sm"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full"></div>
                    <div className="absolute -top-1 -left-1 w-2 h-2 border border-amber-400 rounded-full"></div>
                    <div className="absolute -bottom-1 -right-1 w-2 h-2 border border-amber-400 rounded-full"></div>
                  </div>
                  <div className="w-6 h-px bg-white"></div>
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>
              <div className="flex-1 h-px bg-gradient-to-l from-transparent via-amber-400 to-white max-w-48"></div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 relative inline-block">
              Our <span className="text-amber-400">Partners</span>
              {/* Stylish underline */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-full">
                <div className="flex items-center justify-center">
                  <div className="w-16 h-px bg-gradient-to-r from-transparent to-white/60"></div>
                  <div className="mx-2 flex items-center space-x-1">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    <div className="w-8 h-px bg-white/80"></div>
                    <div className="w-2.5 h-2.5 bg-amber-400 rounded-full"></div>
                    <div className="w-8 h-px bg-white/80"></div>
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  </div>
                  <div className="w-16 h-px bg-gradient-to-l from-transparent to-white/60"></div>
                </div>
              </div>
            </h2>
            
            <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Proudly supported by leading institutions in African innovation and education
            </p>
          </div>

          {/* Partners Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 items-center mb-12 px-4 lg:px-0">
            
            {/* JKUAT Partner Card */}
            <div className="group max-w-sm mx-auto lg:max-w-none">
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 lg:p-8 hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                <div className="flex flex-col items-center text-center">
                  {/* Logo Container */}
                  <div className="relative mb-6">
                    <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-2xl overflow-hidden bg-white shadow-2xl group-hover:shadow-amber-500/25 transition-all duration-500">
                      <img 
                        src="/images/jkuat-logo.png" 
                        alt="JKUAT Logo" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Floating decoration */}
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-amber-400 rounded-full animate-pulse"></div>
                    <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse delay-300"></div>
                  </div>
                  
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">
                    Jomo Kenyatta University
                  </h3>
                  <p className="text-amber-200 text-base mb-3">
                    of Agriculture & Technology
                  </p>
                  {/* Horizontal separator line */}
                  <div className="w-16 h-px bg-amber-400/60 mb-3"></div>
                  <span className="text-amber-300 font-medium text-sm">Educational Partner</span>
                </div>
              </div>
            </div>

            {/* JHUB Africa Partner Card */}
            <div className="group max-w-sm mx-auto lg:max-w-none">
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 lg:p-8 hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                <div className="flex flex-col items-center text-center">
                  {/* Logo Container */}
                  <div className="relative mb-6">
                    <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-2xl overflow-hidden bg-white p-1 shadow-2xl group-hover:shadow-yellow-500/25 transition-all duration-500">
                      <img 
                        src="/images/jhub-logo.png" 
                        alt="JHUB Africa Logo" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    {/* Floating decoration */}
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full animate-pulse delay-150"></div>
                    <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-amber-400 rounded-full animate-pulse delay-500"></div>
                  </div>
                  
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">
                    JHUB Africa
                  </h3>
                  <p className="text-yellow-200 text-base mb-3">
                    Innovation Hub
                  </p>
                  {/* Horizontal separator line */}
                  <div className="w-16 h-px bg-yellow-400/60 mb-3"></div>
                  <span className="text-yellow-300 font-medium text-sm">Technology Partner</span>
                </div>
              </div>
            </div>
          </div>

          {/* Partnership Connection Animation */}
          <div className="flex items-center justify-center">
            <div className="hidden lg:flex items-center space-x-4">
              <div className="w-16 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full animate-pulse"></div>
              <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center animate-bounce">
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
              </div>
              <div className="w-16 h-0.5 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-full animate-pulse delay-300"></div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
