import Link from 'next/link';

import { HiArrowNarrowRight } from 'react-icons/hi';
import Heading from './Heading';

const PriceGuide = () => {
	return (
		<section className='container my-20 text-accent-100'>
			<Heading tag='h2' dark={true} title='Website price guide' />

			<div className='flex flex-wrap gap-10 justify-center'>
				<div className='rounded drop-shadow-md hover:drop-shadow-lg flex flex-col justify-between bg-white p-6 w-80 group'>
					<span>
						<h3 className='subheading mb-2'>Brochure</h3>
						<h4 className='text-base text-gray-600 mb-5'>
							JAMstack brochure website for new and small businesses.
						</h4>
						<p className='mb-10 text-sm text-gray-600'>
							from
							<span className='ml-4 mb-10 text-2xl text-secondary-200 bold'>
								£750
							</span>
						</p>
						<ul className='space-y-4 text-gray-600 list-tick'>
							<li className='font-lato text-lg'>1 - 5 page website.</li>
							<li className='font-lato text-lg'>Bespoke website design.</li>
							<li className='font-lato text-lg'>SEO setup.</li>
							<li className='font-lato text-lg'>
								Google Tag Manager and Analytics setup.
							</li>
							<li className='font-lato text-lg'>Content management system.</li>
							<li className='font-lato text-lg'>Contact form.</li>
							<li className='font-lato text-lg'>Social media integration.</li>
						</ul>
					</span>
					<span>
						<Link href='/#contact'>
							<a>
								<div className='mt-10 button-tertiary w-fit text-lg'>
									Enquire about my JAMstack brochure websites
									<HiArrowNarrowRight className='inline-block ml-2' />
								</div>
							</a>
						</Link>
					</span>
				</div>

				<div className='rounded drop-shadow-md hover:drop-shadow-lg flex flex-col justify-between bg-white p-6 w-80 group'>
					<span>
						<h3 className='subheading mb-2'>Marketing</h3>
						<h4 className='text-base text-gray-600 mb-5'>
							JAMstack marketing website for growing businesses.
						</h4>
						<p className='mb-10 text-sm text-gray-600'>
							from
							<span className='ml-4 mb-10 text-2xl text-secondary-200 bold'>
								£1200
							</span>
						</p>
						<ul className='space-y-4 text-gray-600 list-tick'>
							<li className='font-lato text-lg'>5 or more pages.</li>
							<li className='font-lato text-lg'>Bespoke website design.</li>
							<li className='font-lato text-lg'>SEO setup.</li>
							<li className='font-lato text-lg'>
								Google Tag Manager and Analytics setup.
							</li>
							<li className='font-lato text-lg'>Content management system.</li>
							<li className='font-lato text-lg'>Contact form.</li>
							<li className='font-lato text-lg'>Social media integration.</li>
							<li className='font-lato text-lg'>Blog or custom feature.</li>
						</ul>
					</span>
					<span>
						<Link href='/#contact'>
							<a>
								<div className='mt-10 button-tertiary w-fit text-lg'>
									Enquire about my JAMstack marketing websites
									<HiArrowNarrowRight className='inline-block ml-2' />
								</div>
							</a>
						</Link>
					</span>
				</div>

				<div className='rounded drop-shadow-md hover:drop-shadow-lg flex flex-col justify-between bg-white p-6 w-80 group'>
					<span>
						<h3 className='subheading mb-2'>E-Commerce</h3>
						<h4 className='text-base text-gray-600 mb-5'>
							JAMstack e-commerce website for selling goods or services online.
						</h4>
						<p className='mb-10 text-sm text-gray-600'>
							from
							<span className='ml-4 mb-10 text-2xl text-secondary-200 bold'>
								£2800
							</span>
						</p>
						<ul className='space-y-4 text-gray-600 list-tick'>
							<li className='font-lato text-lg'>
								5 or more pages (plus unlimited product pages).
							</li>
							<li className='font-lato text-lg'>Bespoke website design.</li>
							<li className='font-lato text-lg'>SEO setup.</li>
							<li className='font-lato text-lg'>
								Google Tag Manager and Analytics setup.
							</li>
							<li className='font-lato text-lg'>Content management system.</li>
							<li className='font-lato text-lg'>Contact form.</li>
							<li className='font-lato text-lg'>Social media integration.</li>
							<li className='font-lato text-lg'>Shopping cart.</li>
							<li className='font-lato text-lg'>Payment proccessor.</li>
						</ul>
					</span>
					<span>
						<Link href='/#contact'>
							<a>
								<div className='mt-10 button-tertiary w-fit text-lg'>
									Enquire about my JAMstack e-commerce websites
									<HiArrowNarrowRight className='inline-block ml-2' />
								</div>
							</a>
						</Link>
					</span>
				</div>
			</div>
		</section>
	);
};

export default PriceGuide;
