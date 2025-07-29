import { motion } from 'framer-motion';
import { projects } from '../../data';
import HighlightedProjects from './HighlightedProjects';

export default function Projects() {
	const highlightedProjects = projects.filter(project => project.category === 'highlight');

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




		</motion.div>
	);
}
