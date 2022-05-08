import Link from 'next/link';

import ContactForm from './ContactForm';
import Heading from './Heading';
import { Phone, Email } from './Icons';
import OpenCalendar from './OpenCalendar';

const Contact = () => {
	return (
		<section
			id='contact'
			className='container text-accent-100 scroll-mt-18 pt-20'
		>
			<Heading
				title='Let&#39s talk about your website project'
				dark={true}
				tag='h2'
			/>
			<div className='grid lg:grid-cols-2 gap-10 mb-20'>
				<div className='text-gray-600'>
					<p>
						If you are ready to get started or are just curious please get in
						touch so we can discuss your ideal website.
					</p>
				</div>

				<div className='text-gray-600'>
					<a href='tel:07883066944' className='group'>
						<div className='flex items-center space-x-4 mb-2'>
							<Phone className='h-6 w-6 text-secondary-100 group-hover:text-secondary-200' />
							<span className='text-link'>07883066944</span>
						</div>
					</a>
					<a href='mailto:info@roysheppard.digital' className='group'>
						<div className='flex items-center space-x-4'>
							<Email className='h-6 w-6 text-secondary-100 group-hover:text-secondary-200' />
							<span className='text-link'>info@roysheppard.digital</span>
						</div>
					</a>
				</div>

				<div className='bg-gray-200 px-8 pb-8 rounded-lg lg:order-last'>
					<ContactForm />
				</div>

				<div>
					<h3 className='subheading mb-10'>Still not sure?</h3>
					<p className='text-gray-600'>
						I offer a <span className='underline'>FREE</span> 30 minute strategy
						call to anyone planning a new website. I can advise you on the best
						methods to get your business online, even if you don’t end up
						working with me.
					</p>
					<button className='my-10 button-tertiary' onClick={OpenCalendar}>
						Book Free Strategy Call
					</button>
					<p className='text-gray-600'>
						I am also currently offering <span className='underline'>FREE</span>{' '}
						website reviews. If you already have a website but aren’t getting
						the results you hoped for, let me analyse it for you and I’ll give
						my feedback on what I would do to improve it.
					</p>
					<Link href='/free-website-review'>
						<a>
							<div className='my-10 button-tertiary w-fit'>
								Free Website Review
							</div>
						</a>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Contact;
