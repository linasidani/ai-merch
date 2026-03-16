interface HeroProps {
  onScrollToGenerator: () => void;
}

export default function Hero({ onScrollToGenerator }: HeroProps) {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-16 pt-24 pb-16 relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(#11111108 1px, transparent 1px), linear-gradient(90deg, #11111108 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }}/>

      {/* Floating accent shapes */}
      <div className="absolute top-32 right-16 w-64 h-64 rounded-full opacity-5 bg-blue pointer-events-none animate-float" style={{ animationDelay: '0s' }}/>
      <div className="absolute bottom-24 left-8 w-40 h-40 rounded-full opacity-5 bg-coral pointer-events-none animate-float" style={{ animationDelay: '1.5s' }}/>

      <div className="max-w-5xl mx-auto w-full relative">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-8 animate-fadeUp">
          <span className="w-8 h-px bg-ink/20"/>
          <span className="text-xs font-mono tracking-widest text-ink/40 uppercase">AI-powered merch studio</span>
        </div>

        {/* Main headline */}
        <h1 className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.95] tracking-tight text-ink mb-8 animate-fadeUp-1">
          Design<br/>
          <span className="italic text-blue">unique</span> merch<br/>
          with AI
        </h1>

        {/* Sub */}
        <p className="text-lg md:text-xl text-ink/50 font-light max-w-lg mb-12 leading-relaxed animate-fadeUp-2">
          Describe your vision. Our AI generates a custom design.
          Preview it on apparel. Order in seconds.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 items-center animate-fadeUp-3">
          <button
            onClick={onScrollToGenerator}
            className="bg-ink text-paper px-8 py-4 rounded-full text-sm font-medium hover:bg-ink/80 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            Start Creating →
          </button>
          <a href="#how-it-works" className="text-sm text-ink/40 hover:text-ink transition-colors underline underline-offset-4">
            How it works
          </a>
        </div>

        {/* Stats row */}
        <div className="flex gap-10 mt-20 pt-10 border-t border-ink/8 animate-fadeUp-3">
          {[
            { num: '2.4k+', label: 'Designs generated' },
            { num: '< 10s', label: 'Generation time' },
            { num: '5 products', label: 'Available formats' },
          ].map(stat => (
            <div key={stat.label}>
              <p className="font-display text-2xl font-semibold text-ink">{stat.num}</p>
              <p className="text-xs text-ink/40 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
