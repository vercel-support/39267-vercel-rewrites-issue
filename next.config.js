module.exports = {
	reactStrictMode: true,
	rewrites: () => ({
		beforeFiles: [
			{
				source: `/:slug*{/}?`,
				destination: `/:host/:slug*`,
				has: [
					{
						type: 'cookie',
						key: '_custom_host',
						value: '(?<host>.+)'
					}
				]
			},
		]
	})
}
