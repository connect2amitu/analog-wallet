const createConfig = require('./webpack.shared.cjs');

module.exports = createConfig({
	background: './src/background.ts',
	content: './src/content.ts',
	page: './src/page.ts',
});
