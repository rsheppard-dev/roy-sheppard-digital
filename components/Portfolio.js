import Image from 'next/image';

import Seperator from './Seperator';

const Portfolio = () => {
	return (
		<section className='w-screen bg-accent-100'>
			<div className='relative'>
				<div className='absolute top-0 z-10'>
					<Seperator />
				</div>
				<div className='container py-20'>
					<div className='h-2 w-1/2 bg-primary-100 mx-auto mt-20 mb-10'></div>

					<h2 className='heading text-center text-white mb-20 leading-snug'>
						Freelance web design projects...
					</h2>

					<div className='text-white grid grid-cols-1 lg:grid-cols-2 mb-20'>
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
							<p className='text-gray-100 mb-10 leading-loose'>
								Studio120 is a modern barber shop based in Bushey Heath,
								Watford. They needed a new website to integrate with their
								existing booking system to help increase sales and attract more
								clients.
							</p>
							<p className='text-gray-100 mb-10 leading-loose'>
								The site is also hooked up to a live feed from the shop's
								Instagram account.
							</p>
							<a
								className='block w-fit text-white bg-secondary-100 py-3 px-6 rounded-lg hover:bg-secondary-200 transition-colors duration-500 ease-in-out'
								href='https://www.studio120barbering.com'
								target='_blank'
							>
								Visit Website
							</a>
						</div>
					</div>
				</div>
				<div className='absolute bottom-0 z-10'>
					<Seperator rotate={true} />
				</div>
			</div>
		</section>
	);
};

export default Portfolio;
