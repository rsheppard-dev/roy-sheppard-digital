import Head from 'next/head';
import Layout from './Layout';

const PageNotFound = () => {
	return (
		<>
			<Head>
				<title>404: Page Not Found</title>
			</Head>
			<Layout>
				<section className='container flex flex-col justify-center items-center'>
					<span className='text-center'>
						404 | Sorry, that page does not exist.
					</span>
				</section>
			</Layout>
		</>
	);
};

export default PageNotFound;
