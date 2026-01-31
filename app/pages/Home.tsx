import { Hero } from '@/app/components/Hero';
import { OurStory } from '@/app/components/OurStory';
import { Services } from '@/app/components/Services';
import { HowItWorks } from '@/app/components/HowItWorks';
import { OurMethod } from '@/app/components/OurMethod';
import { First30Days } from '@/app/components/First30Days';
import { WhyNotManageYourself } from '@/app/components/WhyNotManageYourself';
import { Profitability } from '@/app/components/Profitability';
import { DailyManagement } from '@/app/components/DailyManagement';
import { Pricing } from '@/app/components/Pricing';
import { PremiumServices } from '@/app/components/PremiumServices';
import { WhyChooseUs } from '@/app/components/WhyChooseUs';
import { Team } from '@/app/components/Team';
import { FinalPush } from '@/app/components/FinalPush';
import { Contact } from '@/app/components/Contact';
import { Navigation } from '@/app/components/Navigation';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <OurStory />
      <HowItWorks />
      <OurMethod />
      <First30Days />
      <WhyNotManageYourself />
      <Profitability />
      <Services />
      <DailyManagement />
      <Pricing />
      <PremiumServices />
      <WhyChooseUs />
      <Team />
      <FinalPush />
      <Contact />
    </div>
  );
}