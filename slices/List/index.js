import React from 'react';
import Image from 'next/image';
import { PrismicRichText } from '@prismicio/react';

const List = ({ slice }) => (
	<article
		className={`w-full pb-20 ${
			slice.variation === 'listDarkBackground' ? 'bg-accent-100' : 'bg-white'
		}`}
	>
		<div className='container'>
			{slice.variation === 'listWithImage' && (
				<div className='mb-10 md:mb-0 flex justify-center md:block md:float-right shape-outside-circle md:ml-2'>
					<Image
						src={slice.primary.image.url}
						alt={slice.primary.image.alt}
						layout='intrinsic'
						width={300}
						height={300}
					/>
				</div>
			)}
			<ul
				className={`list-tick prose prose-a:text-link ${
					slice.variation === 'listDarkBackground'
						? 'text-gray-300 prose-invert'
						: 'text-gray-600 prose-a:text-gray-600'
				} max-w-none min-w-full`}
			>
				{slice?.items?.map((item, i) => (
					<li key={i}>
						<PrismicRichText field={item.listItem} />
					</li>
				))}
			</ul>
		</div>
	</article>
);

export default List;
