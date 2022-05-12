import Navbar from './Navbar';
import Footer from './Footer';
import CookieConsent from './CookieConsent';
import Head from 'next/head';
import Favicon from './Favicon';

const Layout = ({ children }) => {
	return (
		<div className='flex flex-col min-h-screen'>
			<Head>
				<Favicon />
			</Head>
			<div className='flex-1'>
				<Navbar />
				<main>{children}</main>
			</div>
			<Footer />
			<CookieConsent />
		</div>
	);
};

export default Layout;
