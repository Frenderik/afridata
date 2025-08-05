export default function Datasets() {
  const datasetCategories = [
    {
      title: "Healthcare & Medicine",
      description: "Disease surveillance, hospital capacity, public health metrics across African regions",
      icon: "🏥",
      datasets: "15+ Datasets",
      examples: ["COVID-19 Tracking Data", "Malaria Prevention Stats", "Healthcare Facility Mapping"]
    },
    {
      title: "Agriculture & Food Security", 
      description: "Crop yields, climate patterns, farming practices, and food distribution data",
      icon: "🌾",
      datasets: "28+ Datasets",
      examples: ["Cassava Production Data", "Rainfall Patterns", "Market Price Tracking"]
    },
    {
      title: "Education & Research",
      description: "Academic performance, literacy rates, educational infrastructure, research publications",
      icon: "🎓",
      datasets: "22+ Datasets", 
      examples: ["University Rankings", "Primary School Enrollment", "Research Output Metrics"]
    },
    {
      title: "Economics & Finance",
      description: "Market data, economic indicators, financial inclusion, mobile money adoption",
      icon: "💰",
      datasets: "31+ Datasets",
      examples: ["GDP Growth Trends", "Mobile Money Usage", "SME Performance Data"]
    },
    {
      title: "Technology & Innovation",
      description: "Digital adoption, internet penetration, startup ecosystems, tech infrastructure",
      icon: "💻",
      datasets: "18+ Datasets",
      examples: ["Internet Usage Stats", "Tech Hub Mapping", "Digital Skills Assessment"]
    },
    {
      title: "Social & Demographics",
      description: "Population studies, urbanization patterns, cultural practices, social behavior",
      icon: "👥",
      datasets: "25+ Datasets",
      examples: ["Urban Migration Patterns", "Youth Demographics", "Cultural Practice Studies"]
    }
  ];

  const featuredDatasets = [
    {
      title: "Kenya Coffee Production Analysis",
      author: "Agricultural Research Institute",
      description: "Comprehensive analysis of coffee production across Kenya&apos;s coffee-growing regions from 2015-2024. Includes yield data, quality metrics, and climate correlations.",
      downloads: "1,234",
      views: "5,678",
      format: "CSV",
      size: "2.3 MB",
      category: "Agriculture"
    },
    {
      title: "Nigerian Health Facilities Database",
      author: "Ministry of Health Nigeria",
      description: "Complete database of health facilities across Nigeria including location, capacity, services offered, and patient flow data.",
      downloads: "892",
      views: "3,456",
      format: "JSON",
      size: "15.7 MB",
      category: "Healthcare"
    },
    {
      title: "East African University Rankings",
      author: "Education Research Consortium",
      description: "Academic performance metrics, research output, and infrastructure data for universities across East African countries.",
      downloads: "654",
      views: "2,890",
      format: "Excel",
      size: "4.2 MB",
      category: "Education"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-600 to-amber-800 text-white py-20 pt-32 sm:pt-28 lg:pt-24 min-h-[60vh] -mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
          <div className="text-center">

            <h1 className="text-3xl sm:text-4xl md:text-6xl font-black mb-6 leading-tight tracking-tight text-white">
              Discover African 
              <span className="bg-gradient-to-r from-amber-200 via-yellow-200 to-amber-200 bg-clip-text text-transparent"> Datasets</span>
            </h1>
            <p className="text-lg sm:text-xl text-amber-100 max-w-3xl mx-auto mb-10">
              Access comprehensive datasets that capture the African experience. From agriculture to technology, 
              find data that reflects local contexts and drives meaningful research.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="https://afridata-commons-1.onrender.com/dataset/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-10 py-4 overflow-hidden bg-white text-amber-800 font-bold text-lg rounded-2xl shadow-2xl transition-all duration-500 hover:scale-110 hover:shadow-amber-400/50"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-amber-400 via-yellow-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                <span className="absolute inset-0 w-full h-full bg-white/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative flex items-center gap-3 group-hover:text-white transition-colors duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  Browse All Datasets
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
                  Upload Your Data & Earn
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Data Categories */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            {/* Decorative Line Design */}
            <div className="flex items-center justify-center mb-8">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-400 to-amber-600 max-w-32"></div>
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
              <div className="flex-1 h-px bg-gradient-to-l from-transparent via-amber-400 to-amber-600 max-w-32"></div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
              Data Categories We Collect
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
            
            <p className="text-lg lg:text-xl text-amber-700 max-w-3xl mx-auto">
              Comprehensive datasets spanning all aspects of African development and innovation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {datasetCategories.map((category, index) => (
              <div key={index} className="bg-white border border-amber-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-amber-300">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-amber-900">{category.title}</h3>
                <p className="text-amber-700 mb-4 leading-relaxed">{category.description}</p>
                <div className="text-sm font-semibold text-amber-600 mb-4 bg-amber-100 px-3 py-1 rounded-full inline-block">{category.datasets}</div>
                <div className="space-y-2">
                  <div className="text-sm font-semibold text-amber-800 mb-2">Featured Examples:</div>
                  {category.examples.map((example, idx) => (
                    <div key={idx} className="text-sm text-amber-600 flex items-center">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2"></div>
                      {example}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Datasets */}
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
              Featured Datasets
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
            
            <p className="text-lg lg:text-xl text-amber-700">
              High-quality datasets from our community of African researchers
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredDatasets.map((dataset, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 border border-amber-200">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {dataset.category}
                    </span>
                    <span className="text-sm font-medium text-amber-700 bg-amber-100 px-2 py-1 rounded">{dataset.format}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-amber-900">{dataset.title}</h3>
                  <p className="text-sm text-amber-600 mb-2 font-medium">by {dataset.author}</p>
                  <p className="text-amber-700 mb-6 text-sm leading-relaxed">{dataset.description}</p>
                  
                  <div className="flex items-center justify-between text-xs text-amber-600 mb-6 bg-amber-50 p-3 rounded-lg">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                      </svg>
                      {dataset.views} views
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z"/>
                      </svg>
                      {dataset.downloads}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M10 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2h-8l-2-2z"/>
                      </svg>
                      {dataset.size}
                    </span>
                  </div>
                  
                  <a
                    href="https://afridata-commons-1.onrender.com/dataset/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-amber-600 to-amber-700 text-white py-3 px-4 rounded-xl hover:from-amber-700 hover:to-amber-800 transition-all duration-300 text-center block font-semibold hover:shadow-lg"
                  >
                    View Dataset
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upload & Earn Section */}
      <section className="relative py-20 text-white overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/bg3.jpg')"
          }}
        ></div>
        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Decorative Line Design - Bright white for visibility */}
            <div className="flex items-center justify-center mb-8">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/70 to-white max-w-32"></div>
              <div className="mx-4 flex items-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
                <div className="mx-2 flex flex-col items-center">
                  <div className="w-5 h-px bg-white"></div>
                  <div className="w-4 h-4 border-2 border-white rounded-full bg-white/20 my-1 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  </div>
                  <div className="w-5 h-px bg-white"></div>
                </div>
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <div className="flex-1 h-px bg-gradient-to-l from-transparent via-white/70 to-white max-w-32"></div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Upload Your Data & Earn Revenue
            </h2>
            
            {/* Bottom decorative element */}
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-white"></div>
              <div className="mx-3 flex items-center space-x-1">
                <div className="w-1 h-1 bg-white rounded-full"></div>
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <div className="w-1 h-1 bg-white rounded-full"></div>
              </div>
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-white"></div>
            </div>
            
            <p className="text-lg sm:text-xl text-white mb-12 max-w-3xl mx-auto">
              Share your research data with the African community and earn from downloads. 
              High-quality datasets receive recognition and monetary rewards.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center backdrop-blur-lg bg-white/10 p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
                    <polyline points="14,2 14,8 20,8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10,9 9,9 8,9"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Upload Quality Data</h3>
                <p className="text-white leading-relaxed">Share clean, documented datasets relevant to African research</p>
              </div>
              
              <div className="text-center backdrop-blur-lg bg-white/10 p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="m22 21-3-3m0 0-3-3m3 3v-4.5M22 12v4.5"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Get Downloaded</h3>
                <p className="text-white leading-relaxed">Researchers across Africa discover and use your data</p>
              </div>
              
              <div className="text-center backdrop-blur-lg bg-white/10 p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M16 8l-4 4-4-4"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Earn Recognition & Revenue</h3>
                <p className="text-white leading-relaxed">Receive monetary rewards and academic recognition</p>
              </div>
            </div>
            
            <a 
              href="https://afridata-commons-1.onrender.com/accounts/?mode=signup"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-10 py-4 overflow-hidden bg-white text-amber-800 font-bold text-lg rounded-2xl shadow-2xl transition-all duration-500 hover:scale-110 hover:shadow-amber-400/50"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-amber-400 via-yellow-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <span className="absolute inset-0 w-full h-full bg-white/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center gap-3 group-hover:text-white transition-colors duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                Start Uploading Data
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
            Ready to Explore
            <span className="block bg-gradient-to-r from-amber-200 via-yellow-300 to-orange-300 bg-clip-text text-transparent">
              African Data?
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-amber-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join thousands of researchers accessing comprehensive African datasets on our main platform
          </p>
          
          <a 
            href="https://afridata-commons-1.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-12 py-5 overflow-hidden bg-white text-amber-800 font-bold text-xl rounded-2xl shadow-2xl transition-all duration-500 hover:scale-110 hover:shadow-amber-400/50"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-amber-400 via-yellow-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            <span className="absolute inset-0 w-full h-full bg-white/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative flex items-center gap-3 group-hover:text-white transition-colors duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              Visit AfriData Platform
            </span>
          </a>
          
          {/* Bottom Decorative Line */}
          <div className="flex items-center justify-center mt-12">
            <div className="h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent w-32"></div>
            <div className="w-1 h-1 bg-amber-300 rounded-full mx-3"></div>
            <div className="h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent w-32"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
