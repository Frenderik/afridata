export default function TechnicalInfrastructureSection() {
  return (
    <section className="relative py-20 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/images/bg5.jpg)' }}>
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* Decorative Line Design */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white to-white max-w-32"></div>
            <div className="mx-4 flex items-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
              <div className="mx-2 flex flex-col items-center">
                <div className="w-6 h-px bg-white"></div>
                <div className="w-4 h-4 border-2 border-white rounded-full bg-white/20 backdrop-blur-sm my-1 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                </div>
                <div className="w-6 h-px bg-white"></div>
              </div>
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-white to-white max-w-32"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Cloud Infrastructure & Security
          </h2>
          
          {/* Bottom decorative element */}
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-white"></div>
            <div className="mx-3 flex items-center space-x-1">
              <div className="w-1 h-1 bg-white rounded-full"></div>
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <div className="w-1 h-1 bg-white rounded-full"></div>
            </div>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-white"></div>
          </div>
          
          <p className="text-lg lg:text-xl text-white max-w-3xl mx-auto">
            Enterprise-grade infrastructure ensuring your data is secure and always available
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 backdrop-blur-lg bg-white/10 rounded-2xl shadow-2xl border border-white/20 hover:bg-white/20 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="w-16 h-16 backdrop-blur-sm bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/30">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-3 text-white">Secure Upload</h3>
            <p className="text-white/90 text-sm leading-relaxed">End-to-end encryption during upload and storage</p>
          </div>

          <div className="text-center p-6 backdrop-blur-lg bg-white/10 rounded-2xl shadow-2xl border border-white/20 hover:bg-white/20 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="w-16 h-16 backdrop-blur-sm bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/30">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-3 text-white">Cloud Storage</h3>
            <p className="text-white/90 text-sm leading-relaxed">Scalable cloud infrastructure with automatic backups</p>
          </div>

          <div className="text-center p-6 backdrop-blur-lg bg-white/10 rounded-2xl shadow-2xl border border-white/20 hover:bg-white/20 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="w-16 h-16 backdrop-blur-sm bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/30">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-3 text-white">Fast Discovery</h3>
            <p className="text-white/90 text-sm leading-relaxed">Advanced indexing for lightning-fast search results</p>
          </div>
        </div>
      </div>
    </section>
  );
}
