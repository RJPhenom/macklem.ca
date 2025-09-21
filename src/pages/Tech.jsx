import { Link } from "react-router-dom";

export default function Tech() {
	return (
		<div className="w-full h-full">
			<div className="mx-auto max-w-3xl px-6 text-center min-h-screen pt-[30svh] pb-4">
				<h1 className="text-8xl sm:text-8xl font-medium mb-6">Tech</h1>
				<div className="flex justify-center items-center">
					<Link
						to="/"
						className="inline-block text-xl rounded-xl mt-2 md:mt-5 px-5 py-2 text-white bg-emerald-500 hover:bg-emerald-700 transition"
					>
						&larr; Back
					</Link>
				</div>

				<div className="grid grid-cols-3 mt-16 md:grid-cols-6 gap-8 mb-6 text-6xl place-items-center">
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
