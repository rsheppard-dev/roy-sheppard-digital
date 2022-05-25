import React from 'react';
import Image from 'next/image';
import { PrismicRichText } from '@prismicio/react';

const List = ({ slice }) => (
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
		<ul className='space-y-8 mb-20 list-tick text-gray-600 prose prose-a:text-link prose-a:text-gray-600 max-w-none min-w-full'>
			{slice?.items?.map((item, i) => (
				<li key={i}>
					<PrismicRichText field={item.listItem} />
				</li>
			))}
		</ul>
	</div>
);

export default List;
