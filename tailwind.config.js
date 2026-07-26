/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: '#0A0A0F',
          soft: '#0B0F19',
          elevated: '#111827',
        },
        accent: {
          violet: '#8B5CF6',
          blue: '#3B82F6',
          cyan: '#22D3EE',
          fuchsia: '#D946EF',
        },
        ink: {
          DEFAULT: '#F8FAFC',
          muted: '#CBD5E1',
          dim: '#94A3B8',
        },
      },
      maxWidth: {
        content: '72rem', // max-w-6xl
      },
      spacing: {
        section: '6rem', // py-24
        'section-sm': '4rem',
        card: '1.5rem', // p-6
        'card-lg': '2rem', // p-8
        stack: '1rem',
        'stack-lg': '1.5rem',
        'stack-xl': '2rem',
      },
      borderRadius: {
        card: '1rem', // rounded-2xl
        pill: '9999px',
      },
      boxShadow: {
        glass: '0 8px 32px rgba(0, 0, 0, 0.35)',
        glow: '0 0 24px rgba(139, 92, 246, 0.35)',
        'glow-cyan': '0 0 24px rgba(34, 211, 238, 0.3)',
      },
      fontSize: {
        'display': ['3.5rem', { lineHeight: '1.1', fontWeight: '700', letterSpacing: '-0.02em' }],
        'display-sm': ['2.5rem', { lineHeight: '1.15', fontWeight: '700', letterSpacing: '-0.02em' }],
        'section': ['2rem', { lineHeight: '1.2', fontWeight: '700', letterSpacing: '-0.01em' }],
      },
      backgroundImage: {
        'accent-gradient':
          'linear-gradient(135deg, #8B5CF6 0%, #D946EF 50%, #22D3EE 100%)',
        'accent-gradient-soft':
          'linear-gradient(135deg, rgba(139,92,246,0.2), rgba(34,211,238,0.15))',
      },
      transitionDuration: {
        fast: '150ms',
        base: '200ms',
        slow: '250ms',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'blob-drift': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(30px, -20px) scale(1.05)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.95)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.45' },
          '50%': { opacity: '0.7' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'blob-drift': 'blob-drift 18s ease-in-out infinite',
        'blob-drift-slow': 'blob-drift 24s ease-in-out infinite reverse',
        'pulse-glow': 'pulseGlow 8s ease-in-out infinite',
      },
      screens: {
        '4k': '1980px',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
          lg: '2rem',
        },
      },
    },
  },
  plugins: [],
};
