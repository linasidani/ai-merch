import { useState, useRef } from 'react';
import type { GenerationStatus } from '../types';
import type { DesignConcept } from '../services/aiGenerator';
import { generateDesign } from '../services/aiGenerator';

const EXAMPLE_PROMPTS = [
  'futuristic tiger in neon jungle',
  'minimal zen garden with geometric shapes',
  'retro space explorer with planets',
  'botanical illustration in ink style',
  'abstract ocean waves at midnight',
];

const PRODUCTS = [
  { id: 'tshirt', name: 'T-shirt', price: 349 },
  { id: 'hoodie', name: 'Hoodie', price: 549 },
  { id: 'tote', name: 'Tote Bag', price: 249 },
  { id: 'poster', name: 'Poster', price: 199 },
];

interface GeneratorProps {
  sectionRef: React.RefObject<HTMLElement>;
}

export default function Generator({ sectionRef }: GeneratorProps) {
  const [prompt, setPrompt] = useState('');
  const [status, setStatus] = useState<GenerationStatus>('idle');
  const [concept, setConcept] = useState<DesignConcept | null>(null);
  const [selectedProduct, setSelectedProduct] = useState(PRODUCTS[0]);
  const [addedToCart, setAddedToCart] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleGenerate = async () => {
    if (!prompt.trim() || status === 'generating') return;
    setStatus('generating');
    setConcept(null);
    setAddedToCart(false);
    try {
      const result = await generateDesign(prompt.trim());
      setConcept(result);
      setStatus('done');
    } catch {
      setStatus('error');
    }
  };

  const handleExampleClick = (p: string) => {
    setPrompt(p);
    inputRef.current?.focus();
  };

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2500);
  };

  return (
    <section ref={sectionRef} className="px-6 md:px-16 py-24 bg-mist">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="mb-14">
          <span className="text-xs font-mono tracking-widest text-ink/40 uppercase">01 — Generator</span>
          <h2 className="font-display text-4xl md:text-5xl text-ink mt-3">
            Describe your <span className="italic">idea</span>
          </h2>
        </div>

        {/* Input area */}
        <div className="bg-paper rounded-3xl border border-ink/8 p-6 md:p-8 shadow-sm mb-6">
          <div className="flex gap-3 items-center">
            <input
              ref={inputRef}
              value={prompt}
              onChange={e => setPrompt(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleGenerate()}
              placeholder="Describe your design idea…"
              className="flex-1 text-lg md:text-xl font-light text-ink placeholder:text-ink/25 bg-transparent outline-none"
            />
            <button
              onClick={handleGenerate}
              disabled={!prompt.trim() || status === 'generating'}
              className="flex-shrink-0 bg-ink text-paper px-6 py-3.5 rounded-2xl text-sm font-medium hover:bg-ink/80 disabled:opacity-40 transition-all active:scale-95 flex items-center gap-2"
            >
              {status === 'generating' ? (
                <>
                  <svg className="animate-spin w-3.5 h-3.5" viewBox="0 0 14 14" fill="none">
                    <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeOpacity="0.3" strokeWidth="2"/>
                    <path d="M7 1.5A5.5 5.5 0 0 1 12.5 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  Generating
                </>
              ) : 'Generate →'}
            </button>
          </div>

          {/* Example prompts */}
          <div className="mt-5 pt-5 border-t border-ink/6 flex flex-wrap gap-2">
            <span className="text-xs text-ink/30 mr-1 self-center">Try:</span>
            {EXAMPLE_PROMPTS.map(p => (
              <button
                key={p}
                onClick={() => handleExampleClick(p)}
                className="text-xs px-3 py-1.5 rounded-full border border-ink/10 text-ink/50 hover:border-blue hover:text-blue hover:bg-blue-light transition-all"
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        {/* Result area */}
        {status === 'generating' && (
          <div className="bg-paper rounded-3xl border border-ink/8 p-8 animate-fadeIn">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-5 h-5 border-2 border-blue border-t-transparent rounded-full animate-spin"/>
              <span className="text-sm text-ink/50">AI is designing your concept…</span>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="aspect-square rounded-2xl shimmer-bg animate-shimmer"/>
              <div className="space-y-3">
                {[80, 60, 70, 45].map((w, i) => (
                  <div key={i} className={`h-4 rounded-full shimmer-bg animate-shimmer`} style={{ width: `${w}%`, animationDelay: `${i*0.1}s` }}/>
                ))}
              </div>
            </div>
          </div>
        )}

        {status === 'done' && concept && (
          <div className="bg-paper rounded-3xl border border-ink/8 overflow-hidden animate-fadeIn">
            <div className="grid md:grid-cols-2">
              {/* Design preview */}
              <div className="p-8 border-b md:border-b-0 md:border-r border-ink/6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-xs font-mono text-blue uppercase tracking-wider">{concept.tag}</span>
                    <h3 className="font-display text-2xl text-ink mt-1">{concept.title}</h3>
                  </div>
                  <div className="flex gap-1.5">
                    {concept.palette.map((c, i) => (
                      <div key={i} className="w-5 h-5 rounded-full border border-ink/10 shadow-sm" style={{ background: c }}/>
                    ))}
                  </div>
                </div>

                {/* SVG design on mockup */}
                <div className="relative aspect-square rounded-2xl bg-mist flex items-center justify-center overflow-hidden">
                  <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full">
                    {/* T-shirt silhouette */}
                    <path
                      d="M62,44 L26,76 L52,88 L52,182 L148,182 L148,88 L174,76 L138,44 Q118,26 100,28 Q82,26 62,44Z"
                      fill="#ececec" stroke="#ddd" strokeWidth="1"
                    />
                  </svg>
                  {/* Design on shirt */}
                  <div
                    className="absolute"
                    style={{ width: '40%', top: '42%', left: '50%', transform: 'translate(-50%, -50%)' }}
                    dangerouslySetInnerHTML={{ __html: concept.svgPattern }}
                  />
                </div>

                <p className="text-xs text-ink/40 mt-3 font-mono">Style: {concept.style}</p>
              </div>

              {/* Product + CTA */}
              <div className="p-8 flex flex-col justify-between">
                <div>
                  <p className="text-xs font-mono tracking-widest text-ink/40 uppercase mb-4">Choose product</p>
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {PRODUCTS.map(p => (
                      <button
                        key={p.id}
                        onClick={() => setSelectedProduct(p)}
                        className={`p-3 rounded-xl border text-left transition-all ${
                          selectedProduct.id === p.id
                            ? 'border-ink bg-ink text-paper'
                            : 'border-ink/10 hover:border-ink/30'
                        }`}
                      >
                        <p className="text-sm font-medium">{p.name}</p>
                        <p className={`text-xs mt-0.5 ${selectedProduct.id === p.id ? 'text-paper/60' : 'text-ink/40'}`}>
                          {p.price} kr
                        </p>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-baseline justify-between mb-4">
                    <span className="font-display text-3xl text-ink">{selectedProduct.price} kr</span>
                    <span className="text-xs text-ink/40">incl. print + shipping</span>
                  </div>

                  <button
                    onClick={handleAddToCart}
                    className={`w-full py-4 rounded-2xl text-sm font-medium transition-all active:scale-[0.98] ${
                      addedToCart
                        ? 'bg-green-500 text-white'
                        : 'bg-blue text-white hover:bg-blue/90'
                    }`}
                  >
                    {addedToCart ? '✓ Added to cart' : `Add to cart — ${selectedProduct.price} kr`}
                  </button>

                  <button
                    onClick={() => { setStatus('idle'); setPrompt(''); setConcept(null); }}
                    className="w-full mt-2 py-3 text-xs text-ink/40 hover:text-ink transition-colors"
                  >
                    ← Generate another
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {status === 'error' && (
          <div className="bg-coral-light border border-coral/20 rounded-2xl p-5 text-coral text-sm animate-fadeIn">
            Something went wrong. Please try again.
          </div>
        )}
      </div>
    </section>
  );
}
