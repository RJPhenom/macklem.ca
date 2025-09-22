import { Link, useLocation } from "react-router-dom";

import CV from "./pages/CV.jsx";
import Projects from "./pages/Projects.jsx";
import Tech from "./pages/Tech.jsx";
import Avatar from "./components/Avatar.jsx";
import Socials from "./components/Socials.jsx";
import Contact from "./components/Contact.jsx";
import ProjectCard from "./components/ProjectCard.jsx";
import FeaturedProjects from "./components/FeaturedProjects.jsx";
import FeaturedTech from "./components/FeaturedTech.jsx";

export default function App() {
	const { pathname } = useLocation();

	const overlayNode =
		pathname === "/cv" ? <CV /> : pathname === "/projects" ? <Projects /> : pathname === "/tech" ? <Tech /> : null;

	const panelOpen = !!overlayNode;

	return (
		<>
			{/* Hero */}
			<div className="max-w-6xl text-black mt-16 3xl:mt-64 4xl:mt-96">
				<div className="flex flex-col gap-6 gap-x-12 mb-24 md:mb-64">
					{/* Row 1: Avatar | h1 */}
					<div className="flex items-center justify-center">
						<Avatar />
					</div>

					{/* Row 2: Socials + contact | empty */}
					<div className="flex flex-col items-center justify-center gap-2">
						<Socials />
						<Contact />
					</div>
					<div className="flex items-center justify-center md:justify-center mt-3">
						<h1 className="text-6xl md:text-[clamp(4rem,8vw,7rem)] font-medium whitespace-nowrap">
							Hi, I&apos;m&nbsp;
						</h1>
						<h1 className="text-6xl md:text-[clamp(4rem,8vw,7rem)] text-sky-500 font-medium tracking-widest whitespace-nowrap">
							RJ
						</h1>
						<h1 className="text-6xl md:text-[clamp(4rem,8vw,7rem)] font-medium tracking-widest whitespace-nowrap">
							.
						</h1>
					</div>
					<p className="mt-8 px-12 md:px-3 text-justify md:text-center text-lg max-w-3xl mx-auto">
						I’m a web and game dev who loves solving tricky problems with creative code. Being a new dad keeps me
						focused and motivated, and I bring that hustle into every project I take on.
					</p>
					<div className="flex justify-center items-center">
						<Link
							to="/cv"
							className="inline-block rounded-xl mt-2 md:mt-5 px-5 py-2 text-white bg-sky-500 hover:bg-sky-300 transition"
						>
							View my CV →
						</Link>
					</div>
				</div>

				{/* Featured */}
				<div className="mx-auto max-w-6xl px-4 md:px-6 space-y-36 md:space-y-64">
					<FeaturedTech />
					<FeaturedProjects />
				</div>

				{/* Slide-in panel (route-controlled) */}
				<div
					className={[
						"fixed inset-0 z-10 bg-white backdrop-blur-sm",
						"transform transition-transform duration-500 ease-out",
						panelOpen ? "translate-x-0 pointer-events-auto" : "translate-x-full pointer-events-none",
						"flex items-center justify-center overflow-y-auto p-6",
					].join(" ")}
					aria-hidden={!panelOpen}
				>
					{overlayNode}
				</div>
				<div className="mt-24 sm:mt-64 mb-4">
					<p className="text-sm text-center">Developed by RJ Macklem © 2025</p>
				</div>
			</div>
		</>
	);
}
