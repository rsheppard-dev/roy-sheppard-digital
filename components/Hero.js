import Image from 'next/image';

import { motion } from 'framer-motion';
import OpenCalendar from './OpenCalendar';

const Hero = () => {
	const buttonVariants = {
		hover: {
			scale: 1.1,
			transition: {
				duration: 0.3,
				yoyo: Infinity,
			},
		},
		tap: {
			scale: 0.8,
		},
	};

	const textVariants = {
		initial: { opacity: 0, translateY: 20 },
		animate: {
			opacity: 1,
			translateY: 0,
		},
	};
	return (
		<section className='bg-cover bg-center h-screen w-screen min-h-[650px] font-lato font-bold bg-[url("https://res.cloudinary.com/roy-sheppard-digital/image/upload/e_pixelate:5,f_auto,q_1/v1648761011/roy-sheppard-digital/freelance-web-designer.png")]'>
			<div className='relative top-0 h-full w-full '>
				<Image
					src='https://res.cloudinary.com/roy-sheppard-digital/image/upload/f_auto,q_auto/v1648761011/roy-sheppard-digital/freelance-web-designer.png'
					alt='Freelance web designer in Watford'
					layout='fill'
					objectFit='cover'
					objectPosition='center'
					priority={true}
				/>
				<div className='absolute w-full h-full bg-black/30 mix-blend-hue overflow-y-hidden'></div>

				<div className='absolute -bottom-14 inset-x-0 text-center md:text-left flex flex-col items-center md:items-start container'>
					<div className='w-full mb-5'>
						<motion.h1
							variants={textVariants}
							initial='initial'
							animate='animate'
							transition={{ delay: 0.5, duration: 0.5 }}
							className='max-w-full md:max-w-1/2 text-white text-xl leading-loose text-shadow font-futura'
						>
							Freelance web designer and full-stack developer based in Watford.
						</motion.h1>
					</div>

					<div className='mb-10'>
						<motion.h2
							variants={textVariants}
							initial='initial'
							animate='animate'
							transition={{ delay: 1, duration: 0.5 }}
							className='max-w-full md:max-w-1/2 text-white text-3xl md:text-4xl lg:text-5xl leading-snug md:leading-normal lg:leading-normal text-shadow font-futura'
						>
							I create modern JAMstack websites that solve problems, save you
							time and get leads for your business.
						</motion.h2>
					</div>

					<div>
						<motion.button
							variants={buttonVariants}
							whileTap='tap'
							whileHover='hover'
							className='rounded-full bg-secondary-100 w-52 h-52 md:w-64 md:h-64 flex p-4'
							onClick={OpenCalendar}
						>
							<span className='font-futura font-medium tracking-wide place-self-center text-white text-xl md:text-2xl text-center leading-snug'>
								BOOK YOUR FREE WEBSITE STRATEGY CALL TODAY!
							</span>
						</motion.button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
