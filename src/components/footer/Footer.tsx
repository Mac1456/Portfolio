export default function Footer() {
	const lastUpdated = new Date('2025-01-13');
	const diffInDays = Math.floor((Date.now() - lastUpdated.getTime()) / 86400000);

	return (
		<footer className="mt-8 text-sm text-gray-5 flex justify-between gap-1 flex-wrap sm:flex-nowrap">
			<p className="flex-shrink-0 mr-3">
				updated:{' '}
				<span className="font-bold text-gray-8">
					{diffInDays === 0
						? 'today'
						: `${diffInDays === 1 ? 'yesterday' : `${diffInDays} days ago`}`}
				</span>
			</p>
			<p className="">
				built with <span className="text-gray-6">typescript, react</span> and{' '}
				<span className="text-gray-6">tailwind</span>
			</p>
		</footer>
	);
}
