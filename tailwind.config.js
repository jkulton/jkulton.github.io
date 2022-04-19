module.exports = {
  purge: [
    './_includes/*.html',
    './_layouts/*.html',
    './_posts/*.md',
    './*.html',
    './*.md',
  ],
  plugins: [
    require('@tailwindcss/typography'),
  ],
}