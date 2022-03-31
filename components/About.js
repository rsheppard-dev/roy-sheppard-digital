import Image from 'next/image';

const About = () => {
	return (
		<section id='about' className='container text-accent-100 scroll-mt-18'>
			<div className='h-2 w-1/2 bg-primary-100 mx-auto my-10'></div>

			<h2 className='heading text-center mb-10 leading-snug'>
				Why hire me as your
				<br />
				freelance web designer?
			</h2>

			<div className='mb-10 lg:mb-0 flex justify-center md:block md:float-right shape-outside-circle md:ml-2'>
				<Image
					src='/images/freelance-web-designer.png'
					alt='Roy Sheppard Digital'
					layout='intrinsic'
					width={300}
					height={300}
				/>
			</div>

			<ul className='space-y-8 mb-10'>
				<li>
					All my website designs are made custom for you, your business and your
					brand. I do not use themes, templates or bloated page builders.
				</li>
				<li>
					I’m a full-stack developer, meaning I am comfortable working with both
					the front end and back end parts of development. This allows me to
					create fully custom and advanced functionality for your website.
				</li>
				<li>
					I specialise in using modern JAMstack tools and headless
					content-management-systems. Sorry for the tech talk - basically, this
					means your website will be fast, more secure and easily scalable.
				</li>
				<li>
					You will be working with a person and not a faceless agency. I will
					regularly keep you updated throughout the project and you will be able
					to contact me directly with any questions or concerns.
				</li>
			</ul>
		</section>
	);
};

export default About;
