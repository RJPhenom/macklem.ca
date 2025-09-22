import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard.jsx";

export default function FeaturedProjects() {
	return (
		<section className="text-center">
			<h2 className="text-5xl md:text-7xl mb-6 md:mb-12 font-semibold tracking-wide">Some of my Projects...</h2>

			<p className="mt-6 px-12 md:px-3 text-justify md:text-center text-lg max-w-3xl mx-auto  mb-6 md:mb-16 ">
				Here are just a handlful of my recent and favourite projects. I work on both web and game dev, so there’s a mix of
				responsive web repositories and my latest jam projects on itch.io.
			</p>

			<div className="pl-6 mt-4 grid gap-0 sm:gap-6 md:grid-cols-2">
				{/* Left column: GitHub projects */}
				<div>
					<ProjectCard
						imgSrc="/images/cbthumbnail.png"
						imgAlt="Canadian Banker.ca preview"
						title="Canadian Banker.ca"
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
					<ProjectCard
						imgSrc="https://opengraph.githubassets.com/1/RJPhenom/SeinARTS"
						imgAlt="SeinARTS preview"
						title="SeinARTS Framework"
						byline="by PhenomRJ"
						byHref="https://github.com/RJPhenom"
						description="An action-RTS framework for Unreal Engine 5. "
						tags={["devicon-unrealengine-plain", "devicon-cplusplus-plain"]}
						pageHref="https://github.com/RJPhenom/SeinARTS"
						buttonLabel="View Code →"
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
						buttonLabel="View Code →"
						buttonColour="bg-emerald-500"
						buttonHoverColour="hover:bg-emerald-300"
					/>
				</div>

				{/* Right column: itch.io projects */}
				<div>
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
						buttonHoverColour="hover:bg-red-300"
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
						buttonHoverColour="hover:bg-red-300"
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
						buttonHoverColour="hover:bg-red-300"
					/>
				</div>

				{/* Full width: Browse more */}
				<div className="md:col-span-2">
					<Link
						to="/projects"
						className="inline-block rounded-xl my-2 md:my-5 px-5 py-2 text-white bg-red-400 hover:bg-red-300 transition mt-6"
					>
						Browse more projects →
					</Link>
				</div>
			</div>
		</section>
	);
}
