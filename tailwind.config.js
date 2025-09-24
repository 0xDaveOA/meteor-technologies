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
        background: 'hsl(var(--color-background))',
        foreground: 'hsl(var(--color-foreground))',
        muted: 'hsl(var(--color-muted))',
        primary: 'hsl(var(--color-primary))',
        'primary-foreground': 'hsl(var(--color-primary-foreground))',
        accent: 'hsl(var(--color-accent))',
        border: 'hsl(var(--color-border))',
        card: 'hsl(var(--color-card))',
        ring: 'hsl(var(--color-ring))',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'hero': ['48px', { lineHeight: '1.1' }],
        'subheading': ['24px', { lineHeight: '1.3' }],
        'body': ['16px', { lineHeight: '1.6' }],
        'footer': ['14px', { lineHeight: '1.4' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-hover': 'scaleHover 0.3s ease-in-out',
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
        scaleHover: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
}


