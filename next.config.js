module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(graphql|gql)$/u,
      exclude: /node_modules/u,
      loader: 'graphql-tag/loader',
    })

    return config
  },
}
