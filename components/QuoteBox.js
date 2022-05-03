const QuoteBox = ({ quote }) => {
	return (
		<div className='md:w-2/3 mx-auto mb-20 shadow-md shadow-gray-300 text-center rounded-lg bg-secondary-100/30 px-10 py-8 text-secondary-200 font-futura'>
			<blockquote className='text-2xl'>{quote}</blockquote>
		</div>
	);
};

export default QuoteBox;
