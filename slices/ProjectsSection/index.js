import React from 'react';
import Image from 'next/image';
import { PrismicRichText, PrismicLink } from '@prismicio/react';

const ProjectsSection = ({ slice }) => {
	function isEven(n) {
		return n % 2 == 0;
	}
	return (
		<section className='text-center w-screen bg-accent-100'>
			<div className='container py-20'>
				<div className='h-2 w-1/2 bg-primary-100 mx-auto mb-10'></div>
				<div className='text-center text-3xl md:text-6xl font-futura lg:w-[90%] font-bold mb-16 leading-normal md:leading-snug mx-auto text-white'>
					<PrismicRichText field={slice.primary.title} />
				</div>
				{slice?.items?.map((item, i) => (
					<div
						key={i}
						className='text-white grid grid-cols-1 lg:grid-cols-2 mb-20 last:mb-0 gap-4'
					>
						<div>
							<h3 className='subheading mb-5 text-center lg:text-left'>
								{item.websiteName}
							</h3>
							<div className='flex flex-wrap gap-4 justify-center lg:justify-start mb-10'>
								{item.tailwind && (
									<span className='bg-secondary-100/30 rounded py-2 px-3 text-sm'>
										TAILWIND
									</span>
								)}
								{item.nextjs && (
									<span className='bg-secondary-100/30 rounded py-2 px-3 text-sm'>
										NEXTJS
									</span>
								)}
								{item.prismic && (
									<span className='bg-secondary-100/30 rounded py-2 px-3 text-sm'>
										PRISMIC
									</span>
								)}
							</div>
						</div>
						<div className='m-auto w-full h-60 md:h-96 lg:order-last lg:row-span-2'>
							<div className='relative w-full h-full'>
								<Image
									src={item.websiteImage.url}
									alt={item.websiteImage.alt}
									layout='fill'
									objectFit='contain'
								/>
							</div>
						</div>
						<div className='text-white lg:col-start-1 lg:row-start-2 mt-10 lg:mt-0'>
							<div className='prose prose-a:text-link text-gray-300 mb-10 text-left'>
								<PrismicRichText field={item.description} />
							</div>
							<PrismicLink
								className='block w-fit mx-auto lg:mx-0 text-white bg-secondary-100 py-3 px-6 rounded-lg hover:bg-secondary-200 transition-colors duration-500 ease-in-out'
								field={item.websiteLink}
								target='_blank'
							>
								{item.buttonText}
							</PrismicLink>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default ProjectsSection;
