import { useState, useRef, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const phoneRegExp = /((\+44(\s\(0\)\s|\s0\s|\s)?)|0)7\d{3}(\s)?\d{6}/g;

const schema = yup
	.object({
		fullName: yup.string().required(),
		phone: yup.string().matches(phoneRegExp).required(),
		email: yup.string().email().required(),
		message: yup.string().required(),
	})
	.required();

const ContactForm = () => {
	const [isOpen, setIsOpen] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const myForm = useRef();

	const openModal = () => setIsOpen(true);
	const closeModal = () => setIsOpen(false);

	const onSubmit = (data, e) => {
		e.preventDefault();

		fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: new URLSearchParams(...data).toString(),
		})
			.then(() => {
				openModal();
				e.target.reset();
			})
			.catch(error => console.log(error));
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
				ref={myForm}
				name='contact'
				method='POST'
				netlify-honeypot='bot-field'
				data-netlify='true'
				onSubmit={handleSubmit(onSubmit)}
				className='space-y-6'
			>
				<input type='hidden' name='form-name' value='contact' />
				<input
					type='hidden'
					name='subject'
					value='New customer enquiry from roysheppard.digital'
				/>
				<div className='hidden'>
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
						{...register('fullName')}
						className='text-gray-700 rounded-lg focus:outline-none focus:ring focus:ring-gray-100 p-2'
					/>
					<p className='text-sm text-gray-700'>
						{errors.fullName && 'Please enter your full name.'}
					</p>
				</div>
				<div className='flex flex-col space-y-2'>
					<label htmlFor='phone'>Phone number:</label>
					<input
						type='text'
						id='phone'
						name='phone'
						{...register('phone')}
						className='text-gray-700 rounded-lg focus:outline-none focus:ring focus:ring-gray-100 p-2'
					/>
					<p className='text-sm text-gray-700'>
						{errors.phone && 'Please enter a valid phone number.'}
					</p>
				</div>
				<div className='flex flex-col space-y-2'>
					<label htmlFor='email'>Email:</label>
					<input
						id='email'
						name='email'
						type='text'
						{...register('email')}
						className='text-gray-700 rounded-lg focus:outline-none focus:ring focus:ring-gray-100 p-2'
					/>
					<p className='text-sm text-gray-700'>
						{errors.email && 'Please enter a valid email address.'}
					</p>
				</div>
				<div className='flex flex-col space-y-2'>
					<label htmlFor='message'>Tell me about your project:</label>
					<textarea
						id='message'
						name='message'
						rows='10'
						{...register('message')}
						className='text-gray-700 rounded-lg focus:outline-none focus:ring focus:ring-gray-100 p-2'
					/>
					<p className='text-sm text-gray-700'>
						{errors.message &&
							'Come on, you must tell me a little bit about your project.'}
					</p>
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
