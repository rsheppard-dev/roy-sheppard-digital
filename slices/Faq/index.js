import React from 'react';
import { useState } from 'react';
import { PrismicRichText } from '@prismicio/react';
import { FaArrowCircleDown } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Faq = ({ slice }) => {
	const [active, setActive] = useState(0);

	const textVariants = {
		hide: {
			opacity: 0,
			height: 0,
			transition: {
				duration: 0.15,
			},
		},
		show: {
			opacity: 1,
			height: 'auto',
			transition: {
				duration: 0.15,
			},
		},
	};

	const handleClick = i => {
		if (active === i) {
			return setActive(null);
		}

		setActive(i);
	};

	return (
		<section className='container mb-20'>
			<div
				id='accordionGroup'
				className='space-y-4 prose mx-auto prose-a:text-link prose-a:text-gray-600'
			>
				{slice.primary.faqData?.data?.faqList.map((item, index) => (
					<div key={index}>
						<button
							onClick={() => handleClick(index)}
							aria-expanded={active ? true : false}
							aria-controls={`faq-${index}`}
							className='flex justify-between items-center w-full px-4 py-2 font-medium text-left text-secondary-200 bg-secondary-100/20 rounded-lg hover:bg-secondary-100/30 focus:outline-none focus-visible:ring focus-visible:ring-secondary-100 focus-visible:ring-opacity-75'
						>
							<span>{item.question}</span>
							<span>
								<FaArrowCircleDown
									className={`transition-transform w-6 h-6 ml-4 ${
										active === index && 'rotate-180'
									}`}
								/>
							</span>
						</button>
						<AnimatePresence>
							{active === index && (
								<motion.div
									variants={textVariants}
									initial='hide'
									animate='show'
									exit='hide'
									id={`faq-${index}`}
									className='px-4 my-2 text-gray-600 text-lg'
								>
									<PrismicRichText field={item.answer} />
								</motion.div>
							)}
						</AnimatePresence>
					</div>
				))}
			</div>
		</section>
	);
};

export default Faq;
