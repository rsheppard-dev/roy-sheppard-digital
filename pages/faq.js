import { Disclosure } from '@headlessui/react';
import { createClient } from '../prismicio';
import { PrismicText, PrismicRichText } from '@prismicio/react';
import { FaArrowCircleDown } from 'react-icons/fa';

import Layout from '../components/Layout';

export async function getStaticProps({ previewData }) {
	const client = createClient({ previewData });

	const faq = await client.getAllByType('FAQ');

	return {
		props: { faq }, // Will be passed to the page component as props
	};
}

const FAQ = ({ faq }) => {
	console.log(faq);
	return (
		<Layout>
			<section className='container mt-40 text-accent-100'>
				<div className='h-2 w-1/2 bg-primary-100 mx-auto my-10'></div>
				<h1 className='text-center text-3xl md:text-6xl font-bold mb-10'>
					FAQ
				</h1>
				<PrismicText field={faq.question} />
				<PrismicRichText field={faq.answer} />

				<div>
					<Disclosure>
						{({ open }) => (
							<>
								<Disclosure.Button className='flex justify-between items-center w-full px-4 py-2 text-sm font-medium text-left text-secondary-200 bg-secondary-100/20 rounded-lg hover:bg-secondary-100/30 focus:outline-none focus-visible:ring focus-visible:ring-secondary-100 focus-visible:ring-opacity-75'>
									<span>How do I update my website after it is complete?</span>
									<FaArrowCircleDown
										className={`transition-transform w-6 h-6 ml-4 ${
											open && 'rotate-180'
										}`}
									/>
								</Disclosure.Button>
								<Disclosure.Panel
									as='p'
									className='px-4 pt-4 pb-2 text-gray-600 text-lg'
								>
									If you're unhappy with your purchase for any reason, email us
									within 90 days and we'll refund you in full, no questions
									asked.
								</Disclosure.Panel>
							</>
						)}
					</Disclosure>
				</div>
			</section>
		</Layout>
	);
};

export default FAQ;
