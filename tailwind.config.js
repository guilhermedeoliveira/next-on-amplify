module.exports = {
  future: {
    purgeLayersByDefault: true,
  },
  purge: {
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx}',
      './src/modules/**/*.{js,ts,jsx,tsx}',
      './src/components/**/*.{js,ts,jsx,tsx}',
    ],
  },
  theme: {
    extend: {
      maxWidth: {
        '8xl': '1920px',
      },
      colors: {
        primary: '#000000',
        secondary: '#0000ff',
      },
      gridTemplateRows: {
        layout: 'auto 1fr auto',
      },
    },
  },
  plugins: [require('@tailwindcss/ui')],
}
