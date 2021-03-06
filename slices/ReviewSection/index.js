import React from 'react';
import Router from 'next/router';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Arrow } from '../../components/Icons';

const ReviewSection = ({ slice }) => {
	const schema = yup
		.object({
			url: yup.string().url().required(),
		})
		.required();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = data => {
		Router.push({
			pathname: '/free-website-review',
			query: { url: data.url },
		});
	};
	return (
		<section className='text-center w-screen bg-accent-100'>
			<div className='container pb-20'>
				<div className='flex justify-center'>
					<div className='md:ml-[100px]'>
						<form
							name='url-submission'
							method='POST'
							action='/free-website-review'
							onSubmit={handleSubmit(onSubmit)}
						>
							<label htmlFor='url' className='text-gray-300 block mb-10'>
								{slice.primary.description}
							</label>
							<div className='mb-10 space-x-3 space-y-6 md:space-y-0 flex flex-col flex-wrap md:flex-row justify-center items-center'>
								{errors.url && (
									<span className='w-full mb-4 text-sm text-gray-300'>
										Please enter a valid URL.
										<br />
										Remember to start it with{' '}
										<span className='font-bold text-sm'>http://</span> or{' '}
										<span className='font-bold text-sm'>https://</span>
									</span>
								)}
								<input
									type='url'
									name='url'
									placeholder={slice.primary.placeholder}
									{...register('url')}
									className={`${
										errors.url && 'border-4 border-primary-200	'
									} w-full md:w-96 p-4 rounded-xl md:rounded-tr-none md:rounded-br-none`}
								/>

								<button className='w-fit bg-primary-100 hover:bg-primary-200 transition-colors duration-500 px-6 py-4 rounded-xl md:rounded-tl-none md:rounded-bl-none md:rounded-br-full md:rounded-tr-full'>
									{slice.primary.buttonText}
								</button>
							</div>
						</form>
					</div>

					<div className='hidden md:block'>
						<Arrow />
					</div>
				</div>
			</div>
		</section>
	);
};

export default ReviewSection;
