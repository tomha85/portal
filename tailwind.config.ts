import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        border: '#223047',
        input: '#1f2a3d',
        ring: '#2b8df8',
        background: '#050b17',
        foreground: '#e7edf8',
        card: '#0b1526',
        muted: '#101b31',
        primary: '#1e88ff',
        accent: '#0f2644'
      },
      borderRadius: {
        xl: '0.9rem',
        '2xl': '1.1rem'
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(72,120,255,0.2), 0 20px 40px rgba(3,8,23,0.6)'
      }
    }
  },
  plugins: []
} satisfies Config;
