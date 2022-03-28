import { Menu, Transition } from '@headlessui/react';
import Link from 'next/link';
import { ArrowNav } from './Icons';

const Dropdown = () => {
	const MyLink = props => {
		const { href, className, children, ...rest } = props;
		return (
			<Link href={href}>
				<a {...rest} className={className}>
					{children}
				</a>
			</Link>
		);
	};
	return (
		<Menu as='div' className='relative inline-block text-left'>
			{({ open }) => (
				<>
					<Menu.Button>
						<span className='link-underline link-underline-black'>
							Services
						</span>
						<ArrowNav
							className={`${
								open && 'rotate-180'
							} h-6 w-6 inline-block align-sub ml-1 transition-transform`}
						/>
					</Menu.Button>
					<Transition
						enter='transition duration-100 ease-out'
						enterFrom='transform scale-50 opacity-0'
						enterTo='transform scale-100 opacity-100'
						leave='transition duration-75 ease-out'
						leaveFrom='transform scale-100 opacity-100'
						leaveTo='transform scale-50 opacity-0'
					>
						<Menu.Items className='absolute left-0 w-56 mt-10 flex flex-col space-y-2 bg-accent-100/90 p-4 rounded-md'>
							<Menu.Item>
								{({ active }) => (
									<MyLink
										href='/web-design-watford'
										className={`${
											active && 'bg-secondary-200'
										} text-lg w-full rounded-md p-2 transition`}
									>
										Web Design
									</MyLink>
								)}
							</Menu.Item>
							<Menu.Item>
								{({ active }) => (
									<MyLink
										href='/web-development-watford'
										className={`${
											active && 'bg-secondary-200'
										} text-lg w-full rounded-md p-2 transition`}
									>
										Web Development
									</MyLink>
								)}
							</Menu.Item>
							<Menu.Item>
								{({ active }) => (
									<MyLink
										href='/ecommerce-watford'
										className={`${
											active && 'bg-secondary-200'
										} text-lg w-full rounded-md p-2 transition`}
									>
										E-Commerce
									</MyLink>
								)}
							</Menu.Item>
						</Menu.Items>
					</Transition>
				</>
			)}
		</Menu>
	);
};

export default Dropdown;
