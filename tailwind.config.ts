import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1F316F",
        secondary: "#FFAD53",
        accent: "#FFAD53",
        neutral: "#fff6ed"
      }
    },
  },
  plugins: [],
}
export default config
