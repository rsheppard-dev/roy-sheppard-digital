import { useState } from 'react';

import { motion, AnimatePresence } from 'framer-motion';
import { createClient } from '../prismicio';
import { PrismicRichText } from '@prismicio/react';
import { FaArrowCircleDown } from 'react-icons/fa';

import Layout from '../components/Layout';

export async function getStaticProps({ previewData }) {
	const client = createClient({ previewData });

	const faq = await client.getAllByType('faq');

	return {
		props: { faq },
		revalidate: 10,
	};
}

const FAQ = ({ faq }) => {
	const [active, setActive] = useState(null);

	const textVariants = {
		hide: {
			opacity: 0,
			height: 0,
		},
		show: {
			opacity: 1,
			height: 'auto',
		},
		transition: {
			duration: 0.15,
		},
	};

	const handleClick = uid => {
		if (active === uid) {
			return setActive(null);
		}

		setActive(uid);
	};

	return (
		<Layout>
			<section className='container mt-40 text-accent-100'>
				<div className='h-2 w-1/2 bg-primary-100 mx-auto my-10'></div>
				<h1 className='text-center text-3xl md:text-6xl font-bold mb-10'>
					FAQ
				</h1>

				<div id='accordionGroup' className='space-y-4 prose mx-auto'>
					{faq.map((item, index) => (
						<div key={item.id}>
							<button
								onClick={() => handleClick(item.uid)}
								aria-expanded={active ? true : false}
								aria-controls={`faq-${index}`}
								className='flex justify-between items-center w-full px-4 py-2 font-medium text-left text-secondary-200 bg-secondary-100/20 rounded-lg hover:bg-secondary-100/30 focus:outline-none focus-visible:ring focus-visible:ring-secondary-100 focus-visible:ring-opacity-75'
							>
								<span>{item.data.question}</span>
								<span>
									<FaArrowCircleDown
										className={`transition-transform w-6 h-6 ml-4 ${
											active === item.uid && 'rotate-180'
										}`}
									/>
								</span>
							</button>

							{active === item.uid && (
								<AnimatePresence>
									<motion.div
										variants={textVariants}
										initial='hide'
										animate='show'
										exit='hide'
										transition='transition'
										id={`faq-${index}`}
										className='px-4 my-2 text-gray-600 text-lg'
									>
										<PrismicRichText field={item.data.answer} />
									</motion.div>
								</AnimatePresence>
							)}
						</div>
					))}
				</div>
			</section>
		</Layout>
	);
};

export default FAQ;
