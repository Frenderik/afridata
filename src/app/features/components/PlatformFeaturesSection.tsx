interface PlatformFeature {
  title: string;
  description: string;
  icon: string;
  benefits: string[];
}

const platformFeatures: PlatformFeature[] = [
  {
    title: "Smart Search & Discovery",
    description: "AI-powered search helps you find exactly the data you need",
    icon: "🎯",
    benefits: ["Advanced filtering", "Category browsing", "Related dataset suggestions", "Trending topics"]
  },
  {
    title: "Collaborative Platform",
    description: "Connect with other researchers and data contributors",
    icon: "🤝",
    benefits: ["Discussion forums", "Direct messaging", "Research collaboration", "Community feedback"]
  },
  {
    title: "Quality Assurance",
    description: "Multiple validation layers ensure high-quality datasets",
    icon: "⭐",
    benefits: ["Automated validation", "Peer review system", "Quality ratings", "Data standards compliance"]
  },
  {
    title: "Secure Infrastructure", 
    description: "Enterprise-grade security and reliable cloud storage",
    icon: "🔒",
    benefits: ["Data encryption", "Secure access controls", "Regular backups", "99.9% uptime"]
  }
];

export default function PlatformFeaturesSection() {
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
            Platform Features
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
          
          <p className="text-lg lg:text-xl text-amber-800">
            Powerful tools that make data sharing and discovery seamless
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {platformFeatures.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 border border-amber-200">
              <div className="flex items-start space-x-4">
                <div className="text-4xl">{feature.icon}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3 text-amber-900">{feature.title}</h3>
                  <p className="text-amber-800 mb-4 leading-relaxed">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-amber-900">
                        <svg className="w-4 h-4 text-amber-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
