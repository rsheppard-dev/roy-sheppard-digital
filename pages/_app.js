import { motion } from 'framer-motion';

import '../styles/globals.css';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps, router }) {
	const pageVariants = {
		pageInitial: {
			opacity: 0,
		},
		pageAnimate: {
			opacity: 1,
		},
	};
	return (
		<motion.div
			key={router.route}
			variants={pageVariants}
			initial='pageInitial'
			animate='pageAnimate'
		>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</motion.div>
	);
}

export default MyApp;
