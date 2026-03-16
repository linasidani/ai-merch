import { useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Generator from './components/Generator';
import FeaturedDrops from './components/FeaturedDrops';
import HowItWorks from './components/HowItWorks';

export default function App() {
  const generatorRef = useRef<HTMLElement>(null!);

  const scrollToGenerator = () => {
    generatorRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-paper">
      <Navbar onScrollToGenerator={scrollToGenerator} />
      <Hero onScrollToGenerator={scrollToGenerator} />
      <Generator sectionRef={generatorRef} />
      <FeaturedDrops />
      <HowItWorks />

      <footer className="px-6 md:px-16 py-10 border-t border-ink/8">
        <div className="max-w-5xl mx-auto flex items-center justify-between text-xs text-ink/30 font-mono">
          <span>© 2026 Merch.ai — Built with React + TypeScript</span>
          <span>Printful API · Claude API · Vite</span>
        </div>
      </footer>
    </div>
  );
}
