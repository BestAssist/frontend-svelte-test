/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    backgroundImage: {
      'custom-gradient':
        'linear-gradient(358.1deg, rgba(95, 159, 255, 0.2244) 1.9%, rgba(43, 43, 43, 0.2924) 98.69%)',
      'recent-drop-gradient':
        'linear-gradient(358.1deg, rgba(95, 159, 255, 0.2244) 1.9%, rgba(43, 43, 43, 0.2924) 98.69%)',
      'footer-gradient':
        'linear-gradient(180deg, #181A1D 0%, #0F1012 100%)',
      },
  },
  plugins: [],
};
