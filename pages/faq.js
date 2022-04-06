import { useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { createClient } from '../prismicio';
import { PrismicRichText } from '@prismicio/react';
import { FaArrowCircleDown } from 'react-icons/fa';

import Layout from '../components/Layout';

export async function getStaticProps({ previewData }) {
	const client = createClient({ previewData });

	const faq = await client.getAllByType('faq');

	return {
		props: { faq },
	};
}

const FAQ = ({ faq }) => {
	return (
		<Layout>
			<section className='container mt-40 text-accent-100'>
				<div className='h-2 w-1/2 bg-primary-100 mx-auto my-10'></div>
				<h1 className='text-center text-3xl md:text-6xl font-bold mb-10'>
					FAQ
				</h1>

				<div className='space-y-4 prose mx-auto'>
					{faq.map(item => (
						<Disclosure key={item.id}>
							{({ open }) => (
								<div>
									<Disclosure.Button className='flex justify-between items-center w-full px-4 py-2 font-medium text-left text-secondary-200 bg-secondary-100/20 rounded-lg hover:bg-secondary-100/30 focus:outline-none focus-visible:ring focus-visible:ring-secondary-100 focus-visible:ring-opacity-75'>
										<span>{item.data.question}</span>
										<span>
											<FaArrowCircleDown
												className={`transition-transform w-6 h-6 ml-4 ${
													open && 'rotate-180'
												}`}
											/>
										</span>
									</Disclosure.Button>
									{open && (
										<Disclosure.Panel
											static
											className='px-4 pt-4 pb-2 text-gray-600 text-lg'
										>
											<PrismicRichText field={item.data.answer} />
										</Disclosure.Panel>
									)}
								</div>
							)}
						</Disclosure>
					))}
				</div>
			</section>
		</Layout>
	);
};

export default FAQ;
