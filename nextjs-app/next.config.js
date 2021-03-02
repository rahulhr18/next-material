
module.exports = {
  target: 'serverless',
  trailingSlash: true,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId },
  ) {
    const pathMap = {
      '/': { page: '/' },
      
    }
    return pathMap
  }
}
