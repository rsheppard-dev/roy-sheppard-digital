import React from 'react';

const QuoteBox = ({ slice }) => (
	<section className='container'>
		<div className='md:w-2/3 mx-auto mb-20 shadow-md shadow-gray-300 text-center rounded-lg bg-secondary-100/30 px-10 py-8 text-secondary-200 font-futura'>
			<blockquote className='text-2xl'>{slice.primary.quote}</blockquote>
		</div>
	</section>
);

export default QuoteBox;
