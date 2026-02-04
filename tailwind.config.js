/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  theme: {
    extend: {
      fontFamily: {
        'louis-george-cafe': ['LOUIS GEORGE CAFE', 'Inter', 'sans-serif'],
        'sans': ['LOUIS GEORGE CAFE', 'Inter', 'sans-serif'],
        'linik': ['LOUIS GEORGE CAFE', 'Inter', 'sans-serif'], // Keep linik as alias for backward compatibility
      },
      colors: {
        'voala': {
          secondary: '#59514e',
          'off-white': '#FFFFFF',
          gold: '#C8A165',
          gray: '#5E5E5E',
          'light-gray': '#FAFAFA',
          accent: '#ede9e1',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'zoom-in': 'zoomIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        zoomIn: {
          '0%': { transform: 'scale(0.95)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      perspective: {
        '1000': '1000px',
      },
      transformStyle: {
        'preserve-3d': 'preserve-3d',
      },
      backfaceVisibility: {
        'hidden': 'hidden',
      },
      rotate: {
        'y-180': 'rotateY(180deg)',
      },
    },
  },
  plugins: [
    function({ addUtilities, addBase }) {
      const newUtilities = {
        '.perspective-1000': {
          perspective: '1000px',
        },
        '.transform-style-preserve-3d': {
          transformStyle: 'preserve-3d',
        },
        '.backface-hidden': {
          backfaceVisibility: 'hidden',
        },
        '.rotate-y-180': {
          transform: 'rotateY(180deg)',
        },
        '.gradient-text': {
          background: 'linear-gradient(to right, #5B5B5B, #1C1C1C)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
          'font-weight': '600',
        },
        '.gradient-highlight': {
          background: 'linear-gradient(90deg, #59514E, #ede9e1)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
          'display': 'inline-block',
          'font-weight': '700',
        },
        '.gradient-highlight-white': {
          background: 'linear-gradient(90deg, #cab6a4, #ede9e1)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
          'display': 'inline-block',
          'font-weight': '700',
        },
        '.hero-gradient': {
          background: 'linear-gradient(90deg, #cab6a4, #ede9e1)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
          'display': 'inline-block',
          'font-weight': '700',
        },
      }
      addUtilities(newUtilities)
      
      // Add base styles for HTML tags
      addBase({
        'strong': {
          fontWeight: '700',
        },
        'em': {
          fontStyle: 'italic',
        },
      })
    }
  ],
};