const createConfig = require('./webpack.shared.cjs');

module.exports = createConfig({
	extension: './src/extension.ts',
});
