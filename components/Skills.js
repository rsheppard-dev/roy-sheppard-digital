import Seperator from './Seperator';
import { SiTailwindcss, SiNextdotjs, SiPrismic, SiReact } from 'react-icons/si';
import Heading from './Heading';

const Skills = () => {
	return (
		<section className='w-screen bg-accent-100 my-10'>
			<Seperator />
			<div className='container py-20'>
				<Heading
					title='Stay ahead of your competition with modern web development'
					tag='h2'
				/>

				<div className='text-white grid grid-cols-2 md:grid-cols-4 justify-center items-center gap-10'>
					<div className='mx-auto flex flex-col items-center gap-3'>
						<SiTailwindcss
							className='h-24 w-24 text-gray-300'
							title='Taiulwind'
						/>
						<span className='w-fit bg-secondary-100/30 rounded py-2 px-3 text-sm'>
							TAILWIND
						</span>
					</div>
					<div className='mx-auto flex flex-col items-center gap-3'>
						<SiReact className='h-24 w-24 text-gray-300' title='React' />
						<span className='w-fit bg-secondary-100/30 rounded py-2 px-3 text-sm'>
							REACT
						</span>
					</div>
					<div className='mx-auto flex flex-col items-center gap-3'>
						<SiNextdotjs className='h-24 w-24 text-gray-300' title='NextJS' />
						<span className='w-fit bg-secondary-100/30 rounded py-2 px-3 text-sm'>
							NEXTJS
						</span>
					</div>
					<div className='mx-auto flex flex-col items-center gap-3'>
						<SiPrismic className='h-24 w-24 text-gray-300' title='Prismic' />
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
