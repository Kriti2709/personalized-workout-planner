import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: { orange: { 500: '#FF6B35', 600: '#F5650D' } }
    }
  },
  darkMode: 'class',
  plugins: [],
}
export default config;
