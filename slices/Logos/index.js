import React from 'react';

import { FaShopify, FaStripe, FaCcPaypal } from 'react-icons/fa';

import { Snipcart } from '../../components/Icons';

const Logos = ({ slice }) => (
	<section className='container mb-20 text-white grid grid-cols-4 gap-10 justify-center items-center'>
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
	</section>
);

export default Logos;
