import Image from 'next/image';
import Heading from './Heading';

import Seperator from './Seperator';

const Portfolio = () => {
	return (
		<section className='w-screen bg-accent-100'>
			<Seperator />
			<div className='container py-20'>
				<Heading title='Freelance web design projects' tag='h2' />

				<div className='text-white grid grid-cols-1 lg:grid-cols-2'>
					<div>
						<h3 className='subheading mb-5 text-center lg:text-left'>
							Studio120 Barbering
						</h3>
						<div className='flex flex-wrap gap-4 justify-center lg:justify-start mb-10'>
							<span className='bg-secondary-100/30 rounded py-2 px-3 text-sm'>
								TAILWIND
							</span>
							<span className='bg-secondary-100/30 rounded py-2 px-3 text-sm'>
								NEXTJS
							</span>
							<span className='bg-secondary-100/30 rounded py-2 px-3 text-sm'>
								PRISMIC
							</span>
						</div>
					</div>
					<div className='m-auto w-full h-60 md:h-96 lg:order-last lg:row-span-2'>
						<div className='relative w-full h-full'>
							<Image
								src='/images/freelance-website-studio120.png'
								alt='Freelance website project: Studio120 Barbering'
								layout='fill'
								objectFit='contain'
							/>
						</div>
					</div>
					<div className='text-white lg:col-start-1 lg:row-start-2 mt-10 lg:mt-0'>
						<p className='text-gray-300 mb-10 leading-loose'>
							Studio120 is a modern barber shop based in Bushey Heath, Watford.
							They needed a new website to integrate with their existing booking
							system to help increase sales and attract more clients.
						</p>
						<p className='text-gray-300 mb-10 leading-loose'>
							The site is also hooked up to a live feed from the shop's
							Instagram account.
						</p>
						<a
							className='block w-fit mx-auto lg:mx-0 text-white bg-secondary-100 py-3 px-6 rounded-lg hover:bg-secondary-200 transition-colors duration-500 ease-in-out'
							href='https://www.studio120barbering.com'
							target='_blank'
						>
							Visit Website
						</a>
					</div>
				</div>
			</div>
			<Seperator rotate={true} />
		</section>
	);
};

export default Portfolio;
