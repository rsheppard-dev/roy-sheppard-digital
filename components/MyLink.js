import Link from 'next/link';

const MyLink = ({ href, className, children, ...rest }) => {
	return (
		<Link href={href} passHref>
			<a {...rest} className={className}>
				{children}
			</a>
		</Link>
	);
};

export default MyLink;
