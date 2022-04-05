import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import { Disclosure } from '@headlessui/react';
import { FaArrowCircleDown } from 'react-icons/fa';

const Faq = ({ slice }) => (
	<Disclosure>
		{({ open }) => (
			<>
				<Disclosure.Button className='flex justify-between items-center w-full px-4 py-2 text-sm font-medium text-left text-secondary-200 bg-secondary-100/20 rounded-lg hover:bg-secondary-100/30 focus:outline-none focus-visible:ring focus-visible:ring-secondary-100 focus-visible:ring-opacity-75'>
					{slice.primary.title ? (
						<PrismicRichText field={slice.primary.title} />
					) : (
						<h2>Template slice, update me!</h2>
					)}
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
					{slice.primary.description ? (
						<PrismicRichText field={slice.primary.description} />
					) : (
						<p>start by editing this slice from inside Slice Machine!</p>
					)}
				</Disclosure.Panel>
			</>
		)}
	</Disclosure>
);

export default Faq;
