// postcss.config.mjs
const config = {
  plugins: {
    "@tailwindcss/postcss": {
      // এখানে tailwind config যোগ করুন
      config: {
        content: [
          "./src/**/*.{js,ts,jsx,tsx,mdx}",
        ],
        theme: {
          extend: {
            fontFamily: {
              'bangla': ['Hind Siliguri', 'sans-serif'],
            },
          },
        },
      }
    },
  },
};

export default config;