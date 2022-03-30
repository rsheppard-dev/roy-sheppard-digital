import { motion } from 'framer-motion';
import { Arrow } from './Icons';

const Review = () => {
	const StrategyCall = ({ url }) => {
		const onClick = async () => {
			// dynamically load react-calendly
			const { openPopupWidget } = await import('react-calendly');

			openPopupWidget({ url });
		};

		const buttonVariants = {
			hover: {
				scale: 1.1,
				transition: {
					duration: 0.3,
					yoyo: Infinity,
				},
			},
			tap: {
				scale: 0.8,
			},
		};

		return (
			<motion.button
				variants={buttonVariants}
				whileTap='tap'
				whileHover='hover'
				className='rounded-full bg-secondary-100 w-52 h-52 sm:w-64 sm:h-64 flex p-4 absolute left-[calc(50%-6.5rem)] sm:left-[calc(100%-17rem)] -top-40 sm:-top-52'
				onClick={onClick}
			>
				<span className='font-futura font-medium tracking-wide place-self-center text-white text-xl sm:text-2xl text-center leading-snug'>
					BOOK YOUR FREE WEBSITE STRATEGY CALL TODAY!
				</span>
			</motion.button>
		);
	};
	return (
		<section className='text-center w-screen bg-accent-100'>
			<div className='relative container pt-20'>
				<StrategyCall url='https://calendly.com/roysheppard-digital/30min?hide_gdpr_banner=1' />
				<div className='h-2 w-1/2 bg-primary-100 mx-auto mb-10'></div>

				<h2 className='text-white mb-10 leading-snug'>
					Already have a website?
					<br />
					Apply for your free website review.
				</h2>

				<div className='flex justify-center'>
					<div className='md:ml-[100px]'>
						<form action=''>
							<label htmlFor='url' className='text-gray-400 block mb-10'>
								Enter your website address below:
							</label>
							<div className='mb-10 space-x-3 space-y-6 md:space-y-0 flex flex-col md:flex-row justify-center items-center'>
								<input
									type='url'
									name='url'
									placeholder='https://www.yoursite.com'
									className='w-full md:w-96 p-4 rounded-xl md:rounded-tr-none md:rounded-br-none'
								/>
								<button className='w-fit bg-primary-100 hover:bg-primary-200 transition-colors duration-500 px-6 py-4 rounded-xl md:rounded-tl-none md:rounded-bl-none md:rounded-br-full md:rounded-tr-full'>
									Review
								</button>
							</div>
						</form>
					</div>

					<div className='hidden md:block'>
						<Arrow />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Review;
