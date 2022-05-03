module.exports = {
  purge: [
    './_includes/*.html',
    './_layouts/*.html',
    './_posts/*.html',
    './_posts/*.md',
    './*.html',
    './*.md',
  ],
  theme: {
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}