import { FAQ } from '@/app/components/FAQ';
import { Navigation } from '@/app/components/Navigation';

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <FAQ />
    </div>
  );
}