import Seperator from './Seperator';
import { SiTailwindcss, SiNextdotjs, SiPrismic, SiReact } from 'react-icons/si';

const Skills = () => {
	return (
		<section className='w-screen bg-accent-100 my-10'>
			<Seperator />
			<div className='container'>
				<div className='h-2 w-1/2 bg-primary-100 mx-auto mt-20 mb-10'></div>

				<h2 className='heading text-center mb-20 text-white leading-snug'>
					I'll keep you ahead of your competition with modern web development
				</h2>

				<div className='text-white grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 justify-center items-center gap-10 mb-20'>
					<div className='mx-auto flex flex-col items-center gap-3'>
						<SiTailwindcss className='h-24 w-24 text-gray-300' />
						<span className='w-fit bg-secondary-100/30 rounded py-2 px-3 text-sm'>
							TAILWIND
						</span>
					</div>
					<div className='mx-auto flex flex-col items-center gap-3'>
						<SiReact className='h-24 w-24 text-gray-300' />
						<span className='w-fit bg-secondary-100/30 rounded py-2 px-3 text-sm'>
							REACT
						</span>
					</div>
					<div className='mx-auto flex flex-col items-center gap-3'>
						<SiNextdotjs className='h-24 w-24 text-gray-300' />
						<span className='w-fit bg-secondary-100/30 rounded py-2 px-3 text-sm'>
							NEXTJS
						</span>
					</div>
					<div className='mx-auto flex flex-col items-center gap-3'>
						<SiPrismic className='h-24 w-24 text-gray-300' />
						<span className='w-fit bg-secondary-100/30 rounded py-2 px-3 text-sm'>
							PRISMIC
						</span>
					</div>
				</div>
			</div>
			<Seperator rotate={true} />
		</section>
	);
};

export default Skills;
