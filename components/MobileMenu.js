import { useState } from 'react';
import Link from 'next/link';

import { motion } from 'framer-motion';

const MobileMenu = () => {
	const [isOpen, setIsOpen] = useState(false);

	const iconVariants = {
		open: {
			rotate: 90,
		},
		closed: {
			rotate: 0,
		},
	};

	const menuVariants = {
		open: {
			top: 0,
		},
		closed: {
			top: '-100vh',
		},
	};
	return (
		<div className='text-white'>
			<div></div>
			<motion.div
				initial={false}
				variants={menuVariants}
				animate={isOpen ? { rotate: 45 } : { rotate: 0 }}
				className='flex flex-col space-y-6 justify-center items-center bg-accent-100/90 h-screen w-screen fixed z-40 top-0'
			>
				<Link href='/'>
					<a className=''>Home</a>
				</Link>
				<Link href='/'>
					<a className=''>About</a>
				</Link>
				<Link href='/'>
					<a className=''>Services</a>
				</Link>
				<Link href='/'>
					<a className=''>FAQ</a>
				</Link>
			</motion.div>
		</div>
	);
};

export default MobileMenu;
