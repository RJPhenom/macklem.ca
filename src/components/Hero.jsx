// Hero.jsx
import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import Socials from "./Socials";
import Contact from "./Contact";

export default function Hero() {
	return (
		<div className="flex flex-col gap-4 xs:gap-6 gap-x-12 mb-24 md:mb-64">
			{/* Row 1: Avatar */}
			<div className="flex items-center justify-center">
				<Avatar />
			</div>

			{/* Row 2: Socials + Contact */}
			<div className="flex flex-col items-center justify-center gap-2">
				<Socials />
				<Contact />
			</div>

			{/* Row 3: Heading */}
			<div className="flex items-center justify-center md:justify-center mt-3">
				<h1 className="text-5xl xs:text-6xl md:text-[clamp(4rem,8vw,7rem)] font-medium whitespace-nowrap">
					Hi, I&apos;m&nbsp;
				</h1>
				<h1 className="text-5xl xs:text-6xl md:text-[clamp(4rem,8vw,7rem)] text-sky-500 font-medium tracking-widest whitespace-nowrap">
					RJ
				</h1>
				<h1 className="text-5xl xs:text-6xl md:text-[clamp(4rem,8vw,7rem)] font-medium tracking-widest whitespace-nowrap">
					.
				</h1>
			</div>

			{/* Row 4: Paragraph */}
			<p className="mt-4 xs:mt-8 text-justify md:text-center text-lg max-w-3xl mx-auto">
				I’m a web and game dev who loves solving tricky problems with creative code. Being a new dad keeps me focused and
				motivated, and I bring that hustle into every project I take on.
			</p>

			{/* Row 5: CV Link */}
			<div className="flex justify-center items-center">
				<Link
					to="/cv"
					className="inline-block rounded-xl mt-2 md:mt-5 px-5 py-2 text-white bg-sky-500 hover:bg-sky-300 transition"
				>
					View my CV →
				</Link>
			</div>
		</div>
	);
}
