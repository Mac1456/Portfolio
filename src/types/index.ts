import { IconProps } from '@phosphor-icons/react';

interface SocialMedia {
	label: string;
	href: string;
	Icon: React.ComponentType<IconProps>;
}

export interface PersonalInfo {
	availability: boolean;
	name: string;
	title: string;
	city: string;
	about: string;
	socialMedia: SocialMedia[];
}

export interface ProjectListing {
	title: string;
	description: string;
	tech: string[];
	ghLink: string;
	demoLink: string;
	imagePath: string;
	starCount: number;
	category: 'highlight' | 'gen' | 'archive';
	status: 'complete' | 'ongoing';
	pwa?: boolean;
	cli?: boolean;
	npm?: boolean;
}
