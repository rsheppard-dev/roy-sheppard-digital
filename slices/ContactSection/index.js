import React from 'react';
import { PrismicRichText, PrismicLink } from '@prismicio/react';

import ContactForm from '../../components/ContactForm';
import { Phone, Email } from '../../components/Icons';
import OpenCalendar from '../../components/OpenCalendar';

const ContactSection = ({ slice }) => (
	<article className='container grid lg:grid-cols-2 gap-10 mb-20'>
		<div className='text-gray-600'>
			<PrismicRichText field={slice.primary.description} />
		</div>

		<div className='text-gray-600'>
			<a href={`tel:${slice.primary.phone}`} className='group'>
				<div className='flex items-center space-x-4 mb-2'>
					<Phone className='h-6 w-6 text-secondary-100 group-hover:text-secondary-200' />
					<span className='text-link'>{slice.primary.phone}</span>
				</div>
			</a>
			<a href={`mailto:${slice.primary.email}`} className='group'>
				<div className='flex items-center space-x-4'>
					<Email className='h-6 w-6 text-secondary-100 group-hover:text-secondary-200' />
					<span className='text-link'>{slice.primary.email}</span>
				</div>
			</a>
		</div>

		<div className='bg-gray-200 px-8 pb-8 rounded-lg lg:order-last'>
			<ContactForm />
		</div>

		<div>
			<h3 className='subheading mb-10'>{slice.primary.subheading}</h3>
			<div className='prose prose-a:text-link prose-a:text-gray-600'>
				<PrismicRichText field={slice.primary.strategyCallText} />
			</div>
			<button className='my-10 button-tertiary' onClick={OpenCalendar}>
				{slice.primary.strategyCallButtonText}
			</button>
			<div className='prose prose-a:text-link prose-a:text-gray-600'>
				<PrismicRichText field={slice.primary.websiteReviewText} />
			</div>
			<PrismicLink field={slice.primary.websiteReviewLink}>
				<div className='my-10 button-tertiary w-fit'>
					{slice.primary.websiteReviewButtonText}
				</div>
			</PrismicLink>
		</div>
	</article>
);

export default ContactSection;
