import Link from 'next/link';
import { useEffect } from 'react';
import Script from 'next/script';
import { useRouter } from 'next/router';
import { GTM_ID, pageview } from '../lib/gtm';
import * as fbq from '../lib/fpixel';

import { PrismicProvider } from '@prismicio/react';
import { PrismicPreview } from '@prismicio/next';
import { linkResolver, repositoryName } from '../prismicio';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	const router = useRouter();
	useEffect(() => {
		// This pageview only triggers the first time (it's important for Pixel to have real information)
		fbq.pageview();

		const handleRouteChange = () => {
			fbq.pageview();
			pageview();
		};
		router.events.on('routeChangeComplete', handleRouteChange);
		return () => {
			router.events.off('routeChangeComplete', pageview);
		};
	}, [router.events]);

	return (
		<PrismicProvider
			linkResolver={linkResolver}
			internalLinkComponent={({ href, children, ...props }) => (
				<Link href={href}>
					<a {...props}>{children}</a>
				</Link>
			)}
		>
			<PrismicPreview repositoryName={repositoryName}>
				{/* Google Tag Manager - Global base code */}
				<Script
					id='gtag-base'
					strategy='afterInteractive'
					dangerouslySetInnerHTML={{
						__html: `
						(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
						new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
						j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
						'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
						})(window,document,'script','dataLayer', '${GTM_ID}');
						`,
					}}
				/>
				<Script
					id='meta-pixel'
					strategy='afterInteractive'
					dangerouslySetInnerHTML={{
						__html: `
						!function(f,b,e,v,n,t,s)
						{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
						n.callMethod.apply(n,arguments):n.queue.push(arguments)};
						if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
						n.queue=[];t=b.createElement(e);t.async=!0;
						t.src=v;s=b.getElementsByTagName(e)[0];
						s.parentNode.insertBefore(t,s)}(window, document,'script',
						'https://connect.facebook.net/en_US/fbevents.js');
						fbq('init', '${fbq.FB_PIXEL_ID}');
						`,
					}}
				/>
				<Component {...pageProps} />
			</PrismicPreview>
		</PrismicProvider>
	);
}

export default MyApp;
