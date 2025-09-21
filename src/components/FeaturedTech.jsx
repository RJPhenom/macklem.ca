import { Link } from "react-router-dom";

export default function FeaturedTech() {
	return (
		<section className="text-center">
			<h2 className="text-2xl md:text-4xl mb-6 md:mb-12 font-semibold tracking-wide">Tech I Use...</h2>

			<div className="grid grid-cols-3 mt-6 md:grid-cols-3 gap-8 text-6xl md:text-9xl place-items-center">
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
					className="inline-block rounded-xl my-0 md:my-5 px-5 py-2 text-white bg-emerald-500 hover:bg-emerald-700 transition"
				>
					See the full stack →
				</Link>
			</div>
		</section>
	);
}
