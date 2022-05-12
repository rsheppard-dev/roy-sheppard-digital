import { NextSeo } from 'next-seo';

import Layout from '../components/Layout';
import About from '../components/About';
import Contact from '../components/Contact';
import Hero from '../components/Hero';
import Review from '../components/Review';
import Seperator from '../components/Seperator';
import Services from '../components/Services';
import Skills from '../components/Skills';
import Portfolio from '../components/Portfolio';

export default function Home() {
	return (
		<Layout>
			<NextSeo title='Freelance Web Designer || Roy Sheppard Digital' />
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
