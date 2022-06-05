import React from 'react';
import Image from 'next/image';
import { PrismicRichText } from '@prismicio/react';

import { Stars, Quote } from '../../components/Icons';

const Testimonial = ({ slice }) => (
	<section className='container mb-20'>
		<div className='flex w-full gap-4'>
			<span className='hidden sm:flex justify-end items-end relative bottom-24 flex-grow'>
				<Quote className='fill-gray-400 h-20 w-20' />
			</span>
			<div className='flex flex-col items-center flex-initial'>
				<span className='relative'>
					<Image
						src={slice.primary.photo.url}
						alt={slice.primary.photo.alt}
						width={200}
						height={200}
						className='rounded-full grayscale'
					/>
				</span>
				<span className='font-bold text-center'>{slice.primary.name}</span>
				<span className='font-bold text-center text-secondary-200 mb-10'>
					{slice.primary.position}
				</span>
			</div>
			<span className='hidden sm:flex flex-grow justify-start items-end relative bottom-24'>
				<Quote className='fill-gray-400 h-20 w-20 rotate-180' />
			</span>
		</div>
		<div className='flex flex-col items-center justify-center'>
			<span className='text-gray-500 text-center'>
				<PrismicRichText field={slice.primary.testimonial} />
			</span>
			<Stars className='text-primary-100 w-32' />
		</div>
	</section>
);

export default Testimonial;
