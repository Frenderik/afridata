import Link from "next/link";
import WhoWeAre from "./components/WhoWeAre";
import CommunityImpact from "./components/CommunityImpact";
import PartnersSection from "./components/PartnersSection";
import CTASection from "./components/CTASection";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-600 via-yellow-700 to-amber-800 text-white py-16 pt-36 sm:pt-32 lg:pt-28 min-h-[75vh] lg:h-[75vh] flex items-center -mt-0">
        {/* Background Video */}
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
          >
            <source src="/images/hero.mp4" type="video/mp4" />
            <source src="/images/hero.webm" type="video/webm" />
            {/* Fallback for browsers that don't support video */}
          </video>
          {/* Video overlay to maintain readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-600/70 via-yellow-700/70 to-amber-800/70"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black mb-6 sm:mb-8 leading-tight tracking-tight">
                <span className="bg-gradient-to-r from-white via-amber-100 to-white bg-clip-text text-transparent">
                  Africa&apos;s Open 
                </span>
                <br />
                <span className="bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-200 bg-clip-text text-transparent font-extrabold">
                  Data Platform
                </span>
              </h1>
              <p className="text-base sm:text-lg mb-6 text-amber-100">
                Discover, share, and collaborate on datasets that reflect African contexts. 
                From agriculture to health, education to environment - access data that drives local innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 mt-10">
                <Link 
                  href="/solutions"
                  className="group relative inline-flex items-center justify-center px-10 py-4 overflow-hidden bg-white text-amber-800 font-bold text-lg rounded-2xl shadow-2xl transition-all duration-500 hover:scale-110 hover:shadow-amber-400/50"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-amber-400 via-yellow-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                  <span className="absolute inset-0 w-full h-full bg-white/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative flex items-center gap-3 group-hover:text-white transition-colors duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    Explore Datasets
                  </span>
                </Link>
                <Link 
                  href="/contact"
                  className="group relative inline-flex items-center justify-center px-10 py-4 overflow-hidden border-2 border-white/60 text-white font-bold text-lg rounded-2xl backdrop-blur-lg transition-all duration-500 hover:scale-110 hover:border-amber-300"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-white/10 to-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                  <span className="absolute inset-0 w-full h-full bg-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative flex items-center gap-3 group-hover:text-amber-100 transition-colors duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                    </svg>
                    Share Your Data
                  </span>
                </Link>
              </div>
            </div>
            
            {/* Featured Video Section */}
            <div className="flex justify-center">
              <div className="w-full max-w-2xl">
                <div className="relative group">
                  {/* Video Container with Enhanced Effects */}
                  <div className="relative overflow-hidden rounded-3xl shadow-lg backdrop-blur-sm transform hover:scale-105 transition-all duration-500 hover:shadow-amber-500/20">
                    {/* Subtle glowing effect */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-400/20 via-yellow-500/20 to-amber-600/20 rounded-3xl opacity-0 blur-sm group-hover:opacity-60 transition-opacity duration-500"></div>
                    
                    <div className="relative">
                      <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-72 md:h-96 object-cover rounded-3xl"
                      >
                        <source src="/images/hero.mp4" type="video/mp4" />
                        <source src="/images/hero.webm" type="video/webm" />
                        {/* Fallback for browsers that don't support video */}
                      </video>
                      
                      {/* Subtle gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-3xl"></div>
                    </div>
                  </div>
                  
                  {/* Enhanced Floating Stats */}
                  <div className="absolute -bottom-4 -right-4 bg-white/15 backdrop-blur-xl rounded-2xl p-6 border border-white/30 shadow-2xl transform hover:scale-105 transition-all duration-300">
                    <div className="grid grid-cols-3 gap-6 text-center">
                      <div className="group">
                        <div className="text-white font-bold text-lg group-hover:text-amber-200 transition-colors">120+</div>
                        <div className="text-amber-200 text-xs">Datasets</div>
                      </div>
                      <div className="group">
                        <div className="text-white font-bold text-lg group-hover:text-amber-200 transition-colors">850+</div>
                        <div className="text-amber-200 text-xs">Downloads</div>
                      </div>
                      <div className="group">
                        <div className="text-white font-bold text-lg group-hover:text-amber-200 transition-colors">45+</div>
                        <div className="text-amber-200 text-xs">Contributors</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <WhoWeAre />

      {/* Community Impact */}
      <CommunityImpact />

      {/* Partners Section */}
      <PartnersSection />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
