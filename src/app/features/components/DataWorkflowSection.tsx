'use client'

import { useState } from 'react'

interface WorkflowStep {
  title: string;
  description: string;
  icon: string;
  details: string;
  simulation: string;
}

const workflowSteps: WorkflowStep[] = [
  {
    title: "Data Collection",
    description: "Researchers upload datasets from across Africa",
    icon: "📊",
    details: "African researchers, institutions, and organizations upload their datasets to our secure cloud infrastructure.",
    simulation: "User uploads → Validation → Metadata extraction → Storage"
  },
  {
    title: "Cloud Processing", 
    description: "Data is processed and stored on secure cloud servers",
    icon: "☁️",
    details: "Our cloud infrastructure automatically processes, validates, and stores data with proper backup and security measures.",
    simulation: "Cloud validation → Format standardization → Backup creation → Index generation"
  },
  {
    title: "Quality Assurance",
    description: "Automated and manual quality checks ensure data integrity", 
    icon: "✅",
    details: "Multiple validation layers ensure data quality, completeness, and compliance with our standards.",
    simulation: "Format check → Completeness validation → Quality scoring → Approval process"
  },
  {
    title: "Discoverability",
    description: "Data becomes searchable and accessible to the community",
    icon: "🔍", 
    details: "Approved datasets are indexed and made discoverable through our search and browse features.",
    simulation: "Indexing → Categorization → Search optimization → Public access"
  }
];

