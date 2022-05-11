import Head from 'next/head';
import Layout from '../components/Layout';
import Heading from '../components/Heading';
import Meta from '../components/Meta';

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
	return (
		<Layout>
			<Head>
				<Meta />
				<title>Privacy Policy || Roy Sheppard Digital</title>
			</Head>
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
