import { useState } from 'react';

import { motion } from 'framer-motion';

import MyLink from './MyLink';
import OpenCalendar from './OpenCalendar';

const MobileMenu = ({ isOpen, toggleMobileMenu }) => {
	const [isSubOpen, setSubIsOpen] = useState(false);

	const toggleSubMenu = () => setSubIsOpen(!isSubOpen);

	const menuVariants = {
		mobileMenu: {
			closed: {
				height: 0,
				opacity: 0,
			},
			open: {
				height: '100vh',
				opacity: 1,
				transition: {
					when: 'beforeChildren',
					staggerChildren: 0.15,
				},
			},
		},
		subMenu: {
			closed: {
				opacity: 0,
				height: 0,
			},
			open: {
				opacity: 1,
				height: 'auto',
				transition: {
					when: 'beforeChildren',
					staggerChildren: 0.15,
				},
			},
		},
	};

	const childVariants = {
		closed: {
			opacity: 0,
			translateY: 20,
		},
		open: {
			opacity: 1,
			translateY: 0,
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
			id='menuItems'
			variants={menuVariants.mobileMenu}
			animate={isOpen ? 'open' : 'closed'}
			className='fixed z-30 bg-accent-100 h-screen w-screen overflow-y-scroll'
		>
			<div className='container mt-24 flex flex-col text-white'>
				<motion.div
					variants={childVariants}
					onClick={toggleMobileMenu}
					className='mb-6'
				>
					<MyLink
						href='/'
						className='text-2xl w-fit font-futura link-underline link-underline-black'
					>
						Home
					</MyLink>
				</motion.div>
				<motion.div
					variants={childVariants}
					onClick={toggleMobileMenu}
					className='mb-6'
				>
					<MyLink
						href='/#about'
						className='text-2xl w-fit font-futura link-underline link-underline-black'
					>
						About
					</MyLink>
				</motion.div>

				<motion.div variants={childVariants} className='flex items-center mb-6'>
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
							id='subMenuButton'
							onClick={toggleSubMenu}
							className='ml-4'
							aria-expanded={isSubOpen}
							aria-controls='subMenuItems'
						>
							<motion.span
								variants={buttonVariants.crossHorizontal}
								initial={false}
								animate={isSubOpen ? 'open' : 'closed'}
								className='block rounded-lg h-1 w-6 bg-white'
							></motion.span>
							<motion.span
								variants={buttonVariants.crossVertical}
								initial={false}
								animate={isSubOpen ? 'open' : 'closed'}
								className='block rounded-lg h-1 w-6 bg-white -translate-y-1'
							></motion.span>
						</button>
					</div>
				</motion.div>

				<motion.div
					variants={menuVariants.subMenu}
					initial={false}
					animate={isSubOpen ? 'open' : 'closed'}
					id='subMenuItems'
					className={`${
						isSubOpen ? 'flex flex-col mb-6' : 'hidden'
					} space-y-6 border-l-8 pl-4 border-secondary-100`}
				>
					<motion.div variants={childVariants} onClick={toggleMobileMenu}>
						<MyLink
							href='/web-design-watford'
							className={`text-2xl w-fit font-futura link-underline link-underline-black`}
						>
							Web Design
						</MyLink>
					</motion.div>

					<motion.div variants={childVariants} onClick={toggleMobileMenu}>
						<MyLink
							href='/web-development-watford'
							className={`text-2xl w-fit font-futura link-underline link-underline-black`}
						>
							Web Development
						</MyLink>
					</motion.div>

					<motion.div variants={childVariants} onClick={toggleMobileMenu}>
						<MyLink
							href='/ecommerce-watford'
							className={`text-2xl w-fit font-futura link-underline link-underline-black`}
						>
							E-Commerce
						</MyLink>
					</motion.div>

					<motion.div variants={childVariants} onClick={toggleMobileMenu}>
						<button
							onClick={OpenCalendar}
							className={`text-2xl w-fit font-futura link-underline link-underline-black`}
						>
							Free Strategy Call
						</button>
					</motion.div>

					<motion.div variants={childVariants} onClick={toggleMobileMenu}>
						<MyLink
							href='/free-website-review'
							className={`text-2xl w-fit font-futura link-underline link-underline-black`}
						>
							Free Website Review
						</MyLink>
					</motion.div>
				</motion.div>

				<motion.div
					variants={childVariants}
					onClick={toggleMobileMenu}
					className='mb-6'
				>
					<MyLink
						href='/faq'
						className='text-2xl w-fit font-futura link-underline link-underline-black'
					>
						FAQ
					</MyLink>
				</motion.div>
				<motion.div variants={childVariants} onClick={toggleMobileMenu}>
					<MyLink
						href='/#contact'
						className='text-2xl w-fit font-futura link-underline link-underline-black'
					>
						Contact
					</MyLink>
				</motion.div>
			</div>
		</motion.nav>
	);
};

export default MobileMenu;
