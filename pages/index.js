import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import LetsTalk from '../components/LetsTalk';
import Navbar from '../components/Navbar';
import Review from '../components/Review';
import Seperator from '../components/Seperator';
import Services from '../components/Services';
import Skills from '../components/Skills';

export default function Home() {
	return (
		<>
			<Navbar />
			<Hero />
			<Review />
			<Seperator dark={true} />
			<About />
			<LetsTalk />
			<Services />
			<Skills />
			<Contact />
			<Footer />
		</>
	);
}
