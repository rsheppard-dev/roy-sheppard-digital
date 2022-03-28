import { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

const ContactForm = () => {
	const [isOpen, setIsOpen] = useState(false);

	const openModal = () => setIsOpen(true);
	const closeModal = () => setIsOpen(false);

	const handleSubmit = e => {
		e.preventDefault();
		openModal();
	};
	return (
		<>
			<Transition appear show={isOpen} as={Fragment}>
				<Dialog
					as='div'
					className='fixed inset-0 z-10 overflow-y-auto'
					onClose={closeModal}
				>
					<div className='min-h-screen px-4 text-center'>
						<Transition.Child
							as={Fragment}
							enter='ease-out duration-300'
							enterFrom='opacity-0'
							enterTo='opacity-100'
							leave='ease-in duration-200'
							leaveFrom='opacity-100'
							leaveTo='opacity-0'
						>
							<Dialog.Overlay className='fixed inset-0 bg-black opacity-30' />
						</Transition.Child>

						{/* This element is to trick the browser into centering the modal contents. */}
						<span
							className='inline-block h-screen align-middle'
							aria-hidden='true'
						>
							&#8203;
						</span>
						<Transition.Child
							as={Fragment}
							enter='ease-out duration-300'
							enterFrom='opacity-0 scale-95'
							enterTo='opacity-100 scale-100'
							leave='ease-in duration-200'
							leaveFrom='opacity-100 scale-100'
							leaveTo='opacity-0 scale-95'
						>
							<div className='inline-block max-w-md p-6 my-8 text-left align-middle transition-all transform bg-accent-100 shadow-xl rounded-2xl'>
								<Dialog.Title
									as='h3'
									className='font-medium leading-6 text-primary-100'
								>
									Message Sent
								</Dialog.Title>
								<div className='mt-5'>
									<p className='text-white'>
										Thank you for getting in touch. I will get back to you
										within the next 24 hours.
									</p>
								</div>

								<div className='mt-10'>
									<button
										type='button'
										className='inline-flex justify-center px-4 py-2 font-medium text-white bg-secondary-100 border border-transparent rounded-md hover:bg-secondary-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white'
										onClick={closeModal}
									>
										Got it, thanks!
									</button>
								</div>
							</div>
						</Transition.Child>
					</div>
				</Dialog>
			</Transition>

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
						className='text-gray-700 rounded-lg focus:outline-none focus:ring focus:ring-gray-100 p-2'
					/>
				</div>
				<div className='flex flex-col space-y-2'>
					<label htmlFor='phone'>Phone number:</label>
					<input
						type='text'
						id='phone'
						name='phone'
						required='true'
						className='text-gray-700 rounded-lg focus:outline-none focus:ring focus:ring-gray-100 p-2'
					/>
				</div>
				<div className='flex flex-col space-y-2'>
					<label htmlFor='email'>Email:</label>
					<input
						id='email'
						name='email'
						type='text'
						required='true'
						className='text-gray-700 rounded-lg focus:outline-none focus:ring focus:ring-gray-100 p-2'
					/>
				</div>
				<div className='flex flex-col space-y-2'>
					<label htmlFor='message'>Tell me about your project:</label>
					<textarea
						id='message'
						name='message'
						rows='10'
						required='true'
						className='text-gray-700 rounded-lg focus:outline-none focus:ring focus:ring-gray-100 p-2'
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
