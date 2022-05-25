import React from 'react';
import { PrismicRichText } from '@prismicio/react';

const Heading = ({ slice }) => (
	<div id={slice.primary.slug} className='container scroll-mt-18 my-20'>
		<div className='h-2 w-1/2 bg-primary-100 mx-auto mb-10'></div>
		<div
			className={`${
				slice.variation === 'headingDarkBackground'
					? 'text-white bg-accent-100'
					: 'text-accent-100'
			} text-center text-3xl md:text-6xl font-futura lg:w-[90%] font-bold mb-16 leading-normal md:leading-snug mx-auto`}
		>
			<PrismicRichText field={slice.primary.title} />
		</div>
	</div>
);

export default Heading;
