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
	const title = 'Freelance Web Designer - Watford';
	const description =
		'I am a freelance web designer and developer based in Watford. I create affordable, modern JAMstack websites that will future-proof your business.';
	return (
		<Layout>
			<NextSeo
				title={title}
				description={description}
				canonical={url}
				openGraph={{
					type: 'website',
					url,
					title: title,
					description: description,
					images: [
						{
							url: 'https://www.roysheppard.digital/images/og-image.png',
							width: 1200,
							height: 640,
							alt: 'Freelance web developer making e-commerce websites.',
						},
					],
				}}
			/>
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
