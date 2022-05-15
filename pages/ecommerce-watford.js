import { NextSeo } from 'next-seo';

import { FaShopify, FaStripe, FaCcPaypal } from 'react-icons/fa';

import { Snipcart } from '../components/Icons';
import Heading from '../components/Heading';
import Layout from '../components/Layout';
import PageBanner from '../components/PageBanner';
import PriceGuide from '../components/PriceGuide';
import QuoteBox from '../components/QuoteBox';
import Seperator from '../components/Seperator';

const Ecommerce = () => {
	const title = 'E-Commerce - Watford';
	const description =
		'E-Commerce developer based in Watford. Get in touch today for a FREE strategy call on how to sell your products or services online with a modern JAMstack e-commerce website.';
	const url = 'https://www.roysheppard.digital/ecommerce-watford';
	return (
		<Layout>
			<NextSeo
				title={title}
				description={description}
				canonical={url}
				openGraph={{
					type: 'website',
					url,
					title,
					description,
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

				<p className='mb-20 text-gray-600'>
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
					<Heading
						tag='h2'
						title='Why is JAMstack the right choice for e-commerce?'
					/>
					<ul className='space-y-4 text-gray-300 mt-20 list-tick'>
						<li>
							<h3 className='font-bold text-xl md:text-2xl mb-2'>Page speed</h3>
							<p className='text-gray-300'>
								JAMstack is the fastest option when it comes to e-commerce. As
								you add more products to your online shop, your website will
								soon grow and will require more product pages. With a JAMstack
								website, all these pages are prebuilt before your customers even
								turns on their device. This means they don't need to wait for
								the server to fetch them before they can be viewed.
							</p>
						</li>
						<li>
							<h3 className='font-bold text-xl md:text-2xl mb-2'>SEO</h3>
							<p className='text-gray-300'>
								Google and other search-engines prefer static pages (JAMstack
								sites), this will help you to outrank your competitors when
								customers search for similar goods or services.
							</p>
						</li>
						<li>
							<h3 className='font-bold text-xl md:text-2xl mb-2'>
								Sell in multiple places
							</h3>
							<p className='text-gray-300'>
								JAMstack sites seperate the front-end (what the page looks like)
								from the back-end (how things work). Because of this you have
								the freedom to publish your products or services on mutliple
								platforms all from the one source.
							</p>
						</li>
						<li>
							<h3 className='font-bold text-xl md:text-2xl mb-2'>Security</h3>
							<p className='text-gray-300'>
								People are very concious of cybersecurity these days so it is
								very important that you keep all your customer and business data
								secure. JAMstack websites have no direct connection to databases
								and do not use plugins. This means your website is as secure as
								it can possibly be.
							</p>
						</li>
						<li>
							<h3 className='font-bold text-xl md:text-2xl mb-2'>Cheaper</h3>
							<p className='text-gray-300'>
								JAMstack websites don't require as much storage as dynamic
								websites and so hosting them is much cheaper than a conventional
								website. They also are much easier to maintain and rarely need
								fixing once built.
							</p>
						</li>
					</ul>
				</div>
			</section>
			<Seperator dark={true} />
			<PriceGuide />
		</Layout>
	);
};

export default Ecommerce;
