import { GithubLogo, Desktop, Circle, TerminalWindow } from '@phosphor-icons/react';
import { ProjectSectionProps } from '../../types';

export default function HighlightedProjects({ projects, className }: ProjectSectionProps) {
	return (
		<section className={className}>
			<h2 className="text-accent-blue font-bold text-md pb-2 text-end">highlights</h2>

			{projects.map(project => (
				<article
					key={project.title}
					className="group border-b border-gray-2 rounded -mx-2 px-2 py-3 transition-all hover:bg-gray-1 overflow-hidden">
					<div className="flex items-center justify-between">
						<div className="flex items-center gap-2">
							<a
								href={project.ghLink}
								target="_blank"
								className="text-white font-semibold hover:underline">
								{project.title}
							</a>
							<p
								className={`flex items-center gap-1 ${
									project.status === 'ongoing' ? 'text-accent-orange' : 'text-highlight-green'
								}`}>
								<span className="flex-shrink-0">
									<Circle
										weight="fill"
										size="8"
									/>
								</span>{' '}
								<span className="text-xs overflow-hidden w-0 group-hover:w-full transition-[width] duration-500 ease-in-out">
									{project.status === 'ongoing' ? 'wip' : 'complete'}
								</span>
							</p>
						</div>
						<div className="flex items-center gap-1 text-gray-3 group-hover:text-gray-6 -mt-1 -mr-1">
							{project.npm && (
								<span className="hidden xs:block font-hand text-md s:text-xl text-highlight-green mr-2">
									published on npm
								</span>
							)}
							<a
								href={project.demoLink}
								className="flex items-center gap-1">
								{project.npm ? (
									<TerminalWindow
										size="20"
										weight="duotone"
									/>
								) : (
									<Desktop
										size="20"
										weight="duotone"
									/>
								)}
								<span className="overflow-hidden w-0 group-hover:w-9 transition-[width] duration-500 ease-in-out hover:underline hover:text-white">
									demo
								</span>
							</a>
							<a
								href={project.ghLink}
								className="flex items-center gap-1">
								<GithubLogo
									size="20"
									weight="duotone"
								/>
								<span className="hidden [@media(min-width:355px)]:block -ml-0.5 overflow-hidden w-0 group-hover:w-9 transition-[width] duration-500 ease-in-out hover:underline hover:text-white">
									repo
								</span>
							</a>
						</div>
					</div>
					<div className="flex items-center justify-between text-xs gap-3 s:flex-nowrap flex-wrap">
						<p className="mt-1 w-full s:w-[45ch] mb-auto">{project.description}</p>
						<ul className="mt-1 text-gray-4 flex gap-2 flex-wrap justify-end w-full s:w-[50ch]">
							{project.pwa && (
								<li className="rounded border px-2 py-0.5 text-highlight-blue border-muted-blue group-hover:border-highlight-blue transition-all duration-500 ease-in-out">
									pwa
								</li>
							)}
							{project.npm && (
								<li className="rounded border px-2 py-0.5 text-highlight-green border-muted-green group-hover:border-highlight-green transition-all duration-500 ease-in-out">
									npm
								</li>
							)}
							{project.tech.map(t => (
								<li
									key={t}
									className="rounded border border-gray-3 px-2 py-0.5 group-hover:text-gray-6 group-hover:border-gray-4 transition-all duration-500 ease-in-out">
									{t}
								</li>
							))}
						</ul>
					</div>
				</article>
			))}
		</section>
	);
}
