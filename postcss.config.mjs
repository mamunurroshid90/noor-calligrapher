// postcss.config.mjs
const config = {
  plugins: {
    "@tailwindcss/postcss": {
      // এখানে tailwind config যোগ করুন
      config: {
        content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
        theme: {
          extend: {
            fontFamily: {
              bangla: ["Hind Siliguri", "sans-serif"],
            },
            // এখানে container max-width যোগ করুন
            maxWidth: {
              "site-container": "1280px",
            },
          },
        },
      },
    },
  },
};

export default config;
