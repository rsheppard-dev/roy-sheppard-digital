import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import Layout from '../components/Layout';
import Meta from '../components/Meta';
import LetsTalk from '../components/LetsTalk';
import Seperator from '../components/Seperator';
import PageBanner from '../components/PageBanner';

const WebDesign = () => {
	return (
		<Layout>
			<Head>
				<Meta />
				<title>Web Design - Watford || Roy Sheppard Digital</title>
			</Head>
			<PageBanner
				title='Web Design - Watford'
				alt='Freelance web designer in Watford.'
			/>
			<section className='container text-accent-100'>
				<div className='shadow-md my-20 text-center rounded-lg bg-secondary-100/30 px-10 py-8 text-gray-600 font-futura'>
					<blockquote className='text-2xl'>
						Website design is an important factor for determining credibility
						for 48% of visitors.
					</blockquote>
				</div>

				<p className='mb-10'>
					I design websites that are tailor made with your business in mind. All
					my websites are included with the following as standard…
				</p>

				<ul className='space-y-8 mb-20'>
					<li>
						<h3 className='font-bold text-xl md:text-2xl mb-2'>
							UI/UX web design
						</h3>
						<p>
							Understanding user experience and user interface design are
							important concepts when designing any website but especially when
							working with business websites where customer interaction and
							engagement are critical.
						</p>
					</li>
					<li>
						<h3 className='font-bold text-xl md:text-2xl mb-2'>
							Responsive web design
						</h3>
						<p>
							My websites are made to respond to whatever device your users
							choose to use, whether that’s a mobile, tablet, laptop or a
							widescreen monitor.
						</p>
					</li>
					<li>
						<h3 className='font-bold text-xl md:text-2xl mb-2'>
							Accessibility
						</h3>
						<p>
							People with different disabilities will use your site and it is
							important their experience is a positive one. My sites use best
							practice methods to ensure everyone can navigate your website
							successfully.
						</p>
					</li>
					<li>
						<h3 className='font-bold text-xl md:text-2xl mb-2'>
							SEO optimisation
						</h3>
						<p>
							There is no point having an amazing website if no-one can find it.
							My websites are optimised to stand the best chance of being found
							by your intended users.
						</p>
					</li>
					<li>
						<h3 className='font-bold text-xl md:text-2xl mb-2'>
							Google analytics
						</h3>
						<p>
							Analytics data helps you learn who is visiting your site and how
							they are using it to help you improve your users’ experience as
							well as improving your conversions and sales.
						</p>
					</li>
				</ul>
			</section>

			<section className='bg-accent-100 pb-20'>
				<Seperator />
				<div className='container pt-10 text-white'>
					<div className='h-2 w-1/2 bg-primary-100 mx-auto my-10'></div>
					<h2 className='text-center text-3xl md:text-6xl font-bold mb-20'>
						My web design process
					</h2>

					<div className='flex flex-wrap justify-center gap-20'>
						<div className='relative mt-10 rounded flex flex-col items-center bg-secondary-100/30 p-10 w-80 text-white'>
							<div className='absolute -top-8 left-[calc(50%-2rem)] flex justify-center items-center text-center bg-accent-100 rounded-full w-18 h-18 font-futura font-bold text-5xl text-primary-100'>
								1
							</div>
							<h3 className='subheading my-10'>Wireframing</h3>
							<Image
								src='/images/wireframe.svg'
								alt='Wireframe'
								width={100}
								height={100}
							/>
							<p className='mt-10 text-xl leading-loose'>
								A basic wireframe is drawn up to begin with, to determine what
								the basic structure of your website will be.
							</p>
						</div>

						<div className='relative mt-10 rounded flex flex-col items-center bg-secondary-100/30 p-6 w-80 text-white-100'>
							<div className='absolute -top-8 left-[calc(50%-2rem)] flex justify-center items-center text-center bg-accent-100 rounded-full w-18 h-18 font-futura font-bold text-5xl text-primary-100'>
								2
							</div>
							<h3 className='subheading my-10'>Prototyping</h3>
							<Image
								src='/images/mockup.svg'
								alt='Mockup'
								width={100}
								height={100}
							/>
							<p className='mt-10 text-xl leading-loose'>
								A prototype of the home page is created with the content you
								supplied. This is submitted to you for review. Now you can let
								me know about any revisions or additions you wish to make.
							</p>
						</div>

						<div className='relative mt-10 rounded flex flex-col items-center bg-secondary-100/30 p-6 w-80 text-white'>
							<div className='absolute -top-8 left-[calc(50%-2rem)] flex justify-center items-center text-center bg-accent-100 rounded-full w-18 h-18 font-futura font-bold text-5xl text-primary-100'>
								3
							</div>
							<h3 className='subheading my-10'>Coding</h3>
							<Image
								src='/images/code.svg'
								alt='Code'
								width={100}
								height={100}
							/>
							<p className='mt-10 text-xl leading-loose'>
								Once you have signed off on the design mockup, I will begin
								coding your site and integrating any features you have
								requested.
							</p>
						</div>

						<div className='relative mt-10 rounded flex flex-col items-center bg-secondary-100/30 p-6 w-80 text-white'>
							<div className='absolute -top-8 left-[calc(50%-2rem)] flex justify-center items-center text-center bg-accent-100 rounded-full w-18 h-18 font-futura font-bold text-5xl text-primary-100'>
								4
							</div>
							<h3 className='subheading my-10'>Testing</h3>
							<Image
								src='/images/test.svg'
								alt='Testing'
								width={100}
								height={100}
							/>
							<p className='mt-10 text-xl leading-loose'>
								Once your website is complete it is reviewed and tested to
								ensure it operates correctly on different browsers and operating
								systems. As well as ensuring it is responsive on all devices.
							</p>
						</div>

						<div className='relative mt-10 rounded flex flex-col items-center bg-secondary-100/30 p-6 w-80 text-white'>
							<div className='absolute -top-8 left-[calc(50%-2rem)] flex justify-center items-center text-center bg-accent-100 rounded-full w-18 h-18 font-futura font-bold text-5xl text-primary-100'>
								5
							</div>
							<h3 className='subheading my-10'>Deployment</h3>
							<Image
								src='/images/deploy.svg'
								alt='Deployment'
								width={100}
								height={100}
							/>
							<p className='mt-10 text-xl leading-loose'>
								Once everything has been checked and you are satisfied, your
								site is deployed and handed over to you. Time to reap the
								benefits of having a lead generating website.
							</p>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
};

export default WebDesign;
