import React from 'react';
import { PrismicRichText } from '@prismicio/react';

const Text = ({ slice }) => (
	<section
		className={`pb-${slice.primary.paddingBottom || 20} w-full ${
			slice.variation === 'textDarkBackground' ? 'bg-accent-100' : 'bg-white'
		}`}
	>
		<div className='container'>
			<div
				className={`prose-p:mb-10 prose-headings:mb-10 prose-ul:space-y-10 prose-a:text-link list-tick ${
					slice.variation === 'textDarkBackground'
						? 'prose-a:text-gray-300 text-gray-300 prose-invert'
						: 'prose-a:text-gray-600 text-gray-600'
				}`}
			>
				<PrismicRichText field={slice.primary.text} />
			</div>
		</div>
	</section>
);

export default Text;
