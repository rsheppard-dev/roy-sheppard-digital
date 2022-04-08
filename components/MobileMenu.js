import { useState } from 'react';

import { motion, AnimatePresence } from 'framer-motion';

import MyLink from './MyLink';
import OpenCalendar from './OpenCalendar';

const MobileMenu = ({ isOpen, toggleMobileMenu }) => {
	const [isSubOpen, setSubIsOpen] = useState(false);

	const toggleSubMenu = () => setSubIsOpen(!isSubOpen);

	const menuVariants = {
		mobileMenu: {
			closed: { height: 0, opacity: 0 },
			open: {
				height: '100vh',
				opacity: 1,
			},
			transition: { duration: 0.3 },
		},
		subMenu: {
			closed: { opacity: 0, height: 0 },
			open: {
				opacity: 1,
				height: 'auto',
			},
			transition: { duration: 0.15 },
		},
	};

	const buttonVariants = {
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

	return (
		<motion.nav
			variants={menuVariants.mobileMenu}
			initial={false}
			animate={isOpen ? 'open' : 'closed'}
			transition='transition'
			className='fixed z-30 bg-accent-100 h-screen w-screen overflow-y-scroll'
		>
			<div className='container mt-24 flex flex-col space-y-6 text-white'>
				<div onClick={toggleMobileMenu}>
					<MyLink
						href='/'
						className='text-2xl w-fit font-futura link-underline link-underline-black'
					>
						Home
					</MyLink>
				</div>
				<div onClick={toggleMobileMenu}>
					<MyLink
						href='/#about'
						className='text-2xl w-fit font-futura link-underline link-underline-black'
					>
						About
					</MyLink>
				</div>

				<div className='flex items-center'>
					<div onClick={toggleMobileMenu}>
						<MyLink
							href='/#services'
							className='text-2xl w-fit font-futura link-underline link-underline-black'
						>
							Services
						</MyLink>
					</div>
					<div>
						<button
							onClick={toggleSubMenu}
							className='ml-4 focus:outline-none group'
						>
							<motion.span
								variants={buttonVariants.crossHorizontal}
								initial={false}
								animate={isSubOpen ? 'open' : 'closed'}
								className='block rounded-lg h-1 w-6 bg-white group-focus:bg-gray-300 group-hover:bg-primary-100'
							></motion.span>
							<motion.span
								variants={buttonVariants.crossVertical}
								initial={false}
								animate={isSubOpen ? 'open' : 'closed'}
								className='block rounded-lg h-1 w-6 bg-white -translate-y-1 group-focus:bg-gray-300 group-hover:bg-primary-100'
							></motion.span>
						</button>
					</div>
				</div>
				<AnimatePresence>
					{isSubOpen && (
						<motion.div
							variants={menuVariants.subMenu}
							initial='closed'
							animate='open'
							exit='closed'
							transition='transition'
							className='flex flex-col space-y-6 border-l-8 pl-4 border-secondary-100 focus:outline-none focus:bg-secondary-100/10 py-4'
						>
							<div>
								<MyLink
									href='/web-design-watford'
									className={`text-2xl w-fit font-futura link-underline link-underline-black`}
								>
									Web Design
								</MyLink>
							</div>

							<div>
								<MyLink
									href='/web-development-watford'
									className={`text-2xl w-fit font-futura link-underline link-underline-black`}
								>
									Web Development
								</MyLink>
							</div>

							<div>
								<MyLink
									href='/ecommerce-watford'
									className={`text-2xl w-fit font-futura link-underline link-underline-black`}
								>
									E-Commerce
								</MyLink>
							</div>

							<div>
								<button
									onClick={OpenCalendar}
									className={`text-2xl w-fit font-futura link-underline link-underline-black`}
								>
									Free Strategy Call
								</button>
							</div>

							<div>
								<MyLink
									href='/free-website-review'
									className={`text-2xl w-fit font-futura link-underline link-underline-black`}
								>
									Free Website Review
								</MyLink>
							</div>
						</motion.div>
					)}
				</AnimatePresence>

				<div onClick={toggleMobileMenu}>
					<MyLink
						href='/faq'
						className='text-2xl w-fit font-futura link-underline link-underline-black'
					>
						FAQ
					</MyLink>
				</div>
				<div onClick={toggleMobileMenu}>
					<MyLink
						href='/#contact'
						className='text-2xl w-fit font-futura link-underline link-underline-black'
					>
						Contact
					</MyLink>
				</div>
			</div>
		</motion.nav>
	);
};

export default MobileMenu;
