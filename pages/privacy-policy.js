import { useEffect, createRef } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import Heading from '../components/Heading';
import Meta from '../components/Meta';

const Privacy = () => {
	const privacy = createRef();

	useEffect(() => {
		fetch(
			'https://app.termageddon.com/api/policy/UkVsTWRIZGxiakJMT1N0ME1WRTlQUT09?h-align=left&no-title=true&table-style=accordion'
		)
			.then(res => res.text())
			.then(res => (privacy.current.innerHTML = res));
	}, [privacy]);

	return (
		<Layout>
			<Head>
				<Meta />
				<title>Privacy Policy || Roy Sheppard Digital</title>
			</Head>
			<article className='container mt-40 text-accent-100'>
				<Heading dark={true} title='Privacy Policy' tag='h1' />
				<section className='prose max-w-none min-w-full' ref={privacy} />
			</article>
		</Layout>
	);
};

export default Privacy;
