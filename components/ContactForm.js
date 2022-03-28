import { useState } from 'react';
import { Dialog } from '@headlessui/react';

const ContactForm = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleSubmit = e => {
		e.preventDefault();
		setIsOpen(true);
	};
	return (
		<>
			<Dialog open={isOpen} onClose={() => setIsOpen(false)}>
				<Dialog.Overlay />

				<Dialog.Title>Message Sent</Dialog.Title>
				<Dialog.Description>
					Thank you for getting in touch. I will get back to you as soon as
					possible.
				</Dialog.Description>

				<button onClick={() => setIsOpen(false)}>Close</button>
			</Dialog>

			<form
				name='contact'
				method='POST'
				netlify-honeypot='bot-field'
				data-netlify='true'
				onSubmit={e => handleSubmit(e)}
				className='space-y-6'
			>
				<div class='hidden'>
					<label>
						Don’t fill this out if you’re human: <input name='bot-field' />
					</label>
				</div>
				<div className='flex flex-col space-y-2'>
					<label htmlFor='name'>Full name:</label>
					<input
						id='name'
						name='name'
						type='text'
						required='true'
						className='rounded-lg focus:outline-none focus:ring focus:ring-gray-100 p-2'
					/>
				</div>
				<div className='flex flex-col space-y-2'>
					<label htmlFor='phone'>Phone number:</label>
					<input
						type='text'
						id='phone'
						name='phone'
						required='true'
						className='rounded-lg focus:outline-none focus:ring focus:ring-gray-100 p-2'
					/>
				</div>
				<div className='flex flex-col space-y-2'>
					<label htmlFor='email'>Email:</label>
					<input
						id='email'
						name='email'
						type='text'
						required='true'
						className='rounded-lg focus:outline-none focus:ring focus:ring-gray-100 p-2'
					/>
				</div>
				<div className='flex flex-col space-y-2'>
					<label htmlFor='message'>Tell me about your project:</label>
					<textarea
						id='message'
						name='message'
						rows='10'
						required='true'
						className='rounded-lg focus:outline-none focus:ring focus:ring-gray-100 p-2'
					/>
				</div>
				<button
					type='submit'
					className='my-10 text-white bg-secondary-100 py-3 px-6 rounded-lg hover:bg-secondary-200 transition-colors duration-500 ease-in-out'
				>
					Send Message
				</button>
			</form>
		</>
	);
};

export default ContactForm;
