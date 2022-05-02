import Head from 'next/head';
import Image from 'next/image';

import Layout from '../components/Layout';
import Meta from '../components/Meta';
import Seperator from '../components/Seperator';
import PageBanner from '../components/PageBanner';

const WebDevelopment = () => {
	return (
		<Layout>
			<Head>
				<Meta />
				<title>Web Development - Watford || Roy Sheppard Digital</title>
			</Head>
			<PageBanner
				title='Web Development - Watford'
				alt='Freelance web developer in Watford.'
			/>
			<section className='container text-accent-100 relative'>
				<div className='mb-20 shadow-md shadow-gray-300 text-center rounded-lg bg-secondary-100/30 px-10 py-8 text-gray-600 font-futura'>
					<blockquote className='text-2xl'>
						42% of people will leave a website because of poor functionality.
					</blockquote>
				</div>
				<p className='mb-10'>
					I specialise in making bespoke functionality for your website. I
					understand that every business is unique and has unique needs. A good
					developer can come up with solutions that solve problems - giving you
					back time to focus on your business.
				</p>
			</section>

			<section className='bg-accent-100 mt-20'>
				<Seperator />
				<div className='container text-white'>
					<div className='h-2 w-1/2 bg-primary-100 mx-auto mt-20 mb-10'></div>
					<h1 className='text-center text-3xl md:text-6xl font-bold mb-10'>
						Benefits of JAMstack development
					</h1>
					<p className='mb-20 text-gray-300'>
						The JAMstack is a modern way of building websites. It takes away the
						need for traditional databases and prebuilds your pages with the
						most up-to-date data, which are then served to visitors of your site
						without making multiple costly server requests. This makes websites
						faster, more secure and easier to scale. It is the perfect choice
						for any size of business.
					</p>

					<ul className='space-y-8 mb-20'>
						<li>
							<h3 className='font-bold text-xl md:text-2xl mb-2'>Speed</h3>
							<p className='text-gray-300'>
								JAMstack sites are exceptionally fast as the pages are prebuilt
								and stored on a global CDN. This results in pages loading up to
								10 times faster than conventional sites.
							</p>
						</li>
						<li>
							<h3 className='font-bold text-xl md:text-2xl mb-2'>Security</h3>
							<p className='text-gray-300'>
								No databases or third-party plugins for hackers to target means
								your business and customer data will remain safe and secure.
							</p>
						</li>
						<li>
							<h3 className='font-bold text-xl md:text-2xl mb-2'>SEO</h3>
							<p className='text-gray-300'>
								Having your pages prebuilt means web crawlers can easily explore
								their content. Website performance is a Google ranking factor
								and as JAMstack websites are highly performant this will also
								give your search ranking a boost!
							</p>
						</li>
						<li>
							<h3 className='font-bold text-xl md:text-2xl mb-2'>
								Scalability
							</h3>
							<p className='text-gray-300'>
								JAMstack websites scale as your business grows. Because JAMstack
								sites decouple the visual front end part of the site from the
								technical back end of your site, you can easily add, remove and
								change systems and services without having to overhaul your
								entire website.
							</p>
						</li>
					</ul>
				</div>
				<Seperator rotate={true} />
			</section>

			<section className='container'></section>
		</Layout>
	);
};

export default WebDevelopment;
