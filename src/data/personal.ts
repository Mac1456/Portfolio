import { PersonalInfo } from '../types';
import {
	GithubLogo,
	// CodepenLogo,
	// Butterfly,
	// TwitterLogo,
	PaperPlaneTilt,
	LinkedinLogo,
} from '@phosphor-icons/react';

export const personal: PersonalInfo = {
	availability: true,
	name: 'Mustafa Chaudheri',
	title: 'AI FIRST ENGINEER',
	city: '',
	about: 'An archive of my ongoing and completed/developed projects.',
	lastUpdated: '2025-02-11',
	socialMedia: [
		{
			label: 'github',
			href: 'https://github.com/Mac1456?tab=repositories',
			Icon: GithubLogo,
		},
		// {
		// 	label: 'twitter',
		// 	href: 'https://twitter.com/Mustafa',
		// 	Icon: TwitterLogo,
		// },
		// {
		// 	label: 'bluesky',
		// 	href: 'https://bsky.app/profile/mustafa.dev',
		// 	Icon: Butterfly,
		// },
		// {
		// 	label: 'codepen',
		// 	href: 'https://codepen.com/Mustafa',
		// 	Icon: CodepenLogo,
		// },
		{
			label: 'linkedin',
			href: 'https://www.linkedin.com/in/mustafa-chaudheri-a13a74253?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
			Icon: LinkedinLogo,
		},
		{
			label: 'email',
			href: 'mailto:mustafa.chaudheri@gmail.com',
			Icon: PaperPlaneTilt,
		},
	],
};
