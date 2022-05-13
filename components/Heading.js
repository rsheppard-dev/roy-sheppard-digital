const Heading = ({ tag = 'h1', title, dark }) => {
	const HeadingTag = tag;
	const className = `${
		dark ? 'text-accent-100' : 'text-white'
	} text-center text-3xl md:text-6xl font-futura lg:w-[90%] font-bold mb-16 leading-normal md:leading-snug mx-auto`;
	return (
		<>
			<div className='h-2 w-1/2 bg-primary-100 mx-auto mb-10'></div>
			<HeadingTag
				className={className}
				dangerouslySetInnerHTML={{ __html: title }}
			/>
		</>
	);
};

export default Heading;
