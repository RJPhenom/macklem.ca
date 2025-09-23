import { Link } from "react-router-dom";

export default function FeaturedTech() {
	return (
		<section className="text-center">
			<h2 className="text-4xl xs:text-5xl md:text-7xl mb-6 md:mb-12 font-semibold tracking-wide">Tech I Use...</h2>

			<p className="mt-6 text-justify md:text-center text-lg max-w-3xl mx-auto  mb-6 md:mb-16">
				I’ve built responsive webapps in React and Next.js, built backends with Node.js and TypeScript, and I've built
				full-feature, network-replicated game frameworks in Unreal Engine (C++).
			</p>

			<div className="grid grid-cols-3 mt-6 gap-8 text-6xl md:text-9xl place-items-center max-w-2xs sm:max-w-xl mx-auto">
				<i className="devicon-react-plain" />
				<i className="devicon-tailwindcss-plain" />
				<i className="devicon-typescript-plain" />
				<i className="devicon-unrealengine-plain" />
				<i className="devicon-unity-plain" />
				<i className="devicon-godot-plain" />
			</div>

			<div className="mt-12">
				<Link
					to="/tech"
					className="inline-block rounded-xl my-0 md:my-5 px-5 py-2 text-white bg-emerald-500 hover:bg-emerald-300 transition"
				>
					See the full stack →
				</Link>
			</div>
		</section>
	);
}
