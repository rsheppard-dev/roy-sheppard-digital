import Link from 'next/link';
import { WebDesign, WebDevelopment, ECommerce } from './Icons';

const Services = () => {
	return (
		<section id='services' className='container text-accent-100 scroll-mt-22'>
			<div className='h-2 w-1/2 bg-primary-100 mx-auto my-10'></div>
			<h2 className='mb-10 text-center'>What can I do for you?</h2>

			<div className='flex flex-wrap justify-center gap-10'>
				<div className='rounded drop-shadow-md hover:drop-shadow-lg flex flex-col items-center bg-white p-6 w-80 group'>
					<h3>Web Design</h3>
					<WebDesign />
					<p className='font-lato text-center leading-relaxed'>
						Whether you want me to design you a brand new website or redesign an
						existing website.{' '}
						<Link href='#'>
							<a className='text-link'>
								Find out how my web design process works.
							</a>
						</Link>
					</p>
				</div>

				<div className='rounded drop-shadow-md hover:drop-shadow-lg flex flex-col items-center bg-white p-6 w-80 group'>
					<h3 className='text-center'>Web Development</h3>
					<WebDevelopment />
					<p className='font-lato text-center leading-relaxed'>
						Do you find yourself repeating the same tasks over and over?{' '}
						<Link href='#'>
							<a className='text-link'>
								Find out how web development can save you time and simplify your
								business.
							</a>
						</Link>
					</p>
				</div>

				<div className='rounded drop-shadow-md hover:drop-shadow-lg flex flex-col items-center bg-white p-6 w-80 group'>
					<h3>E-Commerce</h3>
					<ECommerce />
					<p className='font-lato text-center leading-relaxed'>
						More people are shopping online than ever before.{' '}
						<Link href='#'>
							<a className='text-link'>
								Find out how I can help you reach more customers with an
								e-commerce website.
							</a>
						</Link>
					</p>
				</div>
			</div>
		</section>
	);
};

export default Services;
