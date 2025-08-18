import { Link } from "react-router-dom";

export default function Tech() {
	return (
		<div className="w-full">
			<div className="mx-auto max-w-5xl px-6 py-10">
				<h1 className="text-4xl sm:text-6xl font-extralight !tracking-[.3em] text-center">TECH</h1>

				<div className="mt-6 text-center">
					<Link
						to="/"
						className="text-base sm:text-lg font-extralight hover:underline"
					>
						&larr; Back
					</Link>
				</div>

				<div className="grid grid-cols-3 mt-24 md:grid-cols-6 gap-8 text-6xl place-items-center">
					<i className="devicon-unrealengine-plain"></i>
					<i className="devicon-unity-plain"></i>
					<i className="devicon-godot-plain"></i>
					<i className="devicon-cplusplus-plain"></i>
					<i className="devicon-csharp-plain"></i>
					<i className="devicon-cobol-original"></i>
					<i className="devicon-react-plain"></i>
					<i className="devicon-tailwindcss-plain"></i>
					<i className="devicon-nextjs-plain"></i>
					<i className="devicon-typescript-plain"></i>
					<i className="devicon-javascript-plain"></i>
					<i className="devicon-nodejs-plain-wordmark"></i>
					<i className="devicon-linux-plain"></i>
					<i className="devicon-apache-plain"></i>
					<i className="devicon-php-plain"></i>
					<i className="devicon-postgresql-plain"></i>
					<i className="devicon-mysql-plain"></i>
					<i className="devicon-mongodb-plain"></i>
				</div>
			</div>
		</div>
	);
}
