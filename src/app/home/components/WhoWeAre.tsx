export default function WhoWeAre() {
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
            AfriData is Africa&apos;s premier data repository connecting researchers, students, and organizations 
            with authentic African datasets. We foster collaboration while respecting data contributors&apos; terms and agreements.
          </p>
        </div>
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left: Our Mission */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-amber-200 hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-amber-900 mb-4">Our Mission</h3>
            <p className="text-amber-700 text-lg leading-relaxed mb-6">
              We bridge the gap between Africa&apos;s rich data landscape and global research communities. 
              Our platform ensures that African voices are heard, stories are preserved, and 
              contributors are recognized and compensated based on their individual terms and agreements.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                <span className="text-amber-800 font-medium">Democratize access to African datasets</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></div>
                <span className="text-amber-800 font-medium">Support data contributors&apos; terms</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-amber-700 rounded-full mr-3"></div>
                <span className="text-amber-800 font-medium">Preserve authentic African narratives</span>
              </div>
            </div>
          </div>

          {/* Right: Why AfriData Matters */}
          <div className="bg-gradient-to-br from-amber-600 via-yellow-700 to-amber-800 rounded-2xl p-8 shadow-lg text-white">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Why AfriData Matters</h3>
            <p className="text-amber-100 text-lg leading-relaxed mb-6">
              African datasets have been underrepresented in global research for too long. 
              We&apos;re changing that by creating a collaborative ecosystem where local 
              knowledge is valued, accessible, and contributors maintain control over their data terms.
            </p>
            <div className="grid grid-cols-2 gap-4 relative">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">78%</div>
                <div className="text-amber-200 text-sm">Data Gap in Africa</div>
              </div>
              {/* Vertical separator line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-amber-300/50 transform -translate-x-1/2"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">120+</div>
                <div className="text-amber-200 text-sm">Datasets Available</div>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works - Process Steps */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg border border-amber-200 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-amber-900 mb-6 relative inline-block">
              How to Share & Access Data
              {/* Stylish underline */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-full">
                <div className="flex items-center justify-center">
                  <div className="w-16 h-px bg-gradient-to-r from-transparent to-amber-600"></div>
                  <div className="mx-2 flex items-center space-x-1">
                    <div className="w-1.5 h-1.5 bg-amber-600 rounded-full"></div>
                    <div className="w-8 h-px bg-amber-600"></div>
                    <div className="w-2.5 h-2.5 bg-amber-600 rounded-full"></div>
                    <div className="w-8 h-px bg-amber-600"></div>
                    <div className="w-1.5 h-1.5 bg-amber-600 rounded-full"></div>
                  </div>
                  <div className="w-16 h-px bg-gradient-to-l from-transparent to-amber-600"></div>
                </div>
              </div>
            </h3>
            <p className="text-xl text-amber-700 max-w-3xl mx-auto">
              Join our community of African researchers and data enthusiasts through our simple 3-step process
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center group">
              {/* Enhanced Number Badge */}
              <div className="relative mb-6 flex flex-col items-center">

                <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-amber-400/50 transition-shadow duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
              </div>
              <h4 className="text-xl font-bold text-amber-900 mb-3">Upload & Set Terms</h4>
              <p className="text-amber-700 leading-relaxed">
                Share your datasets, research findings, or surveys. Set your own terms - from open access 
                to download tokens or monetary agreements. You maintain full control over your data.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center group">
              {/* Enhanced Number Badge */}
              <div className="relative mb-6 flex flex-col items-center">

                <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-yellow-400/50 transition-shadow duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
              </div>
              <h4 className="text-xl font-bold text-amber-900 mb-3">Review & Publish</h4>
              <p className="text-amber-700 leading-relaxed">
                Our team reviews your submission for quality and authenticity. Once approved, 
                your dataset is published with your specified terms clearly displayed for potential users.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-600 to-yellow-700 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-amber-400/50 transition-shadow duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
              <h4 className="text-xl font-bold text-amber-900 mb-3">Connect & Collaborate</h4>
              <p className="text-amber-700 leading-relaxed">
                Researchers discover your data and connect based on your terms. Build relationships, 
                contribute to African research, and receive recognition or compensation as agreed.
              </p>
            </div>
          </div>

          {/* Flexible Terms */}
          <div className="mt-12 ">
            <div className="text-center">
              <h4 className="text-2xl font-bold text-amber-900 mb-6 relative inline-block">
                Flexible Data Terms
                {/* Stylish underline */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-full">
                  <div className="flex items-center justify-center">
                    <div className="w-16 h-px bg-gradient-to-r from-transparent to-amber-600"></div>
                    <div className="mx-2 flex items-center space-x-1">
                      <div className="w-1.5 h-1.5 bg-amber-600 rounded-full"></div>
                      <div className="w-8 h-px bg-amber-600"></div>
                      <div className="w-2.5 h-2.5 bg-amber-600 rounded-full"></div>
                      <div className="w-8 h-px bg-amber-600"></div>
                      <div className="w-1.5 h-1.5 bg-amber-600 rounded-full"></div>
                    </div>
                    <div className="w-16 h-px bg-gradient-to-l from-transparent to-amber-600"></div>
                  </div>
                </div>
              </h4>
              <p className="text-lg text-amber-700 mb-6">Choose how you want to share your data and what you need in return</p>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-2xl mb-2">🆓</div>
                  <div className="font-bold text-amber-600">Open Access</div>
                  <div className="text-amber-700 text-sm">Free for all researchers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">🪙</div>
                  <div className="font-bold text-yellow-600">Download Tokens</div>
                  <div className="text-amber-700 text-sm">Platform credit system</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">💰</div>
                  <div className="font-bold text-amber-700">Monetary Terms</div>
                  <div className="text-amber-700 text-sm">Direct agreements</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">🤝</div>
                  <div className="font-bold text-yellow-700">Collaboration</div>
                  <div className="text-amber-700 text-sm">Research partnerships</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
