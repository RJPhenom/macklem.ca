import { Link } from "react-router-dom";

export default function Tech() {
	return (
		<div className="w-full h-full">
			<div className="mx-auto max-w-3xl px-0 sm:px-6 text-justify  min-h-screen pt-[12svh] pb-4">
				<h1 className="text-6xl sm:text-8xl text-center font-medium mb-6">Tech I've Used</h1>

				<div className="mt-16 space-y-16">
					<p className="px-12 md:px-0 text-lg max-w-3xl">
						Recently I've been building websites in React, Tailwind, TypeScript and Next.js, but I also have raw
						experience in HTML5, CSS, and JavaScript. I'm always experimenting with new frameworks like Astro and
						Flutter too.
					</p>
					<div className="grid grid-cols-3 md:grid-cols-6 gap-8 text-6xl sm:text-8xl place-items-center">
						<i className="devicon-react-plain"></i>
						<i className="devicon-tailwindcss-plain"></i>
						<i className="devicon-typescript-plain"></i>
						<i className="devicon-nextjs-plain"></i>
						<i className="devicon-nodejs-plain-wordmark"></i>
						<i class="devicon-vercel-original-wordmark"></i>
						<i className="devicon-html5-plain"></i>
						<i className="devicon-css3-plain"></i>
						<i className="devicon-javascript-plain"></i>
						<i class="devicon-flutter-plain"></i>
						<i class="devicon-angular-plain"></i>
						<i class="devicon-astro-plain"></i>
					</div>

					<p className="px-12 md:px-0 text-lg max-w-3xl">
						When it comes to GameDev, I primarily build Strategy games in Unreal Engine 5 (C++). Since Unreal Engine
						is not designed for RTS-style video games, I had to build my own Gameplay Framework extension to support
						my work. The SeinARTS Framework, my plugin for UE 5.6, is the first fully-featured, network-replicated
						Action-RTS framework for Unreal Engine. It is available on Fab for purchase and viewable on Github.
						<br />
						<br />I also love doing Game Jams, where I've gained ample experience in Unity (C#) and Godot (GDScript).
						I have led the Phenom Studios team at three back-to-back-to-back TOJams at George Brown College, and am
						always looking forward to the next challenge.
					</p>
					<div className="grid grid-cols-3 md:grid-cols-6 gap-8 text-6xl sm:text-8xl place-items-center">
						<i className="devicon-unrealengine-plain"></i>
						<i className="devicon-unity-plain"></i>
						<i className="devicon-godot-plain"></i>
						<i className="devicon-cplusplus-plain"></i>
						<i className="devicon-csharp-plain"></i>
						<i className="devicon-github-original"></i>
					</div>

					<p className="px-12 md:px-0 text-lg max-w-3xl">
						And in my other travels, whether for work, a side hustle, or as a student at Durham College, I've
						encountered all sorts of other tech.
						<br />
						<br />
						Whether its something new and agile like Python, or ancient tech like COBOL, I have a knack for picking up
						new technologies quickly and applying them to whatever I'm working on.
					</p>
					<div className="grid grid-cols-3 md:grid-cols-6 gap-8 text-6xl sm:text-8xl place-items-center">
						<i className="devicon-python-plain"></i>
						<i className="devicon-dotnetcore-plain"></i>
						<i className="devicon-docker-plain"></i>
						<i className="devicon-git-plain"></i>
						<i className="devicon-linux-plain"></i>
						<i className="devicon-cobol-plain"></i>
						<i class="devicon-amazonwebservices-plain-wordmark"></i>
						<i className="devicon-azure-plain"></i>
						<i className="devicon-googlecloud-plain"></i>
					</div>
				</div>
				<div className="my-12 flex justify-center items-center">
					<Link
						to="/"
						className="inline-block text-xl rounded-xl mt-2 md:mt-5 px-5 py-2 text-white bg-emerald-500 hover:bg-emerald-300 transition"
					>
						&larr; Back
					</Link>
				</div>
			</div>
		</div>
	);
}
