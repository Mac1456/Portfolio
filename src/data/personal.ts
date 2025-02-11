import { PersonalInfo } from '../types';
import {
	GithubLogo,
	CodepenLogo,
	// Butterfly,
	// TwitterLogo,
	PaperPlaneTilt,
	LinkedinLogo,
} from '@phosphor-icons/react';

export const personal: PersonalInfo = {
	availability: true,
	name: '@aniqatc',
	title: 'developer',
	city: 'nyc',
	about: 'a curated archive of my ongoing and completed web design and development projects',
	lastUpdated: '2025-02-11',
	socialMedia: [
		{
			label: 'github',
			href: 'https://github.com/aniqatc',
			Icon: GithubLogo,
		},
		// {
		// 	label: 'twitter',
		// 	href: 'https://twitter.com/aniqatc',
		// 	Icon: TwitterLogo,
		// },
		// {
		// 	label: 'bluesky',
		// 	href: 'https://bsky.app/profile/aniqa.dev',
		// 	Icon: Butterfly,
		// },
		{
			label: 'codepen',
			href: 'https://codepen.com/aniqatc',
			Icon: CodepenLogo,
		},
		{
			label: 'linkedin',
			href: 'https://www.linkedin.com/in/aniqadev/',
			Icon: LinkedinLogo,
		},
		{
			label: 'email',
			href: 'mailto:hello@aniqa.dev',
			Icon: PaperPlaneTilt,
		},
	],
};
