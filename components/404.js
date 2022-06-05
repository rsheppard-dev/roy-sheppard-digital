import Layout from './Layout';

const PageNotFound = () => {
	return (
		<Layout>
			<section className='container h-screen text-center flex justify-center items-center'>
				404: Sorry, that page does not exist.
			</section>
		</Layout>
	);
};

export default PageNotFound;
