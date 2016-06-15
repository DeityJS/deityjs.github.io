import npm from 'rollup-plugin-npm';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';

export default {
	entry: 'src/index.js',
	dest: 'dist/bundle.min.js',
	sourceMap: true,
	plugins: [
		npm({
			jsnext: true,
			main: true,
			skip: 'node-fetch'
		}),
		commonjs(),
		babel({
			presets: ['es2015-rollup'],
			babelrc: false
		})
	],
	globals: {
		'node-fetch': 'fetch'
	},
	format: 'iife'
};
