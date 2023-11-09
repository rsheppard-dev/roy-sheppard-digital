import Image from 'next/image';
import Link from 'next/link';

import { Facebook, Instagram, Twitter, LinkedIn } from './Icons';
import OpenCalendar from './OpenCalendar';

const Footer = () => {
	return (
		<footer className='bg-accent-100 text-white w-screen pt-16 pb-4'>
			<div className='container grid grid-cols-2 md:grid-cols-3 gap-6 md:grid-rows-4'>
				<div className='col-span-2 md:col-span-1 md:row-span-1'>
					<Link href='/'>
						<a>
							<Image
								src='/images/logo.png'
								alt='Roy Sheppard Digital'
								layout='fixed'
								width={200}
								height={45}
							/>
						</a>
					</Link>
				</div>
				<div className='flex flex-col space-y-4 md:row-span-4'>
					<span className='font-futura font-bold text-lg'>Navigation</span>
					<Link href='/'>
						<a className='underline text-base'>Home</a>
					</Link>
					<Link href='/#about'>
						<a className='underline text-base'>About</a>
					</Link>
					<Link href='/#services'>
						<a className='underline text-base'>Services</a>
					</Link>
					<Link href='/faq'>
						<a className='underline text-base'>FAQ</a>
					</Link>
					<Link href='/contact'>
						<a className='underline text-base'>Contact</a>
					</Link>
				</div>
				<div className='flex flex-col space-y-4 md:row-span-4'>
					<span className='font-futura text-lg font-bold'>Services</span>
					<Link href='/web-design-watford'>
						<a className='underline text-base'>Web Design</a>
					</Link>
					<Link href='/web-development-watford'>
						<a className='underline text-base'>Web Development</a>
					</Link>
					<Link href='/ecommerce-watford'>
						<a className='underline text-base'>E-Commerce</a>
					</Link>
					<div>
						<button className='underline text-base' onClick={OpenCalendar}>
							Free Strategy Call
						</button>
					</div>
					<Link href='/free-website-review'>
						<a className='underline text-base'>Free Website Review</a>
					</Link>
				</div>

				<div className='flex justify-between col-span-2 md:col-span-1 my-2 md:my-0 md:col-start-1 md:justify-start md:space-x-6 md:row-span-1'>
					<a
						href='https://www.facebook.com/roysheppard.digital'
						target='_blank'
						className='relative hover:bottom-1 transition-all'
					>
						<Facebook className='h-8 w-8 text-white' />
					</a>
					<a
						href='https://www.instagram.com/roysheppard.digital'
						target='_blank'
						className='relative hover:bottom-1 transition-all'
					>
						<Instagram className='h-8 w-8 text-white' />
					</a>
					<a
						href='https://twitter.com/rsheppard_dev'
						target='_blank'
						className='relative hover:bottom-1 transition-all'
					>
						<Twitter className='h-8 w-8 text-white' />
					</a>
					<a
						href='https://www.linkedin.com/in/roy-sheppard'
						target='_blank'
						className='relative hover:bottom-1 transition-all'
					>
						<LinkedIn className='h-8 w-8 text-white' />
					</a>
				</div>

				<div className='flex flex-col items-center md:items-start col-span-2 md:col-span-1 space-y-6 md:row-span-2'>
					<Link href='/privacy-policy'>
						<a className='underline text-base'>Privacy Policy</a>
					</Link>
					<Link href='/'>
						<a className='underline text-base'>
							Website by Roy Sheppard Digital
						</a>
					</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
