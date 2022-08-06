import { Config } from 'tailwindcss';

export default <Config> {
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/typography'),
  ],
  theme: {
    extend: {},
  },
  // content: [], tailwind-nuxt auto config
};
