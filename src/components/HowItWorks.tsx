const STEPS = [
  {
    num: '01',
    title: 'Write your idea',
    desc: 'Describe any concept — a vibe, an image, a feeling. The more specific, the better.',
    color: 'bg-blue-light text-blue',
  },
  {
    num: '02',
    title: 'AI generates design',
    desc: 'Our AI interprets your prompt and creates a unique graphic in seconds.',
    color: 'bg-coral-light text-coral',
  },
  {
    num: '03',
    title: 'Preview on apparel',
    desc: 'See your design on t-shirts, hoodies, tote bags and posters in real-time.',
    color: 'bg-blue-light text-blue',
  },
  {
    num: '04',
    title: 'Order your product',
    desc: 'One click to order. Printed on-demand and shipped directly to your door.',
    color: 'bg-coral-light text-coral',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="px-6 md:px-16 py-24 bg-ink text-paper">
      <div className="max-w-5xl mx-auto">
        <div className="mb-14">
          <span className="text-xs font-mono tracking-widest text-paper/30 uppercase">03 — Process</span>
          <h2 className="font-display text-4xl md:text-5xl text-paper mt-3">
            How it <span className="italic text-blue">works</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {STEPS.map((step, i) => (
            <div key={i} className="group">
              <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl text-sm font-mono font-medium mb-5 ${step.color}`}>
                {step.num}
              </div>
              <h3 className="font-display text-xl text-paper mb-2">{step.title}</h3>
              <p className="text-sm text-paper/40 leading-relaxed">{step.desc}</p>
              {i < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-5 right-0 text-paper/20 text-lg">→</div>
              )}
            </div>
          ))}
        </div>

        {/* Brand quote */}
        <div className="mt-20 pt-14 border-t border-paper/8">
          <blockquote className="font-display text-2xl md:text-3xl text-paper/60 italic leading-snug max-w-2xl">
            "Future fashion created by humans and machines."
          </blockquote>
        </div>
      </div>
    </section>
  );
}
