export default function Footer() {
	const lastUpdated = new Date('2025-01-13');
	const diffInDays = Math.floor((Date.now() - lastUpdated.getTime()) / 86400000);

	return (
		<footer className="mt-8 text-sm text-gray-5 flex justify-between gap-1 flex-wrap sm:flex-nowrap">
			<a
				className="flex-shrink-0 mr-3 group"
				href="https://github.com/aniqatc/directory"
				target="_blank">
				updated:{' '}
				<span className="font-bold text-gray-8 group-hover:underline transition-all">
					{diffInDays === 0
						? 'today'
						: `${diffInDays === 1 ? 'yesterday' : `${diffInDays} days ago`}`}
				</span>
			</a>
			<p className="">
				built with <span className="text-gray-6">typescript, react</span> and{' '}
				<span className="text-gray-6">tailwind</span>
			</p>
		</footer>
	);
}
