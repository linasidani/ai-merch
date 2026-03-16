/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: '#111111',
        paper: '#ffffff',
        mist: '#f5f5f5',
        blue: { DEFAULT: '#6b7cff', light: '#eef0ff' },
        coral: { DEFAULT: '#ff6b6b', light: '#fff0f0' },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      keyframes: {
        fadeUp: { '0%': { opacity:'0', transform:'translateY(20px)' }, '100%': { opacity:'1', transform:'translateY(0)' } },
        fadeIn: { '0%': { opacity:'0' }, '100%': { opacity:'1' } },
        shimmer: { '0%': { backgroundPosition:'-600px 0' }, '100%': { backgroundPosition:'600px 0' } },
        float: { '0%,100%': { transform:'translateY(0px)' }, '50%': { transform:'translateY(-8px)' } },
        spin: { to: { transform: 'rotate(360deg)' } },
      },
      animation: {
        fadeUp: 'fadeUp 0.6s ease both',
        'fadeUp-1': 'fadeUp 0.6s 0.1s ease both',
        'fadeUp-2': 'fadeUp 0.6s 0.2s ease both',
        'fadeUp-3': 'fadeUp 0.6s 0.3s ease both',
        fadeIn: 'fadeIn 0.4s ease both',
        shimmer: 'shimmer 1.6s ease infinite',
        float: 'float 3s ease-in-out infinite',
        spin: 'spin 0.8s linear infinite',
      },
    },
  },
  plugins: [],
}
