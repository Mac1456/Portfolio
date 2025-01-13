import { motion } from 'framer-motion';
import { projects } from '../../data';
import StarredProjects from './StarredProjects';
import HighlightedProjects from './HighlightedProjects';
import GeneralProjects from './GeneralProjects';

export default function Projects() {
	const highlightedProjects = projects.filter(project => project.category === 'highlight');
	const genProjects = projects.filter(project => project.category === 'gen');
	const starredProjects = genProjects
		.filter(project => project.starCount >= 3)
		.sort((a, b) => b.starCount - a.starCount);
	const generalProjects = genProjects.filter(project => project.starCount < 3);

	return (
		<motion.div>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.6 }}>
				<HighlightedProjects
					projects={highlightedProjects}
					className="pl-1 mb-2 overflow-hidden"
				/>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.8 }}>
				<StarredProjects
					projects={starredProjects}
					className="pl-1 mb-2 mt-10 overflow-hidden"
				/>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 1 }}>
				<GeneralProjects
					projects={generalProjects}
					className="pl-1 mb-2 mt-10 overflow-hidden"
				/>
			</motion.div>
		</motion.div>
	);
}
