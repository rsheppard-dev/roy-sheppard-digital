import React from 'react';
import Image from 'next/image';
import { PrismicRichText } from '@prismicio/react';

import { Stars, Quote } from '../../components/Icons';

const Testimonial = ({ slice }) => (
	<section className='pb-20'>
		<div className='container'>
			<div className='flex w-full gap-6'>
				<span className='hidden sm:flex justify-end items-end relative bottom-24 sm:flex-grow'>
					<Quote className='fill-gray-300 h-20 w-20' />
				</span>
				<div className='flex flex-col items-center justify-center flex-initial w-full sm:w-fit'>
					<span className='relative'>
						<Image
							src={slice.primary.photo.url}
							alt={slice.primary.photo.alt}
							width={200}
							height={200}
							className='rounded-full grayscale'
						/>
					</span>
					<span className='font-bold text-center text-gray-900'>
						{slice.primary.name}
					</span>
					<span className='font-bold text-base sm:text-xl text-center text-secondary-100 mb-10'>
						{slice.primary.position}
					</span>
				</div>
				<span className='hidden sm:flex sm:flex-grow justify-start items-end relative bottom-24'>
					<Quote className='fill-gray-300 h-20 w-20 rotate-180' />
				</span>
			</div>
			<div className='flex flex-col items-center justify-center'>
				<span className='prose-p:text-gray-600 prose sm:prose-p:text-lg text-center max-w-none min-w-full'>
					<PrismicRichText field={slice.primary.testimonial} />
				</span>
				<Stars className='text-primary-100 w-32' />
			</div>
		</div>
	</section>
);

export default Testimonial;
