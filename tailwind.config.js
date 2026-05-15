/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        bg: '#050505',
        surface: '#0f0f0f',
        card: '#161616',
        cborder: '#222',
        rose: '#ff3d5a',
        rose2: '#cc2244',
        maroon: '#7a1528',
        violet: '#7c3aed',
        violet2: '#a855f7',
        cyan: '#06b6d4',
        amber: '#f59e0b',
        muted: '#666',
        dim: '#333',
      },
      animation: {
        'ticker': 'ticker 30s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 25s linear infinite',
      },
      keyframes: {
        ticker: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        float: { '0%,100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-14px)' } },
      }
    },
  },
  plugins: [],
}


