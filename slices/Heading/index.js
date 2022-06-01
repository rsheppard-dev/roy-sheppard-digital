import React from 'react';
import { PrismicRichText } from '@prismicio/react';

const Heading = ({ slice }) => {
	return (
		<div
			className={`w-full scroll-mt-18 pt-${slice.primary.paddingTop} pb-${
				slice.primary.paddingBottom
			} ${
				slice.variation === 'headingDarkBackground'
					? 'bg-accent-100'
					: 'bg-white'
			}`}
		>
			<div id={slice.primary.slug} className={`container`}>
				<div className='h-2 w-1/2 bg-primary-100 mx-auto mb-10'></div>
				<div
					className={`${
						slice.variation === 'headingDarkBackground' && 'text-white'
					} text-center text-3xl md:text-6xl font-futura lg:w-[90%] font-bold leading-normal md:leading-snug mx-auto`}
				>
					<PrismicRichText field={slice.primary.title} />
				</div>
			</div>
		</div>
	);
};

export default Heading;
