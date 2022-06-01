import { createClient, linkResolver } from '../prismicio';
import { SliceZone } from '@prismicio/react';
import { NextSeo, FAQPageJsonLd } from 'next-seo';

import { components } from '../slices';
import Layout from '../components/Layout';

export default function Page({ page }) {
	const faq = page.data.faq.map(item => {
		return {
			questionName: item.question,
			acceptedAnswerText: item.answer,
		};
	});
	return (
		<Layout>
			{page.data.ogImage.url && (
				<NextSeo
					title={page.data.title}
					description={page.data.description}
					canonical={page.data.url}
					openGraph={{
						type: 'website',
						url: page.data.url,
						title: page.data.title,
						description: page.data.description,
						images: [
							{
								url: page.data.ogImage.url,
								width: page.data.ogImage.dimensions.width,
								height: page.data.ogImage.dimensions.height,
								alt: page.data.ogImage.alt,
							},
						],
					}}
				/>
			)}
			{page.data.faq && <FAQPageJsonLd mainEntity={faq} />}
			<SliceZone slices={page.data.slices} components={components} />
		</Layout>
	);
}

export async function getStaticProps({ params, previewData }) {
	const client = createClient({ previewData });

	const page = await client.getByUID('page', params.uid, {
		fetchLinks: ['price-guide.packages', 'faq.faqList'],
	});

	return {
		props: {
			page,
		},
	};
}

export async function getStaticPaths() {
	const client = createClient();

	const pages = await client.getAllByType('page');

	return {
		paths: pages.map(page => {
			return {
				params: { uid: page.uid },
			};
		}),
		fallback: false,
	};
}