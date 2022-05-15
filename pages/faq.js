import { useState } from 'react';
import { NextSeo, FAQPageJsonLd } from 'next-seo';

import { motion, AnimatePresence } from 'framer-motion';
import { createClient } from '../prismicio';
import { PrismicRichText } from '@prismicio/react';
import { FaArrowCircleDown } from 'react-icons/fa';

import Layout from '../components/Layout';
import Heading from '../components/Heading';

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

	const handleClick = uid => {
		if (active === uid) {
			return setActive(null);
		}

		setActive(uid);
	};

	const faqSchema = [];

	faq.map(item => {
		faqSchema.push({
			questionName: item.data.question,
			acceptedAnswerText: item.data.answer[0].text,
		});
	});

	const title = 'Frequently Asked Questions';
	const description =
		'Frequently asked questions about my services and what it is like to work with me.';
	const url = 'https://www.roysheppard.digital/faq';

	return (
		<Layout>
			<FAQPageJsonLd mainEntity={faqSchema} />
			<NextSeo
				title={title}
				description={description}
				canonical={url}
				openGraph={{
					type: 'website',
					url,
					title: title,
					description: description,
					images: [
						{
							url: 'https://www.roysheppard.digital/images/og-image.png',
							width: 1200,
							height: 640,
							alt: 'Freelance web developer making e-commerce websites.',
						},
					],
				}}
			/>

			<section className='container mt-40 text-accent-100 mb-20'>
				<Heading dark={true} tag='h1' title='FAQ' />

				<section
					id='accordionGroup'
					className='space-y-4 prose mx-auto prose-a:text-link'
				>
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
							<AnimatePresence>
								{active === item.uid && (
									<motion.div
										variants={textVariants}
										initial='hide'
										animate='show'
										exit='hide'
										id={`faq-${index}`}
										className='px-4 my-2 text-gray-600 text-lg'
									>
										<PrismicRichText field={item.data.answer} />
									</motion.div>
								)}
							</AnimatePresence>
						</div>
					))}
				</section>
			</section>
		</Layout>
	);
};

export default FAQ;
