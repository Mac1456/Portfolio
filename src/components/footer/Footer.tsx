import { personal } from '../../data';

export default function Footer() {
	return (
		<footer className="mt-8 text-sm text-gray-5 flex justify-between gap-1 flex-wrap sm:flex-nowrap">
			<p className="">
				built with <span className="text-gray-6">typescript, react</span> and{' '}
				<span className="text-gray-6">tailwind</span>
			</p>
		</footer>
	);
}
