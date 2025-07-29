import { useState, useEffect } from 'react';
import { personal } from '../../data';

// All available technologies
const ALL_TECHS = [
	'gpt-4', 'openai', 'langgraph', 'firebase', 'react',
	'electron', 'nodejs', 'typescript', 'docker', 'vite',
	'php', 'suitecrm', 'react-query', 'tailwind', 'mui',
	'godot', 'gdscript', 'ai-behavior-trees', 'game-physics', 'itch.io',
	'firebase-functions', 'firestore', 'zustand', 'framer-motion', 'vercel',
	'web-speech-api', 'compromise.js', 'readability-score', 'html2canvas', 'jspdf',
	'langchain', 'vector-databases', 'embeddings', 'rag', 'llms',
	'nextjs', 'prisma', 'openai-api', 'gpt-3.5-turbo', 'claude',
	'streaming-responses', 'sse', 'hipaa-compliance', 'icd-10', 'medical-nlp',
	'clinical-ai', 'ehr-integration', 'electron-builder', 'cross-platform', 'desktop-apps',
	'native-apis', 'auto-updater', 'firebase-auth', 'cloud-storage', 'realtime-db',
	'serverless', 'cloud-functions', 'react-hooks', 'custom-hooks', 'context-api',
	'suspense', 'concurrent-mode', 'mls-integration', 'lead-routing', 'crm-apis',
	'workflow-automation', 'legacy-modernization'
];

// Function to get 3 random unique techs
const getRandomTechs = (exclude: string[] = []): string[] => {
	const available = ALL_TECHS.filter(tech => !exclude.includes(tech));
	const selected: string[] = [];
	
	for (let i = 0; i < 3; i++) {
		const randomIndex = Math.floor(Math.random() * available.length);
		selected.push(available[randomIndex]);
		available.splice(randomIndex, 1);
	}
	
	return selected;
};

export default function About() {
	const [currentTechs, setCurrentTechs] = useState(() => getRandomTechs());
	const [isTransitioning, setIsTransitioning] = useState(false);

	useEffect(() => {
		const interval = setInterval(() => {
			setIsTransitioning(true);
			setTimeout(() => {
				setCurrentTechs(prevTechs => getRandomTechs(prevTechs));
				setIsTransitioning(false);
			}, 300);
		}, 5000); // Change every 5 seconds

		return () => clearInterval(interval);
	}, []);

	return (
		<section className="mt-10 mb-12">
			<div className="w-full xs:w-[45ch] text-gray-7 mb-8">{personal.about}</div>
			<div className="text-sm w-full xs:w-[54ch]">
				currently tinkering with:{' '}
				<span 
					className={`text-xl text-accent-orange leading-none inline-block transition-all duration-300 min-h-[1.5em] ${
						isTransitioning 
							? 'opacity-0 transform scale-95 blur-sm' 
							: 'opacity-100 transform scale-100 blur-0'
					}`}
					style={{ 
						minWidth: '400px',
						display: 'inline-block'
					}}
				>
					{currentTechs.join(', ')}
				</span>
			</div>
		</section>
	);
}
