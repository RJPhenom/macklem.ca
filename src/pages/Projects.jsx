import { Link } from "react-router-dom";

import { FaGithub } from "react-icons/fa6";
import { FaItchIo } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";

import ProjectCard from "../components/ProjectCard";

export default function Projects() {
	return (
		<div className="w-full h-full">
			<div className="mx-auto max-w-3xl px-6 text-center min-h-screen pt-[30svh] pb-16">
				<h1 className="text-4xl sm:text-6xl font-extralight !tracking-[.3em] text-center">PROJECTS</h1>

				<div className="mt-6 text-center">
					<Link
						to="/"
						className="text-base sm:text-lg font-extralight hover:underline mr-3"
					>
						&larr; Back
					</Link>
				</div>

				{/* WEB */}
				<section className="mt-24">
					<div className="flex flex-row justify-center items-center gap-3 text-4xl font-thin tracking-wide">
						<FaCode />
						Web
					</div>
					<div className="mt-8 space-y-3">
						<ProjectCard
							imgSrc="/images/psthumb.png"
							imgAlt="Phenom Studios preview"
							title="Phenom Studios"
							byline="phenomstudios.ca"
							byHref="https://phenomstudios.ca"
							description="Dynamic company website page for Phenom Studios Inc."
							tags={["devicon-react-plain", "devicon-javascript-plain", "devicon-tailwindcss-original"]}
							pageHref="https://phenomstudios.ca"
						/>
						<ProjectCard
							imgSrc="/images/cbthumbnail.png"
							imgAlt="NETDECK preview"
							title="Canadian Banker"
							byline="canadianbanker.ca"
							byHref="https://canadianbanker.ca"
							description="A website for the Canadian Banker podcast featuring John Turley-Ewart."
							tags={[
								"devicon-nextjs-plain",
								"devicon-typescript-plain",
								"devicon-react-plain",
								"devicon-tailwindcss-original",
							]}
							pageHref="https://canadianbanker.ca"
						/>
					</div>
				</section>

				{/* GITHUB */}
				<section className="mt-24">
					<div className="flex flex-row justify-center items-center gap-3 text-4xl font-thin tracking-wide">
						<FaGithub />
						GitHub
					</div>
					<div className="mt-8 space-y-3">
						<ProjectCard
							imgSrc="https://opengraph.githubassets.com/1/RJPhenom/SeinARTS"
							imgAlt="SeinARTS preview"
							title="SeinARTS"
							byline="by PhenomRJ"
							byHref="https://github.com/RJPhenom"
							description="An action-RTS framework for Unreal Engine 5. "
							tags={["devicon-unrealengine-plain", "devicon-cplusplus-plain"]}
							pageHref="https://github.com/RJPhenom/SeinARTS"
							buttonLabel="< Code >"
							buttonColour="bg-emerald-500"
							buttonHoverColour="hover:bg-emerald-300"
						/>
						<ProjectCard
							imgSrc="https://opengraph.githubassets.com/1/RJPhenom/ForceMate"
							imgAlt="ForceMate preview"
							title="ForceMate"
							byline="by PhenomRJ"
							byHref="https://github.com/RJPhenom"
							description="A tabletop wargame list-building app."
							tags={[
								"devicon-react-plain",
								"devicon-typescript-plain",
								"devicon-tailwindcss-plain",
								"devicon-json-plain",
							]}
							pageHref="https://github.com/RJPhenom/ForceMate"
							buttonLabel="< Code >"
							buttonColour="bg-emerald-500"
							buttonHoverColour="hover:bg-emerald-300"
						/>
						<ProjectCard
							imgSrc="https://opengraph.githubassets.com/1/RJPhenom/NETDECK"
							imgAlt="NETDECK preview"
							title="NETDECK"
							byline="by PhenomRJ"
							byHref="https://github.com/RJPhenom"
							description="A text-based Cyberpunk detective game."
							tags={["devicon-unity-plain", "devicon-csharp-plain", "devicon-json-plain"]}
							pageHref="https://github.com/RJPhenom/NETDECK"
							buttonLabel="< Code >"
							buttonColour="bg-emerald-500"
							buttonHoverColour="hover:bg-emerald-300"
						/>
						<ProjectCard
							imgSrc="https://opengraph.githubassets.com/1/RJPhenom/NEUROWOLKE"
							imgAlt="NEUROWOLKE preview"
							title="NEUROWOLKE"
							byline="by PhenomRJ"
							byHref="https://github.com/RJPhenom"
							description="A Cyberpunk Netrunner card game."
							tags={["devicon-godot-plain"]}
							pageHref="https://github.com/RJPhenom/NEUROWOLKE"
							buttonLabel="< Code >"
							buttonColour="bg-emerald-500"
							buttonHoverColour="hover:bg-emerald-300"
						/>
					</div>
				</section>

				{/* ITCH.IO */}
				<section className="mt-24">
					<div className="flex flex-row justify-center items-center gap-3 text-4xl font-thin tracking-wide">
						<FaItchIo />
						itch.io
					</div>
					<div className="mt-8 space-y-3">
						<ProjectCard
							imgSrc="https://img.itch.zone/aW1nLzIyNzQ1MDU2LnBuZw==/180x143%23c/BT2qWP.png"
							imgAlt="NETDECK preview"
							title="NETDECK"
							byline="on itch.io"
							byHref="https://phenomrj.itch.io/netdeck"
							description="A Cyberpunk Netrunner card game."
							tags={["devicon-unity-plain", "devicon-csharp-plain", "devicon-json-plain"]}
							pageHref="https://phenomrj.itch.io/netdeck"
							buttonLabel="Play →"
							buttonColour="bg-red-400"
							buttonHoverColour="hover:bg-red-500"
						/>
						<ProjectCard
							imgSrc="https://img.itch.zone/aW1nLzIxMjIxMzk3LnBuZw==/315x250%23c/TpH1tQ.png"
							imgAlt="NEUROWOLKE preview"
							title="NEUROWOLKE"
							byline="on itch.io"
							byHref="https://phenomrj.itch.io/neurowolke"
							description="A text-based Cyberpunk detective game."
							tags={["devicon-godot-plain"]}
							pageHref="https://phenomrj.itch.io/neurowolke"
							buttonLabel="Play →"
							buttonColour="bg-red-400"
							buttonHoverColour="hover:bg-red-500"
						/>
						<ProjectCard
							imgSrc="https://img.itch.zone/aW1nLzEyMzc5ODI1LnBuZw==/315x250%23c/5inoHC.png"
							imgAlt="MECHGOAT preview"
							title="MECHGOAT"
							byline="on itch.io"
							byHref="https://phenomstudios.itch.io/mechgoat-tojam-2023"
							description="A twinstick mecha-shooter with a devilish goat."
							tags={["devicon-unity-plain", "devicon-csharp-plain"]}
							pageHref="https://phenomstudios.itch.io/mechgoat-tojam-2023"
							buttonLabel="Play →"
							buttonColour="bg-red-400"
							buttonHoverColour="hover:bg-red-500"
						/>
						<ProjectCard
							imgSrc="https://img.itch.zone/aW1nLzE2MTMyNzczLnBuZw==/315x250%23c/4gFgQO.png"
							imgAlt="Ball Booster preview"
							title="Ball Booster"
							byline="on itch.io"
							byHref="https://phenomrj.itch.io/ball-booster"
							description="A 3D roller with extra thrust."
							tags={["devicon-unity-plain", "devicon-csharp-plain"]}
							pageHref="https://phenomrj.itch.io/ball-booster"
							buttonLabel="Play →"
							buttonColour="bg-red-400"
							buttonHoverColour="hover:bg-red-500"
						/>
					</div>
				</section>
			</div>
		</div>
	);
}
