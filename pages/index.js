import { NextSeo } from 'next-seo';
import { createClient } from '../prismicio';
import { SliceZone } from '@prismicio/react';

import Layout from '../components/Layout';
import { components } from '../slices/index';

export async function getStaticProps({ previewData }) {
	const client = createClient({ previewData });

	const homepage = await client.getSingle('homepage');

	return {
		props: { homepage },
		revalidate: 60,
	};
}

export default function Home({ homepage }) {
	return (
		<Layout>
			<NextSeo
				title={homepage.data.title}
				description={homepage.data.description}
				canonical={homepage.data.url}
				openGraph={{
					type: 'website',
					url: homepage.data.url,
					title: homepage.data.title,
					description: homepage.data.description,
					images: [
						{
							url: homepage.data.ogImage.url,
							width: homepage.data.ogImage.dimensions.width,
							height: homepage.data.ogImage.dimensions.height,
							alt: homepage.data.ogImage.alt,
						},
					],
				}}
			/>
			<SliceZone slices={homepage.data.slices} components={components} />
		</Layout>
	);
}
