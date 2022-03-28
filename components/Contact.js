import ContactForm from './ContactForm';
import { Phone, Email } from './Icons';

const Contact = () => {
	const StrategyCall = ({ url }) => {
		const onClick = async () => {
			// dynamically load react-calendly
			const { openPopupWidget } = await import('react-calendly');

			openPopupWidget({ url });
		};

		return (
			<button className='my-10 button-tertiary' onClick={onClick}>
				Book Free Strategy Call
			</button>
		);
	};
	return (
		<section
			id='contact'
			className='container text-accent-100 mb-10 scroll-mt-20'
		>
			<div className='h-2 w-1/2 bg-primary-100 mx-auto my-10'></div>

			<h2 className='text-center mb-10 leading-snug'>
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

				<div className='bg-gray-200 p-8 rounded-lg lg:order-last'>
					<ContactForm />
				</div>

				<div>
					<h3 className='mb-10'>Still not sure?</h3>
					<p>
						I offer a FREE 30 minute strategy call to anyone planning a new
						website. I can advise you on the best methods to get your business
						online, even if you don’t end up working with me.
					</p>
					<StrategyCall url='https://calendly.com/roysheppard-digital/30min?hide_gdpr_banner=1' />
					<p>
						I am also currently offering FREE website reviews. If you already
						have a website but aren’t getting the results you hoped for, let me
						analyse it for you and I’ll give my feedback on what I would do to
						improve it.
					</p>
					<button className='my-10 button-tertiary'>Free Website Review</button>
				</div>
			</div>
		</section>
	);
};

export default Contact;
