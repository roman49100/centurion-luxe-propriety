import { Testimonials } from '@/app/components/Testimonials';
import { Navigation } from '@/app/components/Navigation';

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Testimonials />
    </div>
  );
}