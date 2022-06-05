import Head from 'next/head';
import Layout from './Layout';

const PageNotFound = () => {
	return (
		<>
			<Head>
				<title>404: Page Not Found</title>
			</Head>
			<Layout>
				<section className='container h-full text-center flex justify-center items-center'>
					404 | Sorry, that page does not exist.
				</section>
			</Layout>
		</>
	);
};

export default PageNotFound;
