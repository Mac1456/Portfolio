import { personal } from '../../data';

export default function About() {
	return <section className="w-full xs:w-[45ch] mt-10 mb-12 text-gray-7">{personal.about}</section>;
}
