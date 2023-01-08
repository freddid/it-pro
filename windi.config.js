module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}'
  ],
  shortcuts: {
    mnBg: 'bg-cover bg-center bg-no-repeat',
    inputF: 'bg-transparent placeholder-base-1 border-b border-base-1/30 outline-none p-10px font-mons',
    h2T: 'sm:text-5xl text-32px font-bold'
  },
  theme: {
    extend: {
      fontFamily: {
        tech: ['Share Tech Mono', 'monospace'],
        russo: ['Russo One', 'sans-serif'],
        pres: ['"Press Start 2P"', 'cursive'],
        mons: ['Montserrat', 'cursive'],
      },
    },
    container: {
      center: true,
      padding: '15px'
    },
    backgroundImage: {
    },
    screens: {
      xs: '100%',
      sm: '576px',
      md: '768px',
      lg: '1020px',
      xl: '1360px'
    },
    colors: {
      transparent: 'transparent',
      // colors
      base: {
        0: '#282828',
        1: '#ffffff',
        2: '#000000',
        3: '#53f6c6'
      }
    },
    borderRadius: {
    },
    boxShadow: {
    },
    spacing: {
    },
    backgroundImage: {
      0: 'url(@/assets/imgs/main-bg.jpg)',
      1: 'url(@/assets/imgs/header-bg.jpg)',
    }
  },
  plugins: []
}
