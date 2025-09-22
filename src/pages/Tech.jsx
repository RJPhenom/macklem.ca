import { Link } from "react-router-dom";

export default function Tech() {
	return (
		<div className="w-full h-full">
			<div className="mx-auto max-w-3xl px-6 text-center min-h-screen pt-[12svh] pb-4">
				<h1 className="text-6xl sm:text-8xl font-medium mb-6">Tech I've Used</h1>
				<div className="flex justify-center items-center">
					<Link
						to="/"
						className="inline-block text-xl rounded-xl mt-2 md:mt-5 px-5 py-2 text-white bg-emerald-500 hover:bg-emerald-700 transition"
					>
						&larr; Back
					</Link>
				</div>

				<div className="grid grid-cols-3 mt-16 md:grid-cols-6 gap-8 mb-6 text-8xl place-items-center">
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
					<i className="devicon-github-original"></i>
					<i className="devicon-docker-plain"></i>
					<i className="devicon-git-plain"></i>
					<i class="devicon-amazonwebservices-plain-wordmark"></i>
					<i className="devicon-azure-plain"></i>
					<i className="devicon-googlecloud-plain"></i>
					<i className="devicon-html5-plain"></i>
					<i className="devicon-css3-plain"></i>
					<i className="devicon-dotnetcore-plain"></i>
					<i className="devicon-python-plain"></i>
					<i class="devicon-flutter-plain"></i>
					<i class="devicon-astro-plain"></i>
				</div>
			</div>
		</div>
	);
}
