import Image from 'next/image';

const url =
	'https://res.cloudinary.com/roy-sheppard-digital/image/upload/f_auto,q_auto/v1643532339/roy-sheppard-digital/freelance-web-designer-watford.jpg';

const PageBanner = ({ title = '', imageUrl = url, alt }) => {
	return (
		<header className='mb-10'>
			<div className='relative aspect-h-3 sm:aspect-h-2 aspect-w-4 z-10 inset-0 bg-cover bg-center bg-[url("https://res.cloudinary.com/roy-sheppard-digital/image/upload/e_pixelate:5,f_auto,q_0/v1643532339/roy-sheppard-digital/freelance-web-designer-watford.jpg")]'>
				<Image
					src={imageUrl}
					alt={alt || title}
					layout='fill'
					objectFit='cover'
					objectPosition='center'
					priority={true}
				/>
				<div className='absolute z-20  inset-0 h-full w-full bg-black/30 mix-blend-hue'></div>
				<div className='container absolute inset-0 justify-center items-center flex flex-col text-center z-20'>
					<h1 className='my-20 block font-futura font-bold text-white text-shadow text-3xl md:text-6xl'>
						{title}
					</h1>
				</div>
				<div className='h-[10%] w-full bg-gradient-to-t from-white to-transparent absolute top-[90%]'></div>
			</div>
		</header>
	);
};

export default PageBanner;
