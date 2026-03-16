import { FEATURED_DROPS } from '../data/drops';

export default function FeaturedDrops() {
  return (
    <section className="px-6 md:px-16 py-24">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-end justify-between mb-14">
          <div>
            <span className="text-xs font-mono tracking-widest text-ink/40 uppercase">02 — Featured</span>
            <h2 className="font-display text-4xl md:text-5xl text-ink mt-3">
              Recent <span className="italic">drops</span>
            </h2>
          </div>
          <a href="#" className="text-sm text-ink/40 hover:text-ink transition-colors underline underline-offset-4 hidden md:block">
            View all →
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {FEATURED_DROPS.map((drop, i) => (
            <article
              key={drop.id}
              className="group cursor-pointer"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Design card */}
              <div className="aspect-square rounded-2xl overflow-hidden bg-mist relative mb-4 border border-ink/5 transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                <div
                  className="w-full h-full"
                  dangerouslySetInnerHTML={{ __html: drop.svgPattern.replace('200px', '100%').replace('height="200"', 'height="100%"') }}
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/5 transition-all duration-300 flex items-end p-4">
                  <span className="text-xs font-mono text-paper/0 group-hover:text-paper bg-ink/80 px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    Quick view
                  </span>
                </div>
                {/* Tag */}
                <div className="absolute top-3 left-3">
                  <span className="text-xs font-mono bg-paper/90 text-ink/60 px-2.5 py-1 rounded-full border border-ink/8">
                    {drop.tag}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-display text-lg text-ink">{drop.title}</h3>
                  <div className="flex gap-1 mt-1">
                    {drop.palette.map((c, j) => (
                      <div key={j} className="w-3 h-3 rounded-full border border-ink/10" style={{ background: c }}/>
                    ))}
                  </div>
                </div>
                <span className="text-sm font-medium text-ink/60">{drop.price} kr</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
