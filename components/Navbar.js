import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { motion } from 'framer-motion';

import Dropdown from './Dropdown';

const Navbar = () => {
	const [scrollDown, setScrollDown] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	const iconVariants = {
		open: {
			rotate: 90,
		},
		closed: {
			rotate: 0,
		},
	};

	const headerVariants = {
		open: {
			height: '100vh',
		},
		closed: {
			height: '6rem',
			transition: {
				delay: 0.5,
			},
		},
	};

	const menuVariants = {
		open: {
			left: 0,
			overflow: 'hidden',
			transition: {
				delay: 0,
			},
		},
		closed: {
			left: '100vw',
		},
	};

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
		<>
			<header
				className={`${
					scrollDown && !isOpen && '-translate-y-24'
				} fixed z-40 w-screen bg-accent-100/90 py-4 transition-transform duration-500 flex flex-col justify-center`}
			>
				<nav className='z-30 container flex items-center justify-between'>
					<div className='z-50 max-w-1/2 w-72'>
						<Link href='/'>
							<a onClick={() => setIsOpen(false)}>
								<Image
									src='/images/logo.png'
									alt='Roy Sheppard Digital'
									layout='intrinsic'
									width={376}
									height={88}
								/>
							</a>
						</Link>
					</div>

					<div className='hidden lg:inline-block text-white font-futura space-x-8 text-2xl'>
						<Link href='/'>
							<a className='link-underline link-underline-black'>Home</a>
						</Link>
						<Link href='/#about'>
							<a className='link-underline link-underline-black'>About</a>
						</Link>
						<Dropdown scrollDown={scrollDown} />
						<Link href='/faq'>
							<a className='link-underline link-underline-black'>FAQ</a>
						</Link>
					</div>

					<div className='hidden md:inline-block'>
						<Link href='/#contact'>
							<a
								onClick={() => setIsOpen(false)}
								className='text-primary-100 hover:text-white border-2 border-primary-100 py-3 px-4 transition button-fill-left'
							>
								Let's Talk
							</a>
						</Link>
					</div>

					<button
						onClick={() => setIsOpen(!isOpen)}
						className='lg:hidden text-white relative z-50'
					>
						<motion.span
							animate={
								isOpen
									? { rotate: 45, translateY: '12px' }
									: { rotate: 0, translateY: 0 }
							}
							className='block rounded-lg w-10 mb-2 h-1 bg-white'
						></motion.span>
						<motion.span
							animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
							className='block rounded-lg w-10 mb-2 h-1 bg-white'
						></motion.span>
						<motion.span
							animate={
								isOpen
									? { rotate: -45, translateY: '-12px' }
									: { rotate: 0, translateY: 0 }
							}
							className='block w-10 rounded-lg h-1 bg-white'
						></motion.span>
					</button>
				</nav>
			</header>

			<motion.nav
				initial={false}
				variants={menuVariants}
				animate={isOpen ? 'open' : 'closed'}
				className='fixed z-30 bg-gray-600 h-screen w-screen'
			>
				<div className='container mt-36 flex flex-col space-y-10 text-white'>
					<Link href='/'>
						<a
							onClick={() => setIsOpen(!isOpen)}
							className='text-2xl w-fit font-futura link-underline link-underline-black'
						>
							Home
						</a>
					</Link>
					<Link href='/#about'>
						<a
							onClick={() => setIsOpen(!isOpen)}
							className='text-2xl w-fit font-futura link-underline link-underline-black'
						>
							About
						</a>
					</Link>
					<Link href='/#services'>
						<a
							onClick={() => setIsOpen(!isOpen)}
							className='text-2xl w-fit font-futura link-underline link-underline-black'
						>
							Services
							<svg
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M12 6C12.5523 6 13 6.44772 13 7V11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H13V17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V13H7C6.44772 13 6 12.5523 6 12C6 11.4477 6.44772 11 7 11H11V7C11 6.44772 11.4477 6 12 6Z'
									fill='currentColor'
								/>
								<path
									fill-rule='evenodd'
									clip-rule='evenodd'
									d='M5 22C3.34315 22 2 20.6569 2 19V5C2 3.34315 3.34315 2 5 2H19C20.6569 2 22 3.34315 22 5V19C22 20.6569 20.6569 22 19 22H5ZM4 19C4 19.5523 4.44772 20 5 20H19C19.5523 20 20 19.5523 20 19V5C20 4.44772 19.5523 4 19 4H5C4.44772 4 4 4.44772 4 5V19Z'
									fill='currentColor'
								/>
							</svg>
						</a>
					</Link>
					<Link href='/faq'>
						<a
							onClick={() => setIsOpen(!isOpen)}
							className='text-2xl w-fit font-futura link-underline link-underline-black'
						>
							FAQ
						</a>
					</Link>
					<Link href='/#contact'>
						<a
							onClick={() => setIsOpen(!isOpen)}
							className='text-2xl w-fit font-futura link-underline link-underline-black'
						>
							Contact
						</a>
					</Link>
				</div>
			</motion.nav>
		</>
	);
};

export default Navbar;
