import { personal } from '../../data';

export default function SiteTitle() {
	return (
		<div className="flex items-center gap-3">
			<div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
				<span className="text-black font-bold text-sm">M</span>
			</div>
			<div>
				<h1 className="font-bold text-white text-md">{personal.name}</h1>
				<p className="text-gray-5 text-sm">
					{personal.title}
				</p>
			</div>
		</div>
	);
}
