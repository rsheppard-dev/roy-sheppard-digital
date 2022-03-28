import Image from 'next/image';

const Hero = () => {
	return (
		<section className='h-screen w-screen font-lato font-bold'>
			<div className='relative top-0 h-full w-full'>
				<Image
					src='/images/freelance-web-developer.png'
					alt='Freelance web designer in Watford'
					layout='fill'
					objectFit='cover'
					objectPosition='center'
					priority={true}
				/>
				<div className='absolute w-full h-full bg-black/30 mix-blend-hue overflow-y-hidden'></div>

				<div className='absolute mt-32 inset-0 container'>
					<div>
						<h1 className='text-white text-xl leading-loose text-shadow font-lato'>
							Freelance web designer and <br />
							full-stack developer based in Watford.
						</h1>
					</div>

					<div>
						<h2 className='mt-6 text-white text-4xl lg:text-6xl leading-normal lg:leading-normal text-shadow font-lato'>
							I create websites
							<br />
							that solve problems,
							<br />
							save you time and
							<br />
							get leads for your business.
						</h2>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
