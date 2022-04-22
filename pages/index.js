import Head from 'next/head';

import Layout from '../components/Layout';
import About from '../components/About';
import Contact from '../components/Contact';
import Hero from '../components/Hero';
import Review from '../components/Review';
import Seperator from '../components/Seperator';
import Services from '../components/Services';
import Skills from '../components/Skills';
import Portfolio from '../components/Portfolio';
import Meta from '../components/Meta';

export default function Home() {
	return (
		<Layout>
			<Head>
				<Meta />
				<title>Freelance Web Designer || Roy Sheppard Digital</title>
			</Head>
			<Hero />
			<Review />
			<Seperator dark={true} />
			<About />
			<Portfolio />
			<Services />
			<Skills />
			<Contact />
		</Layout>
	);
}
