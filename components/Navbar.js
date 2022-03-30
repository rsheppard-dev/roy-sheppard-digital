import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Dropdown from './Dropdown';

const Navbar = () => {
	const [scrollDown, setScrollDown] = useState(false);

	useEffect(() => {
		const threshold = 100;
		let lastScrollY = window.pageYOffset;
		let ticking = false;

		const updateScrollDir = () => {
			const scrollY = window.pageYOffset;

			if (Math.abs(scrollY - lastScrollY) < threshold) {
				ticking = false;
				return;
			}
			setScrollDown(scrollY > lastScrollY ? true : false);
			lastScrollY = scrollY > 0 ? scrollY : 0;
			ticking = false;
		};

		const onScroll = () => {
			if (!ticking) {
				window.requestAnimationFrame(updateScrollDir);
				ticking = true;
			}
		};

		window.addEventListener('scroll', onScroll);

		return () => window.removeEventListener('scroll', onScroll);
	}, [scrollDown]);

	return (
		<header
			className={`${
				scrollDown && '-translate-y-24'
			} h-24 fixed z-30 w-screen bg-accent-100/90 py-4 transition-transform duration-500`}
		>
			<nav className='container h-full flex items-center justify-between'>
				<Link href='/'>
					<a className='max-w-1/2 w-72'>
						<Image
							src='/images/logo.png'
							alt='Roy Sheppard Digital'
							layout='intrinsic'
							width={376}
							height={88}
							priority={true}
						/>
					</a>
				</Link>

				<div className='hidden lg:inline-block text-white font-futura space-x-8 text-2xl'>
					<Link href='/'>
						<a className='link-underline link-underline-black'>Home</a>
					</Link>
					<Link href='/#about'>
						<a className='link-underline link-underline-black'>About</a>
					</Link>
					<Dropdown />
					<Link href='/faq'>
						<a className='link-underline link-underline-black'>FAQ</a>
					</Link>
				</div>

				<div className='hidden md:inline-block'>
					<Link href='/#contact'>
						<a className='text-primary-100 hover:text-white border-2 border-primary-100 py-3 px-4 transition button-fill-left'>
							Let's Talk
						</a>
					</Link>
				</div>

				<div className='lg:hidden text-white'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-10 w-10'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							d='M4 6h16M4 12h16M4 18h16'
						/>
					</svg>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
