import { GetServerSideProps } from 'next';
import { getServerSideSitemap } from 'next-sitemap';

import { createClient } from '../../prismicio';

export const getServerSideProps = async ctx => {
	const client = createClient();

	const pages = await client.getAllByType('page');

	const fields = pages.map(page => ({
		loc: page.data.url,
		lastmod: page.last_publication_date,
	}));

	return getServerSideSitemap(ctx, fields);
};

export default function Sitemap() {}