import { useState } from 'react';
import { Menu, Transition } from '@headlessui/react';

import { ArrowNav } from './Icons';
import MyLink from './MyLink';
import OpenCalendar from './OpenCalendar';

const Dropdown = ({ scrollDown }) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<Menu as='div' className='relative inline-block text-left'>
			<button onClick={() => setIsOpen(!isOpen)}>
				<span className='link-underline link-underline-black'>Services</span>
				<ArrowNav
					className={`${
						isOpen && 'rotate-180'
					} h-6 w-6 inline-block align-sub ml-1 transition-transform`}
				/>
			</button>
			<Transition
				show={isOpen && !scrollDown}
				enter='transition duration-500 ease-in-out'
				enterFrom='scale-0 opacity-0'
				enterTo='scale-100 opacity-100'
				leave='transition duration-500 ease-in-out'
				leaveFrom='scale-100 opacity-100'
				leaveTo='scale-0 opacity-0'
			>
				<Menu.Items
					as='div'
					static
					className='absolute left-0 mt-12 flex flex-col space-y-2 bg-accent-100/90 p-4 rounded-md focus:outline-none focus:border-transparent focus:shadow focus:ring-4 focus:ring-gray-400 focus:ring-opacity-30'
				>
					<Menu.Item>
						{({ active }) => (
							<MyLink
								href='/web-design-watford'
								className={`${
									active && 'bg-secondary-200'
								} text-lg w-full rounded-md p-2 transition whitespace-nowrap`}
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
								} text-lg w-full rounded-md p-2 transition whitespace-nowrap`}
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
								} text-lg w-full rounded-md p-2 transition whitespace-nowrap`}
							>
								E-Commerce
							</MyLink>
						)}
					</Menu.Item>
					<Menu.Item>
						{({ active }) => (
							<button
								onClick={OpenCalendar}
								className={`${
									active && 'bg-secondary-200'
								} text-left text-lg w-full rounded-md p-2 transition whitespace-nowrap`}
							>
								Free Strategy Call
							</button>
						)}
					</Menu.Item>
					<Menu.Item>
						{({ active }) => (
							<MyLink
								href='/free-website-review'
								className={`${
									active && 'bg-secondary-200'
								} text-lg w-full rounded-md p-2 transition whitespace-nowrap`}
							>
								Free Website Review
							</MyLink>
						)}
					</Menu.Item>
				</Menu.Items>
			</Transition>
		</Menu>
	);
};

export default Dropdown;
