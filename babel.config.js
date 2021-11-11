const presets = ['module:metro-react-native-babel-preset']
const plugins = []

plugins.push([
  'module-resolver',
  {
    root: ['./src'],
    extensions: ['.js', '.json'],
    alias: {
      '@': './src',
      crypto: 'react-native-crypto',
    },
  },
])

module.exports = {
  presets,
  plugins,
}
