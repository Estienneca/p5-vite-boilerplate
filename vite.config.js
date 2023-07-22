export default {
  root: 'src/',
  publicDir: '../public/',
  base: './',
  server:
  {
      host: true,
      open: true,
      port: 3300
  },
  build:
  {
      outDir: '../dist',
      emptyOutDir: true,
      sourcemap: false,
      minify: true
  }
}
