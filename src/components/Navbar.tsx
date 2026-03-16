interface NavProps {
  onScrollToGenerator: () => void;
}

export default function Navbar({ onScrollToGenerator }: NavProps) {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-paper/80 backdrop-blur-md border-b border-ink/6">
      <div className="max-w-5xl mx-auto px-6 md:px-16 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-ink rounded-md flex items-center justify-center">
            <span className="text-paper text-xs font-display font-bold">M</span>
          </div>
          <span className="font-display font-semibold text-ink text-sm">Merch.ai</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm text-ink/50">
          <a href="#" className="hover:text-ink transition-colors">Drops</a>
          <a href="#how-it-works" className="hover:text-ink transition-colors">How it works</a>
          <a href="#" className="hover:text-ink transition-colors">Pricing</a>
        </div>

        <button
          onClick={onScrollToGenerator}
          className="text-sm bg-ink text-paper px-5 py-2.5 rounded-full hover:bg-ink/80 transition-all active:scale-95"
        >
          Create now
        </button>
      </div>
    </nav>
  );
}
