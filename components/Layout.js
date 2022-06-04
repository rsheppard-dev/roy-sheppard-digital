import { LocalBusinessJsonLd } from 'next-seo';

import Navbar from './Navbar';
import Footer from './Footer';
import CookieConsent from './CookieConsent';

const Layout = ({ children }) => {
	return (
		<div className='flex flex-col min-h-screen'>
			<div className='flex-1'>
				<LocalBusinessJsonLd
					type='ProfessionalService'
					id='https://www.roysheppard.digital'
					name='Roy Sheppard Digital'
					description='Freelance website designer and JAMstack developer based in Watford, Hertfordshire.'
					url='-0.413290'
					telephone='07883066944'
					email='info@roysheppard.digital'
					priceRange='$$'
					address={{
						streetAddress: '43 Maytree Crescent',
						addressLocality: 'Watford',
						addressRegion: 'Hertfordshire',
						postalCode: 'WD24 5NJ',
						addressCountry: 'UK',
					}}
					geo={{
						latitude: '51.683350',
						longitude: '-0.413290',
					}}
					images={[
						'https://www.roysheppard.digital/images/freelance-web-developer.png',
						'https://www.roysheppard.digital/images/web-developer-watford.jpg',
					]}
					sameAs={[
						'https://www.facebook.com/roysheppard.digital',
						'https://twitter.com/rsheppard_dev',
						'https://www.instagram.com/roysheppard.digital',
						'https://www.linkedin.com/in/roysheppard-digital',
					]}
					openingHours={[
						{
							opens: '10:00',
							closes: '19:00',
							dayOfWeek: [
								'Monday',
								'Tuesday',
								'Wednesday',
								'Thursday',
								'Friday',
								'Saturday',
								'Sunday',
							],
						},
					]}
					makesOffer={[
						{
							priceSpecification: {
								type: 'UnitPriceSpecification',
								priceCurrency: 'GBP',
								price: '750-2800',
							},
							itemOffered: {
								name: 'Web Design Services',
								description:
									'Whether you want me to design you a brand new website or redesign an existing website. I will come up with a design that is made to convert visitors into customers.',
							},
						},
						{
							priceSpecification: {
								type: 'UnitPriceSpecification',
								priceCurrency: 'GBP',
								price: '750-5000',
							},
							itemOffered: {
								name: 'Web Development Services',
								description:
									'Do you find yourself repeating the same tasks over and over? Find out how web development can save you time and simplify your business.',
							},
						},
						{
							priceSpecification: {
								type: 'UnitPriceSpecification',
								priceCurrency: 'GBP',
								price: '2800 - 5000',
							},
							itemOffered: {
								name: 'E-Commerce Services',
								description:
									'More people are shopping online than ever before. Find out how I can help you reach more customers with an e-commerce website.',
							},
						},
					]}
					rating={{
						ratingValue: '5',
						ratingCount: '1',
					}}
					review={[
						{
							author: 'George Thomas',
							datePublished: '2022-05-26',
							reviewBody:
								'Roy was exceptionally professional and efficient with building us a website for our new barbershop. He had a lot of his own very useful ideas which helped us gain a further reach to our audience. Would highly recommend!',
							reviewRating: {
								bestRating: '5',
								worstRating: '1',
								ratingValue: '5',
							},
						},
					]}
				/>
				<Navbar />
				<main>{children}</main>
			</div>
			<Footer />
			<CookieConsent />
		</div>
	);
};

export default Layout;
