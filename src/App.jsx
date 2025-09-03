import PFP from "./assets/Edgerunner.png";

import { FaGithub } from "react-icons/fa";
import { FaBluesky } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

import CV from "./pages/CV.jsx";
import Projects from "./pages/Projects.jsx";
import Tech from "./pages/Tech.jsx";

export default function App() {
	const { pathname } = useLocation();

	// Choose which page (if any) to show in the slide-in panel
	const overlayNode =
		pathname === "/cv" ? <CV /> : pathname === "/projects" ? <Projects /> : pathname === "/tech" ? <Tech /> : null;

	const panelOpen = !!overlayNode;

	return (
		<>
			{/* Background video */}
			<video
				className="fixed inset-0 w-full h-full object-cover z-[-2] pointer-events-none"
				autoPlay
				muted
				loop
				playsInline
				preload="metadata"
			>
				<source
					src="/videos/webdev_background.mp4"
					type="video/mp4"
				/>
			</video>

			{/* Optional dark overlay */}
			<div
				className="fixed inset-0 bg-black/65 z-[-1]"
				aria-hidden="true"
			/>

			{/* Page Content */}
			<div>
				{/* PFP + Socials/Contact */}
				<div className="flex flex-col md:flex-row gap-3 md:gap-15">
					<div>
						<div className="flex flex-col items-center">
							<img
								src={PFP}
								alt="RJ Macklem"
								className="w-45 h-45 object-cover ring ring-zinc-500 p-1 mb-2 rounded-full"
							/>
							<div className="flex flex-row gap-6 text-xl justify-center rounded-full py-2 px-4">
								<a
									href="https://github.com/RJPhenom"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="GitHub: RJPhenom"
									className="rounded-md transition transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-emerald-500"
								>
									<FaGithub />
								</a>

								<a
									href="https://bsky.app/profile/phenomrj.bsky.social"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="Bluesky: phenomrj.bsky.social"
									className="rounded-md transition transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-emerald-500"
								>
									<FaBluesky />
								</a>

								<a
									href="https://x.com/Phenom_RJ"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="X (Twitter): RJPhenom"
									className="rounded-md transition transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-emerald-500"
								>
									<FaXTwitter />
								</a>

								<a
									href="https://www.linkedin.com/in/robertjohnmacklem/"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="LinkedIn: RJ Macklem"
									className="rounded-md transition transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-emerald-500"
								>
									<FaLinkedin />
								</a>
							</div>
							<div className="flex flex-col text-md items-center font-thin tracking-widest">
								<a
									href="mailto:rj@macklem.ca"
									className="hover:underline"
								>
									rj@macklem.ca
								</a>
								<a
									href="tel:+14167220731"
									className="hover:underline"
								>
									416.722.0731
								</a>
							</div>
						</div>
					</div>
					<h1 className="text-4xl md:text-9xl my-6 font-light tracking-widest">RJ Macklem</h1>
				</div>

				{/* Nav/Routes */}
				<div className="flex flex-col gap-2 py-4 items-center text-2xl font-extralight tracking-widest">
					<Link
						to="/cv"
						className="hover:underline"
					>
						CV →
					</Link>
					<Link
						to="/projects"
						className="hover:underline"
					>
						Projects →
					</Link>
					<Link
						to="/tech"
						className="hover:underline"
					>
						Tech →
					</Link>
				</div>
			</div>

			{/* Slide-in panel (route-controlled) */}
			<div
				className={[
					"fixed inset-0 z-10 bg-black/90 backdrop-blur-sm",
					"transform transition-transform duration-500 ease-out",
					panelOpen ? "translate-x-0 pointer-events-auto" : "translate-x-full pointer-events-none",
					// NEW: center + allow scrolling if content is tall
					"flex items-center justify-center overflow-y-auto p-6",
				].join(" ")}
				aria-hidden={!panelOpen}
			>
				{/* keep page width constrained via its own container */}
				{overlayNode}
			</div>
		</>
	);
}
