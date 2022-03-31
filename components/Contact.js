import Link from 'next/link';

import ContactForm from './ContactForm';
import { Phone, Email } from './Icons';
import OpenCalendar from './OpenCalendar';

const Contact = () => {
	return (
		<section id='contact' className='container text-accent-100 scroll-mt-18'>
			<div className='h-2 w-1/2 bg-primary-100 mx-auto my-10'></div>

			<h2 className='heading text-center mb-10 leading-snug'>
				Let's talk about your website project
			</h2>
			<div className='grid lg:grid-cols-2 gap-10'>
				<div>
					<p>
						If you are ready to get started or are just curious please get in
						touch so we can discuss your ideal website.
					</p>
				</div>

				<div>
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
					<p>
						I offer a <span className='underline'>FREE</span> 30 minute strategy
						call to anyone planning a new website. I can advise you on the best
						methods to get your business online, even if you don’t end up
						working with me.
					</p>
					<button className='my-10 button-tertiary' onClick={OpenCalendar}>
						Book Free Strategy Call
					</button>
					<p>
						I am also currently offering <span className='underline'>FREE</span>{' '}
						website reviews. If you already have a website but aren’t getting
						the results you hoped for, let me analyse it for you and I’ll give
						my feedback on what I would do to improve it.
					</p>
					<div className='my-10'>
						<Link href='/free-website-review'>
							<a className='button-tertiary'>Free Website Review</a>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
