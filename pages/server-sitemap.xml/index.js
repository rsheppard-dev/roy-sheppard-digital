import { getServerSideSitemap } from 'next-sitemap';

import { createClient } from '../../prismicio';

export const getServerSideProps = async ctx => {
	const client = createClient();

	const pages = await client.getAllByType('page');

	const fields = pages.map(page => ({
		loc: page.data.url,
		lastmod: new Date(page.last_publication_date).toISOString(),
	}));

	return getServerSideSitemap(ctx, fields);
};

export default function Sitemap() {}
