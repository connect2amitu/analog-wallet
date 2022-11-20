const createConfig = require('./webpack.shared.cjs');

module.exports = createConfig({
  extension: './src/extension.ts',
  background: './src/background.ts',
	content: './src/content.ts',
	page: './src/page.ts',
});
