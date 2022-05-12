import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { motion } from 'framer-motion';
import Cookies from 'js-cookie';

const CookieConsent = () => {
	const [isVisible, setIsVisible] = useState(true);

	useEffect(() => {
		if (Cookies.get('allow_cookies')) setConsent();
	}, []);

	const hideConsent = () => setIsVisible(false);

	const setConsent = () => {
		Cookies.set('allow_cookies', true, { expires: 365 });
		hideConsent();
	};
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5, delay: 2 }}
			className={`top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:transform-none md:top-[calc(100%-30rem)] md:left-[calc(100%-20rem)] rounded-lg bg-stone-100 shadow-lg w-72 z-50 border-stone-800 border-2 overflow-hidden ${
				isVisible ? 'fixed' : 'hidden'
			}`}
		>
			<div className='flex flex-col justify-center items-center gap-5 p-10'>
				<span className='text-center block font-futura font-bold text-2xl text-accent-100'>
					Cookies!
				</span>
				<div className='relative w-32 h-32'>
					<Image
						src='/images/cookie.png'
						alt='A smiling cookie.'
						layout='fill'
					/>
				</div>
				<span className='font-lato text-gray-600 text-lg'>
					This site uses cookies to enhance and improve the user experience.
				</span>
			</div>
			<div className='flex justify-between'>
				<Link href='/privacy-policy'>
					<a className='font-lato text-center text-gray-600 w-1/2 text-lg py-4 border-1 border-stone-800 border-t-2 border-r-2 cursor-pointer'>
						Privacy Policy
					</a>
				</Link>
				<button
					onClick={setConsent}
					className='font-lato text-center text-accent-100 w-1/2 text-lg bg-primary-100 hover:bg-primary-200 transition py-4 border-1 border-stone-800 border-t-2'
				>
					Accept
				</button>
			</div>
		</motion.div>
	);
};

export default CookieConsent;
