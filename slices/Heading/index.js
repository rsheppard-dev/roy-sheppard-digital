import React from 'react';
import { PrismicRichText } from '@prismicio/react';

const Heading = ({ slice }) => {
	return (
		<div
			className={`w-full ${
				slice.variation === 'headingDarkBackground'
					? 'bg-accent-100'
					: 'bg-white'
			}`}
		>
			<div
				id={slice.primary.slug}
				className={`container scroll-mt-18 ${
					slice.variation === 'headingDarkBackground'
						? 'pt-' + slice.primary.paddingTop
						: 'mt-' + slice.primary.paddingTop || 'mt-20'
				} pb-${slice.primary.paddingBottom || '20'}`}
			>
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
