import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { motion } from 'framer-motion';
import { Menu, Popover } from '@headlessui/react';

import Dropdown from './Dropdown';
import MyLink from './MyLink';
import OpenCalendar from './OpenCalendar';

const Navbar = () => {
	const [scrollDown, setScrollDown] = useState(false);

	const buttonVariants = {
		topLine: {
			open: {
				rotate: 45,
				translateY: '12px',
			},
			closed: {
				rotate: 0,
				translateY: 0,
			},
		},
		middleLine: {
			open: {
				opacity: 0,
				width: 0,
			},
			closed: {
				opacity: 1,
			},
		},
		bottomLine: {
			open: {
				rotate: -45,
				translateY: '-12px',
			},
			closed: {
				rotate: 0,
				translateY: 0,
			},
		},
		crossVertical: {
			open: { rotate: 45, translateY: -4 },
			closed: {
				rotate: 90,
				translateY: -4,
			},
		},
		crossHorizontal: {
			open: { rotate: -45, translateY: 0 },
			closed: {
				translateY: 0,
			},
		},
	};

	const menuVariants = {
		dropdownMenu: {
			initial: { opacity: 0, translateY: '-80' },
			animate: {
				opacity: 1,
				translateY: 0,
			},
			transition: { duration: 0.15 },
		},
		mobileMenu: {
			initial: { height: 0, opacity: 0, translateY: '-100vh' },
			animate: {
				height: '100vh',
				opacity: 1,
				translateY: 0,
			},
			transition: { duration: 0.15 },
		},
		subMenu: {
			initial: { opacity: 0, height: 0 },
			animate: {
				opacity: 1,
				height: 'auto',
			},
			transition: { duration: 0.15 },
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
		<Popover>
			{({ open, close }) => (
				<>
					<header
						className={`${
							scrollDown && !open && '-translate-y-24'
						} fixed z-40 w-screen bg-accent-100/90 py-4 transition-transform duration-500 flex flex-col justify-center`}
					>
						<nav className='z-30 container flex items-center justify-between'>
							<div className='z-50 max-w-1/2 w-72'>
								<Link href='/'>
									<a onClick={() => close()}>
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
								<Dropdown scrollDown={scrollDown} menuVariants={menuVariants} />
								<Link href='/faq'>
									<a className='link-underline link-underline-black'>FAQ</a>
								</Link>
							</div>

							<div className='hidden md:inline-block'>
								<Link href='/#contact'>
									<a
										onClick={() => close()}
										className='text-primary-100 hover:text-white border-2 border-primary-100 py-3 px-4 transition button-fill-left'
									>
										Let's Talk
									</a>
								</Link>
							</div>
							<Popover.Button className='group lg:hidden text-white relative z-50 focus:outline-none'>
								<motion.span
									variants={buttonVariants.topLine}
									animate={open ? 'open' : 'closed'}
									className='block rounded-lg w-10 mb-2 h-1 bg-white group-focus:bg-gray-300'
								></motion.span>
								<motion.span
									variants={buttonVariants.middleLine}
									animate={open ? 'open' : 'closed'}
									className='block rounded-lg w-10 mb-2 h-1 bg-white group-focus:bg-gray-300'
								></motion.span>
								<motion.span
									variants={buttonVariants.bottomLine}
									animate={open ? 'open' : 'closed'}
									className='block w-10 rounded-lg h-1 bg-white group-focus:bg-gray-300'
								></motion.span>
							</Popover.Button>
						</nav>
					</header>
					{open && (
						<Popover.Panel
							as={motion.nav}
							static
							variants={menuVariants.mobileMenu}
							initial='initial'
							animate='animate'
							transition='transition'
							className='fixed z-30 bg-accent-100 h-screen w-screen overflow-y-scroll'
						>
							<div className='container mt-36 sm:mt-24 flex flex-col space-y-6 text-white'>
								<Popover.Button as='div'>
									<MyLink
										href='/'
										className='text-2xl w-fit font-futura link-underline link-underline-black'
									>
										Home
									</MyLink>
								</Popover.Button>
								<Popover.Button as='div'>
									<MyLink
										href='/#about'
										className='text-2xl w-fit font-futura link-underline link-underline-black'
									>
										About
									</MyLink>
								</Popover.Button>

								<Menu>
									{({ open: servicesOpen }) => (
										<>
											<div className='flex items-center'>
												<div>
													<Popover.Button as='div'>
														<MyLink
															href='/#services'
															className='text-2xl w-fit font-futura link-underline link-underline-black'
														>
															Services
														</MyLink>
													</Popover.Button>
												</div>
												<div>
													<Menu.Button className='ml-4 focus:outline-none group'>
														<motion.span
															variants={buttonVariants.crossHorizontal}
															initial='closed'
															animate={servicesOpen ? 'open' : 'closed'}
															className='block rounded-lg h-1 w-6 bg-white group-focus:bg-gray-300 group-hover:bg-primary-100'
														></motion.span>
														<motion.span
															variants={buttonVariants.crossVertical}
															initial='closed'
															animate={servicesOpen ? 'open' : 'closed'}
															className='block rounded-lg h-1 w-6 bg-white -translate-y-1 group-focus:bg-gray-300 group-hover:bg-primary-100'
														></motion.span>
													</Menu.Button>
												</div>
											</div>
											{servicesOpen && (
												<Menu.Items
													as={motion.div}
													static
													variants={menuVariants.subMenu}
													initial='initial'
													animate='animate'
													transition='transition'
													className='flex flex-col space-y-6 border-l-8 pl-4 border-secondary-100 focus:outline-none focus:bg-secondary-100/10 py-4'
												>
													<Menu.Item>
														{({ active }) => (
															<Popover.Button as='div'>
																<MyLink
																	href='/web-design-watford'
																	className={`text-2xl w-fit font-futura link-underline link-underline-black ${
																		active && 'link-underline-active'
																	}`}
																>
																	Web Design
																</MyLink>
															</Popover.Button>
														)}
													</Menu.Item>
													<Menu.Item>
														{({ active }) => (
															<Popover.Button as='div'>
																<MyLink
																	href='/web-development-watford'
																	className={`text-2xl w-fit font-futura link-underline link-underline-black ${
																		active && 'link-underline-active'
																	}`}
																>
																	Web Development
																</MyLink>
															</Popover.Button>
														)}
													</Menu.Item>
													<Menu.Item>
														{({ active }) => (
															<Popover.Button as='div'>
																<MyLink
																	href='/ecommerce-watford'
																	className={`text-2xl w-fit font-futura link-underline link-underline-black ${
																		active && 'link-underline-active'
																	}`}
																>
																	E-Commerce
																</MyLink>
															</Popover.Button>
														)}
													</Menu.Item>
													<Menu.Item>
														{({ active }) => (
															<Popover.Button as='div'>
																<button
																	onClick={OpenCalendar}
																	className={`text-2xl w-fit font-futura link-underline link-underline-black ${
																		active && 'link-underline-active'
																	}`}
																>
																	Free Strategy Call
																</button>
															</Popover.Button>
														)}
													</Menu.Item>
													<Menu.Item>
														{({ active }) => (
															<Popover.Button as='div'>
																<MyLink
																	href='/free-website-review'
																	className={`text-2xl w-fit font-futura link-underline link-underline-black ${
																		active && 'link-underline-active'
																	}`}
																>
																	Free Website Review
																</MyLink>
															</Popover.Button>
														)}
													</Menu.Item>
												</Menu.Items>
											)}
										</>
									)}
								</Menu>

								<Popover.Button as='div'>
									<MyLink
										href='/faq'
										className='text-2xl w-fit font-futura link-underline link-underline-black'
									>
										FAQ
									</MyLink>
								</Popover.Button>
								<Popover.Button as='div'>
									<MyLink
										href='/#contact'
										className='text-2xl w-fit font-futura link-underline link-underline-black'
									>
										Contact
									</MyLink>
								</Popover.Button>
							</div>
						</Popover.Panel>
					)}
				</>
			)}
		</Popover>
	);
};

export default Navbar;
