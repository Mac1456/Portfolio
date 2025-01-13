import { personal } from '../../data';

export default function SocialLinks() {
	return (
		<ul className="text-sm text-gray-5 flex flex-col items-end">
			{personal.socialMedia.map(link => {
				return (
					<li key={link.label}>
						<a
							href={link.href}
							target="_blank"
							className="flex items-center gap-2 transition-all hover:text-gray-9 group">
							{link.label}{' '}
							<span className="group-hover:animate-shake">
								<link.Icon
									size={20}
									weight="duotone"
								/>
							</span>
						</a>
					</li>
				);
			})}
		</ul>
	);
}
