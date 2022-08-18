const TestForm = () => {
	return (
		<form
			data-netlify='true'
			name='test-form'
			method='POST'
			netlify-honeypot='bot-field'
		>
			<input type='hidden' name='form-name' value='test-form' />
			<input type='hidden' name='subject' value='Test form has messaged you' />
			<div className='hidden'>
				<label>
					Don’t fill this out if you’re human: <input name='bot-field' />
				</label>
			</div>
			<p>
				<label>
					Your Name: <input type='text' name='name' />
				</label>
			</p>
			<p>
				<label>
					Your Email: <input type='email' name='email' />
				</label>
			</p>
			<p>
				<label>
					Your Role:{' '}
					<select name='role[]' multiple>
						<option value='leader'>Leader</option>
						<option value='follower'>Follower</option>
					</select>
				</label>
			</p>
			<p>
				<label>
					Message: <textarea name='message'></textarea>
				</label>
			</p>
			<p>
				<button type='submit'>Send</button>
			</p>
		</form>
	);
};

export default TestForm;
