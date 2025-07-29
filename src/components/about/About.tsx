import { personal, LEARNING_STACK } from '../../data';

export default function About() {
	return (
		<section className="mt-10 mb-12">
			<div className="w-full xs:w-[45ch] text-gray-7 mb-8">{personal.about}</div>
			<div className="text-sm w-full xs:w-[54ch]">
				currently tinkering with:{' '}
				<span className="text-xl text-accent-orange leading-none">
					{LEARNING_STACK.join(', ')}
				</span>
			</div>
		</section>
	);
}
