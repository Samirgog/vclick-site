/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
      },
      colors: {
        ink: '#09090f',
        mist: '#a6afc3',
        line: 'rgba(255,255,255,0.1)',
      },
      boxShadow: {
        glow: '0 20px 80px rgba(66, 153, 225, 0.22)',
        panel: '0 20px 60px rgba(6, 8, 18, 0.55)',
      },
      backgroundImage: {
        'hero-radial':
          'radial-gradient(circle at top, rgba(125, 211, 252, 0.2), transparent 32%), radial-gradient(circle at 20% 20%, rgba(147, 51, 234, 0.16), transparent 28%), radial-gradient(circle at 80% 0%, rgba(244, 114, 182, 0.18), transparent 30%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseLine: {
          '0%, 100%': { opacity: '0.45' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        pulseLine: 'pulseLine 3.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
