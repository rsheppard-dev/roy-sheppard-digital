import { useRouter } from 'next/router';

import { NextSeo } from 'next-seo';

import ReviewForm from '../components/ReviewForm';
import Layout from '../components/Layout';
import Heading from '../components/Heading';

const WebsiteReview = props => {
	const router = useRouter();

	const website = router.query.url;

	const title = 'Free Website Review';
	const description =
		'Apply for your FREE website review today. Learn how to improve your website and get more visitors that convert!';
	const url = 'https://www.roysheppard.digital/free-website-review';

	return (
		<Layout>
			<NextSeo
				title={title}
				description={description}
				canonical={url}
				openGraph={{
					type: 'website',
					url,
					title: title,
					description: description,
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

			<section className='container mt-40 text-accent-100 mb-20'>
				<Heading dark={true} tag='h1' title='Free Website Review' />
				<p className='mb-10 text-gray-600'>
					Are you struggling to get leads or gain conversations through{' '}
					{url ? (
						<span className='font-bold text-secondary-100'>{website}</span>
					) : (
						`your
				existing website`
					)}
					? My 5 step <span className='underline'>FREE</span> website review can
					help correct many common mistakes business owners make when launching
					their website.
				</p>
				<p className='mb-10'>
					Complete the form on this page and I will provide you with a full
					breakdown of my suggestions in a short video where I will talk you
					through your website and the improvements I would make.
				</p>
				<div className='grid grid-cols-1 xl:grid-cols-2 gap-10'>
					<div className='bg-gray-200 px-8 pb-8 xl:mt-10 rounded-lg h-fit xl:row-start-2 xl:col-start-2'>
						<ReviewForm url={website} />
						<div className='mt-8 bg-gray-100 rounded-lg p-4'>
							<p className='text-sm mb-2'>
								By applying for a free website review you must be the site owner
								or authorised by the owner to act on its behalf.
							</p>

							<p className='text-sm'>
								You also agree that the review may be shared online or used for
								promotional purposes.
							</p>
						</div>
					</div>

					<div className='xl:col-span-2'>
						<h2 className='subheading'>
							What Does My 5 Step Free Website Review Cover?
						</h2>
					</div>

					<div>
						<ul className='space-y-8 list-tick text-gray-600'>
							<li>
								<h3 className='font-bold text-accent-100 text-xl md:text-2xl mb-2'>
									UI/UX Design
								</h3>
								<p>
									I will review your website based on the rules of UI and UX
									design to ensure your visitors and customers are getting the
									best experience when visiting your site.
								</p>
							</li>
							<li>
								<h3 className='font-bold text-accent-100 text-xl md:text-2xl mb-2'>
									Performance
								</h3>
								<p>
									Did you know performance and page load speeds are a google
									ranking factor? I will check how your site is currently
									performing and offer advice to improve it.
								</p>
							</li>
							<li>
								<h3 className='font-bold text-accent-100 text-xl md:text-2xl mb-2'>
									Responsiveness
								</h3>
								<p>
									Another google ranking factor is mobile-responsiveness. More
									people now view websites on their phones than on a desktop and
									it is important your website can cater for multiple devices.
								</p>
							</li>
							<li>
								<h3 className='font-bold text-accent-100 text-xl md:text-2xl mb-2'>
									Accessibility
								</h3>
								<p>
									People with disabilities will visit your site and it is
									important their experience is positive or they will just
									leave. I will test how accessible your site is and highlight
									any issues.
								</p>
							</li>
							<li>
								<h3 className='font-bold text-accent-100 text-xl md:text-2xl mb-2'>
									SEO
								</h3>
								<p>
									SEO or search-engine-optimisation is the process of optimising
									your site to be found by search engines such as Google. I will
									check how your website is currently performing and give advise
									on how you can increase your chances of being found by
									potential customers.
								</p>
							</li>
						</ul>
					</div>
				</div>
			</section>
		</Layout>
	);
};

export default WebsiteReview;
