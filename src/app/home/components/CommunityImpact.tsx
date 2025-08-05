export default function CommunityImpact() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* Decorative Line Design - Variant 2 */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-400 to-amber-600 max-w-40"></div>
            <div className="mx-4 flex items-center">
              <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
              <div className="mx-3 flex items-center">
                <div className="w-8 h-px bg-amber-600"></div>
                <div className="mx-1 w-6 h-6 border-2 border-amber-600 rounded-full bg-white flex items-center justify-center relative">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  <div className="absolute -top-1 -left-1 w-2 h-2 border border-amber-400 rounded-full"></div>
                  <div className="absolute -bottom-1 -right-1 w-2 h-2 border border-amber-400 rounded-full"></div>
                </div>
                <div className="w-8 h-px bg-amber-600"></div>
              </div>
              <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
            </div>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-amber-400 to-amber-600 max-w-40"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
            Built by the People, For the People of Africa
          </h2>
          
          {/* Bottom decorative element - Variant 2 */}
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-amber-600"></div>
            <div className="mx-4 flex items-center">
              <div className="w-1.5 h-1.5 bg-amber-600 rounded-full"></div>
              <div className="mx-2 w-3 h-px bg-amber-600"></div>
              <div className="w-2.5 h-2.5 bg-amber-600 rounded-full"></div>
              <div className="mx-2 w-3 h-px bg-amber-600"></div>
              <div className="w-1.5 h-1.5 bg-amber-600 rounded-full"></div>
            </div>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-amber-600"></div>
          </div>
          
          <p className="text-xl text-amber-700 max-w-3xl mx-auto">
            Born from the innovation labs of JKUAT, this platform represents a new generation of African tech pioneers democratizing access to continental data, amplifying research opportunities, and ensuring our stories reach every corner of the globe.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          <div className="text-center">
            <div className="text-4xl font-bold text-amber-600 mb-2">120+</div>
            <div className="text-amber-700">Datasets Available</div>
          </div>
          {/* Vertical line 1 - hidden on mobile, visible on lg+ */}
          <div className="hidden lg:block absolute left-1/4 top-0 bottom-0 w-0.5 bg-amber-400/60"></div>
          
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-600 mb-2">850+</div>
            <div className="text-amber-700">Community Downloads</div>
          </div>
          {/* Vertical line 2 - hidden on mobile, visible on lg+ */}
          <div className="hidden lg:block absolute left-2/4 top-0 bottom-0 w-0.5 bg-amber-400/60"></div>
          
          <div className="text-center">
            <div className="text-4xl font-bold text-amber-800 mb-2">45+</div>
            <div className="text-amber-700">Active Contributors</div>
          </div>
          {/* Vertical line 3 - hidden on mobile, visible on lg+ */}
          <div className="hidden lg:block absolute left-3/4 top-0 bottom-0 w-0.5 bg-amber-400/60"></div>
          
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-700 mb-2">15</div>
            <div className="text-amber-700">African Countries</div>
          </div>
          
          {/* Vertical line for md breakpoint - between first two columns */}
          <div className="hidden md:block lg:hidden absolute left-2/4 top-0 bottom-0 w-0.5 bg-amber-400/60"></div>
        </div>
      </div>
    </section>
  );
}
