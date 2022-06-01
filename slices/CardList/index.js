import React from 'react';
import Image from 'next/image';
import { PrismicRichText } from '@prismicio/react';

const CardList = ({ slice }) => (
	<section className='bg-accent-100 pb-20'>
		<div className='container text-white'>
			<div className='flex flex-wrap justify-center gap-20'>
				{slice?.items?.map((item, i) => (
					<div
						key={i}
						className='relative mt-10 rounded flex flex-col items-center bg-secondary-100/30 p-10 w-80 text-white'
					>
						<div className='absolute -top-8 left-[calc(50%-2rem)] flex justify-center items-center text-center bg-accent-100 rounded-full w-18 h-18 font-futura font-bold text-5xl text-primary-100'>
							{i + 1}
						</div>
						<h3 className='subheading my-10 text-center'>{item.cardTitle}</h3>
						<div className='pb-10 relative'>
							<Image
								src={item.image.url}
								alt={item.image.alt}
								width={100}
								height={100}
							/>
						</div>
						<div className='prose text-gray-300'>
							<PrismicRichText field={item.cardBody} />
						</div>
					</div>
				))}
			</div>
		</div>
	</section>
);

export default CardList;
