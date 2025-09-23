import { Link, useLocation } from "react-router-dom";

import CV from "./pages/CV.jsx";
import Projects from "./pages/Projects.jsx";
import Tech from "./pages/Tech.jsx";
import Hero from "./components/Hero.jsx";
import FeaturedProjects from "./components/FeaturedProjects.jsx";
import FeaturedTech from "./components/FeaturedTech.jsx";

export default function App() {
	const { pathname } = useLocation();

	const overlayNode =
		pathname === "/cv" ? <CV /> : pathname === "/projects" ? <Projects /> : pathname === "/tech" ? <Tech /> : null;

	const panelOpen = !!overlayNode;

	return (
		<>
			<div className="max-w-6xl text-black mt-16 3xl:mt-64 4xl:mt-96 px-12 md:px-3 ">
				{/* Hero */}
				<Hero />

				{/* Featured */}
				<div className="mx-auto max-w-6xl space-y-24 xs:space-y-36 md:space-y-64">
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
				<div className="mt-24 sm:mt-24 mb-4">
					<p className="text-sm text-center">Developed by RJ Macklem © 2025</p>
				</div>
			</div>
		</>
	);
}
