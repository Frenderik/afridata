export default function DataCategories() {
  return (
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
            Who We Are
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
          
          <p className="text-xl text-amber-700 max-w-4xl mx-auto">
            AfriData is Africa&apos;s first student-led data marketplace where local knowledge becomes valuable currency. 
            We democratize African data while rewarding contributors for sharing authentic insights.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-amber-200">
            <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17v4a2 2 0 002 2h4M13 13h4a2 2 0 012 2v4a2 2 0 01-2 2h-4m-6-4a2 2 0 01-2-2V9a2 2 0 012-2h2m0 10h4a2 2 0 002-2v-4a2 2 0 00-2-2H9m8-4V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-amber-900">Agriculture & Environment</h3>
            <p className="text-amber-700">
              Climate data, crop yields, farming practices, and environmental monitoring across African regions
            </p>
            <div className="mt-4 text-amber-600 font-semibold">24 Datasets</div>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-amber-200">
            <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-amber-900">Health & Demographics</h3>
            <p className="text-amber-700">
              Public health data, population studies, disease patterns, and healthcare accessibility metrics
            </p>
            <div className="mt-4 text-yellow-600 font-semibold">31 Datasets</div>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-amber-200">
            <div className="w-16 h-16 bg-amber-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-amber-900">Education & Research</h3>
            <p className="text-amber-700">
              Academic performance, literacy rates, educational infrastructure, and research findings
            </p>
            <div className="mt-4 text-amber-600 font-semibold">18 Datasets</div>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-amber-200">
            <div className="w-16 h-16 bg-yellow-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-amber-900">Economics & Finance</h3>
            <p className="text-amber-700">
              Market data, economic indicators, financial inclusion, and business performance metrics
            </p>
            <div className="mt-4 text-yellow-600 font-semibold">22 Datasets</div>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-amber-200">
            <div className="w-16 h-16 bg-amber-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-amber-900">Social & Cultural</h3>
            <p className="text-amber-700">
              Cultural practices, social behavior, urbanization patterns, and community development data
            </p>
            <div className="mt-4 text-amber-600 font-semibold">15 Datasets</div>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-amber-200">
            <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-amber-900">Technology & Innovation</h3>
              <p className="text-amber-700">
                Digital adoption, innovation indices, tech startups, and infrastructure development
              </p>
              <div className="mt-4 text-amber-600 font-semibold">10 Datasets</div>
            </div>
          </div>
        </div>
      
    </section>
  );
}
