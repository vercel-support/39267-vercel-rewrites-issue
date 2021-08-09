module.exports = {
	reactStrictMode: true,
	rewrites: () => ({
		afterFiles: [
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
			{
				source: `/:slug*{/}?`,
				destination: `/:host/:slug*`,
				has: [
					{
						type: 'host',
						value: '(?<host>.+)'
					}
				]
			}
		]
	})
}
