import Image from 'next/image';
import { motion } from 'framer-motion';

import hero from '../public/images/freelance-web-developer.png';

const Hero = () => {
	return (
		<section className='h-screen w-screen min-h-[650px] font-lato font-bold'>
			<div className='relative top-0 h-full w-full'>
				<Image
					src={hero}
					alt='Freelance web designer in Watford'
					layout='fill'
					objectFit='cover'
					objectPosition='center'
					priority={true}
					placeholder='blur'
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
			</div>
		</section>
	);
};

export default Hero;
