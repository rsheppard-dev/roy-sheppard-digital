import Head from 'next/head';

import Layout from '../components/Layout';
import Meta from '../components/Meta';
import PageBanner from '../components/PageBanner';

const Ecommerce = () => {
	return (
		<Layout>
			<Head>
				<Meta />
				<title>E-Commerce - Watford || Roy Sheppard Digital</title>
			</Head>
			<PageBanner
				title='E-Commerce - Watford'
				alt='E-Commerce specialist in Watford.'
			/>
			<section className='container text-accent-100'>
				<div className='shadow-md mb-20 text-center rounded-lg bg-secondary-100/30 px-10 py-8 text-gray-600 font-futura'>
					<blockquote className='text-2xl'>
						60% of people said that usability is the most important web design
						characteristic when it comes to online shopping.
					</blockquote>
				</div>

				<p className='mb-10'>
					There are many options when deciding to start an e-commerce business
					or when extending an existing business to include online sales. I can
					help you decide what are the best options for you and your target
					market.
				</p>
			</section>
		</Layout>
	);
};

export default Ecommerce;
