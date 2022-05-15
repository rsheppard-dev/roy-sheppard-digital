import { NextSeo } from 'next-seo';

import Layout from '../components/Layout';
import Heading from '../components/Heading';

export async function getStaticProps() {
	const content = await fetch(
		'https://app.termageddon.com/api/policy/UkVsTWRIZGxiakJMT1N0ME1WRTlQUT09?h-align=left&no-title=true&table-style=accordion'
	).then(res => res.text());

	return {
		props: { content },
		revalidate: 10,
	};
}

const Privacy = ({ content }) => {
	const title = 'Privacy Policy';
	const description =
		'Learn how Roy Sheppard Digital uses your data and why I use cookies on my website.';
	const url = 'https://www.roysheppard.digital/privacy-policy';
	return (
		<Layout>
			<NextSeo
				title={title}
				description={description}
				canonical={url}
				openGraph={{
					type: 'website',
					url,
					title: title,
					description: description,
					images: [
						{
							url: 'https://www.roysheppard.digital/images/og-image.png',
							width: 1200,
							height: 640,
							alt: 'Freelance web developer making e-commerce websites.',
						},
					],
				}}
			/>
			<article className='container mt-40 text-accent-100'>
				<Heading dark={true} title='Privacy Policy' tag='h1' />
				<section
					className='prose max-w-none min-w-full'
					dangerouslySetInnerHTML={{ __html: content }}
				/>
			</article>
		</Layout>
	);
};

export default Privacy;
