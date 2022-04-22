import Head from 'next/head';

import Layout from '../components/Layout';
import Meta from '../components/Meta';

const WebDevelopment = () => {
	return (
		<Layout>
			<Head>
				<Meta />
				<title>Web Development - Watford || Roy Sheppard Digital</title>
			</Head>
			<main className='container mt-40 text-accent-100'>
				<div className='h-2 w-1/2 bg-primary-100 mx-auto my-10'></div>
				<h1 className='text-center text-3xl md:text-6xl font-bold mb-10'>
					Web Development - Watford
				</h1>
			</main>
		</Layout>
	);
};

export default WebDevelopment;
