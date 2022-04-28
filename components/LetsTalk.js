import Image from 'next/image';

import Seperator from './Seperator';

const LetsTalk = () => {
	return (
		<section className='w-screen'>
			<div className='relative'>
				<div className='absolute top-0 z-30'>
					<Seperator dark={true} />
				</div>
				<div className='relative z-10 inset-0 bg-[url("https://res.cloudinary.com/roy-sheppard-digital/image/upload/e_pixelate:5,f_auto,q_0/v1643532339/roy-sheppard-digital/freelance-web-designer-watford.jpg")]'>
					<Image
						src='https://res.cloudinary.com/roy-sheppard-digital/image/upload/f_auto,q_auto/v1643532339/roy-sheppard-digital/freelance-web-designer-watford.jpg'
						alt='Freelance web designer in Watford'
						layout='responsive'
						width={1086}
						height={724}
						className='absolute'
					/>
				</div>
				<div className='absolute z-20 left-0 top-0 w-full h-full bg-black/30 mix-blend-hue'></div>
				<div className='container absolute inset-0 justify-center items-center flex flex-col text-center z-20'>
					<span className='mb-5 md:mb-10 lg:mb-20 block font-futura font-bold text-white text-shadow text-2xl md:text-5xl lg:text-7xl xl:text-8xl'>
						Ready to get started?
					</span>
					<a
						href='/#contact'
						className='w-fit bg-secondary-100 hover:bg-secondary-200 transition-colors duration-500 ease-in-out text-white font-futura py-3 px-6 md:py-5 rounded-lg text-xl md:text-2xl lg:text-4xl xl:text-5xl'
					>
						Let's Talk
					</a>
				</div>
				<div className='absolute bottom-0 z-20'>
					<Seperator rotate={true} dark={true} />
				</div>
			</div>
		</section>
	);
};

export default LetsTalk;
