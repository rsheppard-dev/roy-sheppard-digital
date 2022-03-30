import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
	return (
		<div className='flex flex-col min-h-screen'>
			<div className='flex-1'>
				<Navbar />
				<main>{children}</main>
			</div>
			<Footer />
		</div>
	);
};

export default Layout;
