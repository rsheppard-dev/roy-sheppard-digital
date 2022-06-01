import React from 'react';
import Image from 'next/image';

const PageBanner = ({ slice }) => {
	const blurredImage = slice.primary.image.url + '?q=0&blur=100';
	return (
		<header
			style={{ backgroundImage: `url(${blurredImage})` }}
			className='mb-10 bg-cover bg-center'
		>
			<div className='relative inset-0 aspect-h-3 sm:aspect-h-2 aspect-w-4'>
				<Image
					src={slice.primary.image.url}
					alt={slice.primary.image.alt || slice.primary.title}
					layout='fill'
					objectFit='cover'
					objectPosition='center'
					priority={true}
				/>
				<div className='absolute inset-0 h-full w-full bg-black/30 mix-blend-hue'></div>
				<div className='container absolute inset-0 justify-center items-center flex flex-col text-center z-20'>
					<h1 className='my-20 block font-futura font-bold text-white text-shadow text-3xl md:text-6xl'>
						{slice.primary.title}
					</h1>
				</div>
				<div className='h-[10%] w-full bg-gradient-to-t from-white to-transparent absolute top-[90%]'></div>
			</div>
		</header>
	);
};

export default PageBanner;
