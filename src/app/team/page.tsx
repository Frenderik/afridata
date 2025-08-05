import Image from 'next/image';

export default function Team() {
  const teamMembers = [
    {
      name: "Dr. Lawrence Nderu",
      position: "Principal Investigator, Founder - JHUB Africa",
      bio: "Leading researcher and founder of JHUB Africa, providing strategic guidance and academic oversight for AfriData Commons.",
      image: "/assets/ln.jpeg",
      linkedin: "#",
      github: "#",
      department: "JHUB Africa - JKUAT"
    },
    {
      name: "Felix Ombongi Ongaro",
      position: "Team Lead, Backend Developer",
      bio: "Computer Science student at JKUAT passionate about African data accessibility and leading the technical development of the platform.",
      image: "/assets/felix.jpg",
      linkedin: "#",
      github: "https://github.com/OmbongiFelix/AfriData-Commons.git",
      department: "School of Computing & Information Technology"
    },
    {
      name: "IRKE KONZOLO",
      position: "Frontend Developer",
      bio: "UI/UX focused developer creating intuitive and responsive interfaces for seamless data discovery and collaboration.",
      image: "/assets/lyke.jpg",
      linkedin: "#",
      github: "#",
      department: "School of Computing & Information Technology"
    },
    {
      name: "Joseph Kirika",
      position: "Full Stack Developer",
      bio: "Versatile developer working across the entire technology stack to build robust and scalable data-sharing solutions.",
      image: "/assets/joseph.jpg",
      linkedin: "#",
      github: "#",
      department: "School of Computing & Information Technology"
    },
       {
      name: "Gem Maker",
      position: "Cybersecurity Specialist & Frontend Developer",
      bio: "Security-focused developer ensuring data protection and creating secure, user-friendly interfaces for the platform.",
      image: "/assets/profile.jpeg",
      linkedin: "#",
      github: "#",
      department: "School of Computing & Information Technology"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-600 to-amber-800 text-white py-20 pt-32 sm:pt-28 lg:pt-24 min-h-[60vh] -mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
          <div className="text-center">
            {/* Decorative Line Design */}
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
            
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-black mb-6 leading-tight tracking-tight text-white">
              Meet Our Team
            </h1>
            
            {/* Bottom decorative element */}
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-white/60"></div>
              <div className="mx-3 flex items-center space-x-1">
                <div className="w-1 h-1 bg-white/80 rounded-full"></div>
                <div className="w-2 h-2 bg-white/90 rounded-full"></div>
                <div className="w-1 h-1 bg-white/80 rounded-full"></div>
              </div>
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-white/60"></div>
            </div>
            
            <p className="text-lg sm:text-xl text-amber-100 max-w-3xl mx-auto">
              A diverse team of developers, researchers, and innovators from Jomo Kenyatta University building Africa&apos;s open data future.
              We&apos;re passionate about making African data accessible to researchers and innovators across the continent.
            </p>
          </div>
        </div>
      </section>

      {/* Student Development Team */}
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
            
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">The AfriData Team</h2>
            
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
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-gray-300 transform hover:-translate-y-1">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <Image 
                    src={member.image} 
                    alt={member.name}
                    fill
                    className={`object-cover hover:scale-105 transition-transform duration-300 ${
                      member.name === "IRKE KONZOLO" ? "object-top" : "object-[center_20%]"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-800/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-800 mb-1 leading-tight">{member.name}</h3>
                  <p className="text-amber-600 font-semibold mb-2 text-sm">{member.position}</p>
                  <p className="text-xs text-gray-600 mb-3 opacity-80">{member.department}</p>
                  <p className="text-gray-700 mb-4 text-sm leading-relaxed line-clamp-3">{member.bio}</p>
                  <div className="flex space-x-3 pt-2 border-t border-gray-100">
                    <a 
                      href={member.linkedin} 
                      className="text-gray-600 hover:text-amber-600 transition-colors p-1 rounded-full hover:bg-amber-50"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a 
                      href={member.github} 
                      className="text-gray-600 hover:text-amber-600 transition-colors p-1 rounded-full hover:bg-amber-50"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image 
            src="/images/bg4.jpg" 
            alt="Background"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            {/* Decorative Line Design - Light for dark background */}
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
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Culture</h2>
            
            {/* Bottom decorative element */}
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-white/60"></div>
              <div className="mx-3 flex items-center space-x-1">
                <div className="w-1 h-1 bg-white/80 rounded-full"></div>
                <div className="w-2 h-2 bg-white/90 rounded-full"></div>
                <div className="w-1 h-1 bg-white/80 rounded-full"></div>
              </div>
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-white/60"></div>
            </div>
            
            <p className="text-lg sm:text-xl text-amber-100 max-w-3xl mx-auto">
              We foster an environment where innovation thrives and every voice is heard
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center backdrop-blur-lg bg-white/10 p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:border-white/40">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Innovation First</h3>
              <p className="text-amber-100">
                We encourage creative thinking and bold ideas that push boundaries.
              </p>
            </div>

            <div className="text-center backdrop-blur-lg bg-white/10 p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:border-white/40">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Diverse & Inclusive</h3>
              <p className="text-amber-100">
                Our strength comes from our diverse backgrounds and perspectives.
              </p>
            </div>

            <div className="text-center backdrop-blur-lg bg-white/10 p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:border-white/40">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Growth Mindset</h3>
              <p className="text-amber-100">
                Continuous learning and improvement are at the heart of everything we do.
              </p>
            </div>

            <div className="text-center backdrop-blur-lg bg-white/10 p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:border-white/40">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Impact Driven</h3>
              <p className="text-amber-100">
                We measure success by the positive impact we create in Africa.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="bg-gradient-to-br from-amber-600 via-yellow-700 to-amber-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Decorative Line Design - Light for dark background */}
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
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Experience AfriData Platform
          </h2>
          
          {/* Bottom decorative element */}
          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-white/60"></div>
            <div className="mx-3 flex items-center space-x-1">
              <div className="w-1 h-1 bg-white/80 rounded-full"></div>
              <div className="w-2 h-2 bg-white/90 rounded-full"></div>
              <div className="w-1 h-1 bg-white/80 rounded-full"></div>
            </div>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-white/60"></div>
          </div>
          
          <p className="text-lg sm:text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Explore our live platform with thousands of African datasets. Upload your data and earn from contributions!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-10">
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m0 0a9 9 0 01-9-9m9 9v-9m0 9l-3-3m3 3l3-3M3 12a9 9 0 019-9m0 0a9 9 0 019 9m-9-9v9m0-9l3 3m-3-3l-3 3" />
                </svg>
                Visit Main Platform
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                Upload Your Data
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
