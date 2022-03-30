import { useRouter } from 'next/router';

const WebsiteReview = props => {
	const router = useRouter();

	const url = router.query.url;

	return (
		<section className='container mt-40 text-accent-100'>
			<div className='h-2 w-1/2 bg-primary-100 mx-auto my-10'></div>
			<h1 className='text-center text-3xl md:text-6xl font-bold mb-10'>
				Free Website Review
			</h1>
			<p className='mb-10'>
				Are you struggling to get leads or gain conversations through your
				website?
			</p>

			<p className='font-bold'>{url}</p>
		</section>
	);
};

export default WebsiteReview;
