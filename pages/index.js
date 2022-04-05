import Layout from '../components/Layout';
import About from '../components/About';
import Contact from '../components/Contact';
import Hero from '../components/Hero';
import LetsTalk from '../components/LetsTalk';
import Review from '../components/Review';
import Seperator from '../components/Seperator';
import Services from '../components/Services';
import Skills from '../components/Skills';

export default function Home() {
	return (
		<Layout>
			<Hero />
			<Review />
			<Seperator dark={true} />
			<About />
			<LetsTalk />
			<Services />
			<Skills />
			<Contact />
		</Layout>
	);
}
