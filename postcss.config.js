const mode = process.env.NODE_ENV
const dev = mode === 'development'

module.exports = {
	plugins: [
		require('postcss-import')(),
		require('tailwindcss')(),
		require('postcss-preset-env')({
			// Full list of features: https://github.com/csstools/postcss-preset-env/blob/master/src/lib/plugins-by-id.js#L36
			features: {
				'nesting-rules': true, // delete if you don’t want nesting (optional)
			},
		}),
			require('cssnano')({
				preset: ['default', { discardComments: { removeAll: true } }],
      }),
       require('@fullhuman/postcss-purgecss')({
        content: ['./**/*.html', './**/*.svelte'],
        defaultExtractor: content =>
          content.match(/[A-Za-z0-9-_:/]+/g) || [],
      })
	],
}
