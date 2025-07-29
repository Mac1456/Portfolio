import { Desktop } from '@phosphor-icons/react';
import { ProjectSectionProps } from '../../types';

export default function GeneralProjects({ projects, className }: ProjectSectionProps) {
	return (
		<section className={className}>
			<h2 className="text-gray-7 font-bold text-md pb-2 text-end">basic</h2>

			<div className="grid sm:grid-cols-2 gap-x-6">
				{projects.map(project => (
					<article
						key={project.title}
						className="group border-b border-gray-2 rounded -mx-2 px-2 py-3 transition-all hover:bg-gray-1 overflow-hidden">
						<div className="flex items-center justify-between">
							<div className="flex items-center gap-2">
								<span className="text-gray-6 font-semibold">
									{project.title}
								</span>
							</div>
							<div className="flex items-center gap-1  text-gray-3 group-hover:text-gray-6 -mt-1 mr-1">
								<a
									href={project.demoLink}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-1">
									<Desktop
										size="20"
										weight="duotone"
									/>
									<span className="overflow-hidden w-0 group-hover:w-9 transition-[width] duration-500 ease-in-out hover:underline hover:text-white">
										demo
									</span>
								</a>
							</div>
						</div>
						<div className="text-xs text-gray-5">
							<p className="mt-1 mb-auto">{project.description}</p>
						</div>
					</article>
				))}
			</div>
		</section>
	);
}
