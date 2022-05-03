import Head from 'next/head';

import { FaShopify, FaStripe, FaCcPaypal, FaGooglePay } from 'react-icons/fa';

import Heading from '../components/Heading';
import Layout from '../components/Layout';
import Meta from '../components/Meta';
import PageBanner from '../components/PageBanner';
import PriceGuide from '../components/PriceGuide';
import QuoteBox from '../components/QuoteBox';
import Seperator from '../components/Seperator';

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

				<p className='mb-20'>
					There are many options when deciding to start an e-commerce business
					or when extending an existing business to include online sales. I can
					help you decide what are the best options for you and your target
					market.
				</p>
			</section>

			<Seperator dark={true} rotate={true} />
			<section className='bg-accent-100 w-full'>
				<div className='container py-20'>
					<Heading title='Amazing e-commerce tools I work with' />

					<div className='mt-20 text-white grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 justify-center items-center gap-10'>
						<div className='mx-auto flex flex-col items-center gap-3'>
							<FaShopify className='h-24 w-24 text-gray-300' />
							<span className='w-fit bg-secondary-100/30 rounded py-2 px-3 text-sm'>
								SHOPIFY
							</span>
						</div>

						<div className='mx-auto flex flex-col items-center gap-3'>
							<FaCcPaypal className='h-24 w-24 text-gray-300' />
							<span className='w-fit bg-secondary-100/30 rounded py-2 px-3 text-sm'>
								PAYPAL
							</span>
						</div>

						<div className='mx-auto flex flex-col items-center gap-3'>
							<FaStripe className='h-24 w-24 text-gray-300' />
							<span className='w-fit bg-secondary-100/30 rounded py-2 px-3 text-sm'>
								STRIPE
							</span>
						</div>

						<div className='mx-auto flex flex-col items-center gap-3'>
							<FaGooglePay className='h-24 w-24 text-gray-300' />
							<span className='w-fit bg-secondary-100/30 rounded py-2 px-3 text-sm'>
								GOOGLE PAY
							</span>
						</div>
					</div>
				</div>
			</section>
			<Seperator dark={true} />
			<PriceGuide />
		</Layout>
	);
};

export default Ecommerce;
