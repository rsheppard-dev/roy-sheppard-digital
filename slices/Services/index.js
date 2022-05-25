import React from 'react';

import { HiArrowNarrowRight } from 'react-icons/hi';
import { PrismicRichText, PrismicLink } from '@prismicio/react';

import { WebDesign, WebDevelopment, ECommerce } from '../../components/Icons';

const Services = ({ slice }) => (
	<div className='container flex flex-wrap justify-center gap-10 mb-20'>
		{slice?.items?.map((item, i) => (
			<div
				key={i}
				className='rounded drop-shadow-md hover:drop-shadow-lg flex flex-col items-center bg-white p-6 w-80 group'
			>
				<h3 className='subheading'>{item.title}</h3>

				{item.icon === 'Web Design' && <WebDesign />}
				{item.icon === 'Web Development' && <WebDevelopment />}
				{item.icon === 'E-Commerce' && <ECommerce />}

				<div className='prose prose-a:text-link prose-a:text-gray-600'>
					<PrismicRichText field={item.description} />

					<PrismicLink field={item.link}>
						{item.linkText}
						<HiArrowNarrowRight className='inline-block ml-2' />
					</PrismicLink>
				</div>
			</div>
		))}
	</div>
);

export default Services;
