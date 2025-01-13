import SiteTitle from './SiteTitle';
import SocialLinks from './SocialLinks';

export default function Header() {
	return (
		<header className="flex justify-between">
			<SiteTitle />
			<SocialLinks />
		</header>
	);
}
