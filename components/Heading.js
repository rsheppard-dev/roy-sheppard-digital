const Heading = ({ heading, title, dark }) => {
	return (
		<>
			<div className='h-2 w-1/2 bg-primary-100 mx-auto mb-10'></div>
			{heading === 1 ? (
				<h1
					className={`${
						dark ? 'text-accent-100' : 'text-white'
					} text-center text-3xl md:text-6xl font-futura font-bold mb-10`}
				>
					{title}
				</h1>
			) : (
				<h2
					className={`${
						dark ? 'text-accent-100' : 'text-white'
					} text-center text-3xl md:text-6xl font-futura font-bold mb-10`}
				>
					{title}
				</h2>
			)}
		</>
	);
};

export default Heading;
