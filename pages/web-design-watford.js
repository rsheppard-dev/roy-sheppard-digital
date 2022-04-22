import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import Layout from '../components/Layout';
import Meta from '../components/Meta';
import LetsTalk from '../components/LetsTalk';

const WebDesign = () => {
	return (
		<Layout>
			<Head>
				<Meta />
				<title>Web Design - Watford || Roy Sheppard Digital</title>
			</Head>
			<main className='mt-40 text-accent-100'>
				<section className='container'>
					<div className='h-2 w-1/2 bg-primary-100 mx-auto my-10'></div>
					<h1 className='text-center text-3xl md:text-6xl font-bold mb-10'>
						Web Design - Watford
					</h1>
					<div className='shadow-md my-20 text-center rounded-lg bg-secondary-100/30 px-10 py-8 text-gray-600 font-futura'>
						<blockquote className='text-2xl'>
							Website design is an important factor for determining credibility
							for 48% of visitors.
						</blockquote>
					</div>

					<p className='mb-10'>
						I design websites that are tailor made with your business in mind.
						All my websites are included with the following as standard…
					</p>

					<ul className='space-y-8 mb-20'>
						<li>
							<h3 className='font-bold text-xl md:text-2xl mb-2'>
								UI/UX web design
							</h3>
							<p>
								Understanding user experience and user interface design are
								important concepts when designing any website but especially
								when working with business websites where customer interaction
								and engagement are critical.
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
								There is no point having an amazing website if no-one can find
								it. My websites are optimised to stand the best chance of being
								found by your intended users.
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

				<section className='container'>
					<h2 className='subheading my-10'>My web design process</h2>

					<div className=''>
						<div className=''>
							<div className=''>1</div>
							<h3 className='subHeading'>Wireframe</h3>
							<Image
								src='/images/wireframe.svg'
								alt='Wireframe'
								width={100}
								height={100}
							/>
							<p>
								A basic wireframe is drawn up to begin with, to determine what
								the basic structure of your website will be.
							</p>
						</div>

						<div className=''>
							<div className=''>2</div>
							<h3 className='subHeading'>Mockup</h3>
							<Image
								src='/images/mockup.svg'
								alt='Mockup'
								width={100}
								height={100}
							/>
							<p>
								A prototype of the home page is created with the content you
								supplied. This is submitted to you for review. Now you can let
								me know about any revisions or additions you wish to make.
							</p>
						</div>

						<div className=''>
							<div className=''>3</div>
							<h3 className='subHeading'>Code</h3>
							<Image
								src='/images/code.svg'
								alt='Code'
								width={100}
								height={100}
							/>
							<p>
								Once you have signed off on the design mockup, I will begin
								coding your site and integrating any features you have
								requested.
							</p>
						</div>

						<div className=''>
							<div className=''>4</div>
							<h3 className='subHeading'>Test</h3>
							<Image
								src='/images/test.svg'
								alt='Test'
								width={100}
								height={100}
							/>
							<p>
								Once your website is complete it is reviewed and tested to
								ensure it operates correctly on different browsers and operating
								systems. As well as ensuring it is responsive on all devices.
							</p>
						</div>

						<div className=''>
							<div className=''>5</div>
							<h3 className='subHeading'>Deploy</h3>
							<Image
								src='/images/deploy.svg'
								alt='Deploy'
								width={100}
								height={100}
							/>
							<p>
								Once everything has been checked and you are satisfied, your
								site is deployed and handed over to you. Time to reap the
								benefits of having a lead generating website.
							</p>
						</div>
					</div>
				</section>
				<LetsTalk />
			</main>
		</Layout>
	);
};

export default WebDesign;