export default function DataWorkflowSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-amber-100/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-100/40 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-orange-100/20 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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
            Data Processing Workflow
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
            See how datasets flow through our system from upload to discovery
          </p>
        </div>

        {/* Revolutionary 3D-Style Workflow Visualization */}
        <div className="relative">
          {/* Floating Data Particles Animation */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className={`absolute w-2 h-2 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full opacity-60 animate-bounce`}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>

          {/* Interactive 3D Timeline Container */}
          <div className="relative bg-gradient-to-br from-amber-50/80 to-yellow-50/80 backdrop-blur-sm rounded-3xl p-8 border border-amber-200/50 shadow-2xl">
            
            {/* Interactive Instructions */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-100 to-yellow-100 px-6 py-3 rounded-full border border-amber-200 shadow-sm">
                <div className="w-3 h-3 bg-amber-500 rounded-full animate-pulse"></div>
                <span className="text-amber-800 font-semibold text-sm">
                  👆 Click each step below to explore the interactive workflow
                </span>
              </div>
            </div>

            {/* 3D Workflow Steps */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              {workflowSteps.map((step, index) => (
                <div key={index} className="relative flex flex-col items-center group">
                  {/* 3D Step Button */}
                  <button
                    onClick={() => setActiveStep(index)}
                    className={`relative w-20 h-20 mb-4 transform transition-all duration-500 ${
                      activeStep === index 
                        ? 'scale-125 rotate-12 -translate-y-4' 
                        : activeStep > index 
                        ? 'scale-110' 
                        : 'hover:scale-105'
                    }`}
                  >
                    {/* Button Shadow */}
                    <div className={`absolute inset-0 rounded-2xl transition-all duration-300 ${
                      activeStep === index
                        ? 'bg-gradient-to-br from-amber-600/40 to-yellow-600/40 blur-lg scale-150'
                        : 'bg-amber-300/20 blur-md'
                    }`} />
                    
                    {/* Main Button */}
                    <div className={`relative w-full h-full rounded-2xl flex items-center justify-center text-2xl transition-all duration-300 border-2 ${
                      activeStep === index 
                        ? 'bg-gradient-to-br from-amber-600 to-yellow-600 text-white border-amber-400 shadow-2xl' 
                        : activeStep > index 
                        ? 'bg-gradient-to-br from-yellow-500 to-amber-500 text-white border-yellow-400 shadow-lg' 
                        : 'bg-gradient-to-br from-amber-100 to-yellow-100 text-amber-950 border-amber-300 shadow-md hover:shadow-lg'
                    }`}>
                      <span className="relative z-10">{step.icon}</span>
                      
                      {/* Animated Ring for Active Step */}
                      {activeStep === index && (
                        <div className="absolute inset-0 rounded-2xl border-2 border-white/50 animate-ping" />
                      )}
                    </div>
                  </button>

                  {/* Step Info */}
                  <div className="text-center max-w-40">
                    <h3 className={`font-bold text-sm mb-2 transition-all duration-300 ${
                      activeStep === index ? 'text-amber-600 text-base' : 'text-amber-950'
                    }`}>
                      {step.title}
                    </h3>
                    <p className="text-xs text-amber-900 leading-tight">
                      {step.description}
                    </p>
                  </div>

                  {/* Connecting Lines with Animation */}
                  {index < workflowSteps.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-20 w-full h-0.5 opacity-0">
                      <div className={`h-full transition-all duration-1000 ${
                        activeStep > index ? 'bg-gradient-to-r from-yellow-600 to-amber-600' : 'bg-amber-300'
                      }`} />
                      
                      {/* Animated Data Flow Particles */}
                      {activeStep > index && (
                        <div className="absolute top-0 left-0 w-2 h-2 bg-white rounded-full animate-pulse">
                          <div className="absolute inset-0 bg-yellow-400 rounded-full animate-ping" />
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Revolutionary Active Step Display */}
            <div className={`relative transition-all duration-700 transform ${
              activeStep !== undefined ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              <div className="relative rounded-3xl p-8 shadow-2xl overflow-hidden bg-cover bg-center bg-no-repeat border border-amber-200/50" style={{ backgroundImage: 'url(/images/bg7.jpg)' }}>
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-black/40 rounded-3xl"></div>
                
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f59e0b' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                  }}></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative">
                  {/* Step Details */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="text-4xl">{workflowSteps[activeStep].icon}</div>
                      <h3 className="text-2xl font-bold text-white">
                        {workflowSteps[activeStep].title}
                      </h3>
                    </div>
                    
                    <p className="text-white/90 leading-relaxed text-lg">
                      {workflowSteps[activeStep].details}
                    </p>
                    
                    {/* Enhanced Process Flow */}
                    <div className="backdrop-blur-lg bg-white/10 p-6 rounded-2xl border border-white/20">
                      <div className="font-bold text-white mb-3 flex items-center gap-2">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                        </svg>
                        Process Flow:
                      </div>
                      <div className="text-white/90 font-mono text-sm backdrop-blur-sm bg-white/10 p-3 rounded-lg">
                        {workflowSteps[activeStep].simulation}
                      </div>
                    </div>
                  </div>

                  {/* Mind-Blowing 3D Visualization */}
                  <div className="flex items-center justify-center">
                    <div className="relative w-full max-w-md">
                      {/* 3D Container */}
                      <div className="relative transform-gpu" style={{ perspective: '1000px' }}>
                        <div 
                          className="relative backdrop-blur-xl bg-white/5 rounded-3xl p-8 shadow-2xl transition-transform duration-700 hover:transform-none border border-white/10"
                          style={{ 
                            transform: 'rotateY(12deg)',
                            transformStyle: 'preserve-3d'
                          }}
                        >
                          {/* Floating Elements */}
                          <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-yellow-400/70 to-amber-500/70 rounded-full animate-bounce delay-100" />
                          <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-br from-amber-400/70 to-orange-500/70 rounded-full animate-bounce delay-300" />
                          
                          {/* Central Processing Visual */}
                          <div className="relative">
                            {/* Pulsing Center */}
                            <div className="mx-auto w-20 h-20 backdrop-blur-lg bg-amber-600/20 rounded-2xl flex items-center justify-center mb-6 shadow-xl relative border border-amber-400/30">
                              <div className="text-white text-2xl">{workflowSteps[activeStep].icon}</div>
                              <div className="absolute inset-0 bg-white/10 rounded-2xl animate-ping" />
                            </div>

                            {/* Processing Bars */}
                            <div className="space-y-3">
                              {[...Array(4)].map((_, i) => (
                                <div key={i} className="relative">
                                  <div className="h-3 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm border border-white/20">
                                    <div 
                                      className="h-full bg-gradient-to-r from-amber-400/60 to-yellow-400/60 rounded-full animate-pulse transition-all duration-1000"
                                      style={{ 
                                        width: `${70 + Math.random() * 30}%`,
                                        animationDelay: `${i * 200}ms`
                                      }}
                                    />
                                  </div>
                                </div>
                              ))}
                            </div>

                            {/* Status Indicators */}
                            <div className="grid grid-cols-2 gap-3 mt-6">
                              <div className="backdrop-blur-xl bg-white/5 rounded-xl p-3 text-center border border-white/10 shadow-lg">
                                <div className="text-xs font-semibold text-white/80">Status</div>
                                <div className="text-white/70 text-sm flex items-center justify-center gap-1">
                                  <div className="w-2 h-2 bg-green-400/80 rounded-full animate-pulse" />
                                  Active
                                </div>
                              </div>
                              <div className="backdrop-blur-xl bg-white/5 rounded-xl p-3 text-center border border-white/10 shadow-lg">
                                <div className="text-xs font-semibold text-white/80">Progress</div>
                                <div className="text-white/70 text-sm font-mono">
                                  {Math.floor((activeStep + 1) / workflowSteps.length * 100)}%
                                </div>
                              </div>
                            </div>

                            {/* Orbiting Elements */}
                            <div className="absolute inset-0 pointer-events-none">
                              {[...Array(3)].map((_, i) => (
                                <div
                                  key={i}
                                  className="absolute w-3 h-3 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full opacity-70"
                                  style={{
                                    animation: `orbit-${i} 4s linear infinite`,
                                    animationDelay: `${i * 1.33}s`,
                                    transformOrigin: '50px 50px',
                                    '--orbit-rotation': `${i * 120}deg`
                                  } as React.CSSProperties}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add orbit animations using a style tag in the head */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes orbit-0 {
            from { transform: rotate(0deg) translateX(60px) rotate(0deg); }
            to { transform: rotate(360deg) translateX(60px) rotate(-360deg); }
          }
          @keyframes orbit-1 {
            from { transform: rotate(120deg) translateX(60px) rotate(-120deg); }
            to { transform: rotate(480deg) translateX(60px) rotate(-480deg); }
          }
          @keyframes orbit-2 {
            from { transform: rotate(240deg) translateX(60px) rotate(-240deg); }
            to { transform: rotate(600deg) translateX(60px) rotate(-600deg); }
          }
        `
      }} />
    </section>
  );
}
