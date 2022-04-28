import Head from 'next/head';

import Layout from '../components/Layout';
import Meta from '../components/Meta';

const Ecommerce = () => {
	return (
		<Layout>
			<Head>
				<Meta />
				<title>E-Commerce - Watford || Roy Sheppard Digital</title>
			</Head>
			<section className='container mt-40 text-accent-100'>
				<div className='h-2 w-1/2 bg-primary-100 mx-auto my-10'></div>
				<h1 className='text-center text-3xl md:text-6xl font-bold mb-10'>
					E-Commerce - Watford
				</h1>

				<div className='shadow-md my-20 text-center rounded-lg bg-secondary-100/30 px-10 py-8 text-gray-600 font-futura'>
					<blockquote className='text-2xl'>
						60% of people said that usability is the most important web design
						characteristic when it comes to online shopping.
					</blockquote>
				</div>

				<p className='mb-10'>
					There are many options when deciding to start an ecommerce business or
					when extending an existing business to include online sales. I can
					help you decide what are the best options for you and your target
					market.
				</p>
			</section>
		</Layout>
	);
};

export default Ecommerce;
