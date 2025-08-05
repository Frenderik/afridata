'use client'

import HeroSection from './components/HeroSection'
import DataWorkflowSection from './components/DataWorkflowSection'
import PlatformFeaturesSection from './components/PlatformFeaturesSection'
import TechnicalInfrastructureSection from './components/TechnicalInfrastructureSection'
import CTASection from './components/CTASection'

export default function HowItWorks() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <DataWorkflowSection />
      <PlatformFeaturesSection />
      <TechnicalInfrastructureSection />
      <CTASection />
    </div>
  );
}
