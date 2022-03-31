import Seperator from './Seperator';
import {
	Wordpress,
	WooCommerce,
	Next,
	Gatsby,
	Javascript,
	NodeJS,
	React,
	PHP,
} from './Icons';

const Skills = () => {
	return (
		<section className='w-screen bg-accent-100 my-10'>
			<Seperator />
			<div className='container'>
				<div className='h-2 w-1/2 bg-primary-100 mx-auto my-10'></div>

				<h2 className='heading text-center mb-10 text-white leading-snug'>
					I'll keep you ahead of your competition with modern web development
				</h2>

				<div className='grid grid-cols-1 xs:grid-cols-2 xl:grid-cols-4 place-content-center gap-10 mb-10'>
					<span className='mx-auto'>
						<Wordpress />
					</span>
					<span className='mx-auto'>
						<WooCommerce />
					</span>
					<span className='mx-auto'>
						<Next />
					</span>
					<span className='mx-auto'>
						<Gatsby />
					</span>
					<span className='mx-auto'>
						<Javascript />
					</span>
					<span className='mx-auto'>
						<NodeJS />
					</span>
					<span className='mx-auto'>
						<React />
					</span>
					<span className='mx-auto'>
						<PHP />
					</span>
				</div>
			</div>
			<Seperator rotate={true} />
		</section>
	);
};

export default Skills;
