const reactRefresh = require('@vitejs/plugin-react-refresh')

module.exports = {
  base: '/redesigned-bassoon',
  assetsDir: 'public',
  plugins: [
    reactRefresh()
  ],
  rewrites: [
    {
      match: /^\/$/,
      to: '/index.html'
    }
  ],
  jsx: {
    h: React.createElement
  }
}
