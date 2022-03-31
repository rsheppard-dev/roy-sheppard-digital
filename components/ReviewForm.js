import { useState, useRef, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const ReviewForm = ({ url = '' }) => {
	const [isOpen, setIsOpen] = useState(false);

	const phoneRegex = /((\+44(\s\(0\)\s|\s0\s|\s)?)|0)7\d{3}(\s)?\d{6}/g;

	const schema = yup
		.object({
			url: yup.string().url().required(),
			firstName: yup.string().required(),
			lastName: yup.string().required(),
			phone: yup.string().matches(phoneRegex).required(),
			email: yup.string().email().required(),
		})
		.required();

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const myForm = useRef();

	const openModal = () => setIsOpen(true);
	const closeModal = () => setIsOpen(false);

	const onSubmit = () => {
		const formData = new FormData(myForm.current);

		fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: new URLSearchParams(formData).toString(),
		})
			.then(() => {
				openModal();
				reset();
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
									className='subheading leading-6 text-primary-100'
								>
									Website Received
								</Dialog.Title>
								<div className='mt-5'>
									<p className='text-white'>
										Thank you for applying for your free website review. I aim
										to send reviews with 2-3 days.
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
				name='website-review'
				method='POST'
				netlify-honeypot='bot-field'
				data-netlify='true'
				onSubmit={handleSubmit(onSubmit)}
				className='space-y-6'
			>
				<input type='hidden' name='form-name' value='website-review' />
				<input
					type='hidden'
					name='subject'
					value='New website review request from roysheppard.digital'
				/>
				<div className='hidden'>
					<label>
						Don’t fill this out if you’re human: <input name='bot-field' />
					</label>
				</div>
				<div className='flex flex-col space-y-2'>
					<label htmlFor='url'>Website URL:</label>
					<input
						id='url'
						name='url'
						type='url'
						defaultValue={url ? url : ''}
						placeholder='https://'
						{...register('url')}
						className={`${
							errors.url && 'border-4 border-primary-200'
						} text-gray-700 rounded-lg focus:outline-none focus:ring focus:ring-gray-100 p-2`}
					/>
					{errors.url && (
						<span className='w-full mb-4 text-sm text-gray-700'>
							Please enter a valid URL. Remember to start it with{' '}
							<span className='font-bold text-sm'>http://</span> or{' '}
							<span className='font-bold text-sm'>https://</span>
						</span>
					)}
				</div>
				<div className='flex flex-col space-y-2'>
					<label htmlFor='firstName'>First name:</label>
					<input
						id='firstName'
						name='firstName'
						type='text'
						{...register('firstName')}
						className={`${
							errors.firstName && 'border-4 border-primary-200'
						} text-gray-700 rounded-lg focus:outline-none focus:ring focus:ring-gray-100 p-2`}
					/>
					{errors.firstName && (
						<span className='w-full mb-4 text-sm text-gray-700'>
							Please enter your first name above.
						</span>
					)}
				</div>
				<div className='flex flex-col space-y-2'>
					<label htmlFor='lastName'>Last name:</label>
					<input
						id='lastName'
						name='lastName'
						type='text'
						{...register('lastName')}
						className={`${
							errors.lastName && 'border-4 border-primary-200'
						} text-gray-700 rounded-lg focus:outline-none focus:ring focus:ring-gray-100 p-2`}
					/>
					{errors.lastName && (
						<span className='w-full mb-4 text-sm text-gray-700'>
							Please enter your last name above.
						</span>
					)}
				</div>
				<div className='flex flex-col space-y-2'>
					<label htmlFor='phone'>Phone number:</label>
					<input
						type='tel'
						id='phone'
						name='phone'
						{...register('phone')}
						className={`${
							errors.phone && 'border-4 border-primary-200'
						} text-gray-700 rounded-lg focus:outline-none focus:ring focus:ring-gray-100 p-2`}
					/>
					{errors.phone && (
						<span className='w-full mb-4 text-sm text-gray-700'>
							Please enter a valid phone number.
						</span>
					)}
				</div>
				<div className='flex flex-col space-y-2'>
					<label htmlFor='email'>Email:</label>
					<input
						id='email'
						name='email'
						type='email'
						{...register('email')}
						className={`${
							errors.email && 'border-4 border-primary-200'
						} text-gray-700 rounded-lg focus:outline-none focus:ring focus:ring-gray-100 p-2`}
					/>
					{errors.email && (
						<span className='w-full mb-4 text-sm text-gray-700'>
							Please enter a valid email address.
						</span>
					)}
				</div>
				<button
					type='submit'
					className='my-10 text-white bg-secondary-100 py-3 px-6 rounded-lg hover:bg-secondary-200 transition-colors duration-500 ease-in-out'
				>
					Submit Website
				</button>
			</form>
		</>
	);
};

export default ReviewForm;
