import React from 'react';
import { PrismicRichText, PrismicLink } from '@prismicio/react';

import { HiArrowNarrowRight } from 'react-icons/hi';

const PriceGuide = ({ slice }) => {
	return (
		<section className='flex flex-wrap gap-10 justify-center mb-20'>
			{slice.primary.priceData.data.packages.map((item, i) => (
				<div
					key={i}
					className='rounded drop-shadow-md hover:drop-shadow-lg flex flex-col justify-between bg-white p-6 w-80 group'
				>
					<span>
						<h3 className='subheading mb-2'>{item.title}</h3>
						<h4 className='text-base text-gray-600 mb-5'>{item.description}</h4>
						<p className='mb-10 text-sm text-gray-600'>
							from
							<span className='ml-4 mb-10 text-2xl text-secondary-200 bold'>
								£{item.price}
							</span>
						</p>
						<div className='space-y-4 text-gray-600 list-tick-sm prose-ul:space-y-4 prose-li:text-lg'>
							<PrismicRichText field={item.content} />
						</div>
					</span>
					<span>
						<PrismicLink field={item.link}>
							<div className='mt-10 button-tertiary w-fit text-lg'>
								{item.linkText}
								<HiArrowNarrowRight className='inline-block ml-2' />
							</div>
						</PrismicLink>
					</span>
				</div>
			))}
		</section>
	);
};

export default PriceGuide;
