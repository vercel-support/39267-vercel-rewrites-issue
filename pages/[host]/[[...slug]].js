import React from 'react';

const getStaticPaths = () => ({
	fallback: 'blocking',
	paths: []
});

const getStaticProps = ({params}) => ({
	props: {
		host: params.host,
		slug: `/${params.slug?.join('/') || ''}`
	}
});

const Page = ({host, slug}) => (
	<>
		<div>Host: {host}</div>
		<div>Slug: {slug}</div>
	</>
);

export default Page;
export {getStaticPaths, getStaticProps}
