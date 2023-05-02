/** @type {import('next').NextConfig} */

const withTwin = require('./withTwin.js')

module.exports = withTwin({
  reactStrictMode: true,
})
