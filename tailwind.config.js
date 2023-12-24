/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero': "url('../public/images/image1.jpg')",
        'org': "url('../public/images/kids.jpg')",
        'newsletter': "url('../public/images/kids5.jpg')",
        'topOrg': "url('../public/images/kids6.jpg')",
        'organizations': "url('../public/images/kids1bw.jpg')",
        'form': "url('../public/images/kidBook2.jpg')",
        'about': "url('../public/images/donateVector4.jpg')",
        'contact': "url('../public/images/contact.jpg')",
        'orph': "url('../public/images/orp1.png')",
        'nav': "url('../public/images/elder4.png')",
        'wisdom': "url('../public/images/library1.png')",
        'ad': "url('../public/images/tealNote.jpg')",
        'signIn': "url('../public/images/school4.jpg')",
      },
      colors: {
        primary: '#f26419',
        secondary: '#0fa3b1',
        background: '#ffd29d',
      },
      fontFamily: {
        main: ["Nato-Regular"],
        secondary: ["Kumbh-Regular"],
      }
    },
  },
  plugins: [],
}