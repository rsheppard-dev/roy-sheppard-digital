import Head from 'next/head';

import Layout from '../components/Layout';
import Meta from '../components/Meta';
import PageBanner from '../components/PageBanner';
import QuoteBox from '../components/QuoteBox';

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
				<QuoteBox
					quote='60% of people said that usability is the most important web design
						characteristic when it comes to online shopping.'
				/>

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
