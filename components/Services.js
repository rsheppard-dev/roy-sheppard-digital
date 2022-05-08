import Link from 'next/link';
import Heading from './Heading';
import { WebDesign, WebDevelopment, ECommerce } from './Icons';

const Services = () => {
	return (
		<section
			id='services'
			className='container text-accent-100 scroll-mt-18 pt-20'
		>
			<Heading tag='h2' title='What can I do for you?' dark={true} />

			<div className='flex flex-wrap justify-center gap-10 mb-20'>
				<div className='rounded drop-shadow-md hover:drop-shadow-lg flex flex-col items-center bg-white p-6 w-80 group'>
					<h3 className='subheading'>Web Design</h3>
					<WebDesign />
					<p className='font-lato text-center'>
						Whether you want me to design you a brand new website or redesign an
						existing website.{' '}
						<Link href='/web-design-watford'>
							<a className='text-link'>
								Find out how my web design process works.
							</a>
						</Link>
					</p>
				</div>

				<div className='rounded drop-shadow-md hover:drop-shadow-lg flex flex-col items-center bg-white p-6 w-80 group'>
					<h3 className='subheading text-center'>Web Development</h3>
					<WebDevelopment />
					<p className='font-lato text-center'>
						Do you find yourself repeating the same tasks over and over?{' '}
						<Link href='/web-development-watford'>
							<a className='text-link'>
								Find out how web development can save you time and simplify your
								business.
							</a>
						</Link>
					</p>
				</div>

				<div className='rounded drop-shadow-md hover:drop-shadow-lg flex flex-col items-center bg-white p-6 w-80 group'>
					<h3 className='subheading'>E-Commerce</h3>
					<ECommerce />
					<p className='font-lato text-center'>
						More people are shopping online than ever before.{' '}
						<Link href='/ecommerce-watford'>
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
