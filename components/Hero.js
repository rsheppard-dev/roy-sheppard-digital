import Image from 'next/image';

import { motion } from 'framer-motion';

const Hero = () => {
	return (
		<section className='bg-cover bg-center h-screen w-screen min-h-[650px] font-lato font-bold bg-[url("https://res.cloudinary.com/roy-sheppard-digital/image/upload/e_blur:1000,f_auto,q_1/v1648761011/roy-sheppard-digital/freelance-web-designer.png")]'>
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

				<div className='absolute inset-0 container flex flex-col justify-center'>
					<div className='mb-5'>
						<motion.h1
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 1, duration: 1 }}
							className='text-white text-base md:text-lg leading-loose text-shadow font-lato'
						>
							Freelance web designer and <br />
							full-stack developer based in Watford.
						</motion.h1>
					</div>

					<div>
						<motion.h2
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 1.5, duration: 1 }}
							className='text-white text-2xl sm:text-3xl md:text-4xl lg:text-6xl leading-normal lg:leading-normal text-shadow font-lato'
						>
							I create websites
							<br />
							that solve problems,
							<br />
							save you time and
							<br />
							get leads for your business.
						</motion.h2>
					</div>
				</div>
				<div className='absolute bottom-0 bg-gradient-to-t from-accent-100 via-accent-100 to-transparent h-24 w-full'></div>
			</div>
		</section>
	);
};

export default Hero;
