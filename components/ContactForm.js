const ContactForm = () => {
	return (
		<form
			name='contact'
			method='POST'
			netlify-honeypot='bot-field'
			data-netlify='true'
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
					className='rounded-lg focus:outline-none focus:ring focus:ring-gray-100 p-2'
				/>
			</div>
			<div className='flex flex-col space-y-2'>
				<label htmlFor='phone'>Phone number:</label>
				<input
					type='text'
					id='phone'
					name='phone'
					className='rounded-lg focus:outline-none focus:ring focus:ring-gray-100 p-2'
				/>
			</div>
			<div className='flex flex-col space-y-2'>
				<label htmlFor='email'>Email:</label>
				<input
					id='email'
					name='email'
					type='text'
					className='rounded-lg focus:outline-none focus:ring focus:ring-gray-100 p-2'
				/>
			</div>
			<div className='flex flex-col space-y-2'>
				<label htmlFor='message'>Tell me about your project:</label>
				<textarea
					id='message'
					name='message'
					rows='10'
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
	);
};

export default ContactForm;
