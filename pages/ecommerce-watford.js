import Head from 'next/head';

import { FaShopify, FaStripe, FaCcPaypal, FaGooglePay } from 'react-icons/fa';

import { Snipcart } from '../components/Icons';
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

				<Heading
					tag='h2'
					title='Use e-commerce to future-proof your business'
					dark={true}
				/>

				<p className='mb-20'>
					There are many options when deciding to start an e-commerce business
					or when extending an existing business to include online sales. I can
					help you decide what are the best options for you and your target
					market.
				</p>

				<div className='mb-20 text-white grid grid-cols-4 gap-10 justify-center items-center'>
					<span className='flex justify-center'>
						<FaShopify
							className='h-12 w-12 md:h-24 md:w-24 text-gray-300'
							title='Shopify'
						/>
					</span>
					<span className='flex justify-center'>
						<Snipcart className='h-12 w-12 md:h-24 md:w-24 text-gray-300' />
					</span>
					<span className='flex justify-center'>
						<FaCcPaypal
							className='h-12 w-12 md:h-24 md:w-24 text-gray-300'
							title='Paypal'
						/>
					</span>
					<span className='flex justify-center'>
						<FaStripe
							className='h-12 w-12 md:h-24 md:w-24 text-gray-300'
							title='Stripe'
						/>
					</span>
				</div>
			</section>

			<Seperator dark={true} rotate={true} />
			<section className='bg-accent-100 w-full'>
				<div className='container py-20'>
					<Heading tag='h2' title='How e-commerce can help your business' />
					<ul className='space-y-4 text-white mt-20'>
						<li>Reason #1</li>
						<li>Reason #2</li>
						<li>Reason #3</li>
					</ul>
				</div>
			</section>
			<Seperator dark={true} />
			<PriceGuide />
		</Layout>
	);
};

export default Ecommerce;
