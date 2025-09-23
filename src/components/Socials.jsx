import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaBluesky } from "react-icons/fa6"; // If installed (react-icons v5+)

export default function Socials() {
	return (
		<div className="flex flex-row gap-6 text-xl justify-center rounded-full py-0 xs:py-2">
			<a
				href="https://github.com/RJPhenom"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="GitHub: RJPhenom"
				className="rounded-full transition text-slate-700 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-cyan-500 p-1"
			>
				<FaGithub />
			</a>

			<a
				href="https://bsky.app/profile/phenomrj.bsky.social"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Bluesky: phenomrj.bsky.social"
				className="rounded-full transition text-blue-400 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-cyan-500 p-1"
			>
				<FaBluesky />
			</a>

			<a
				href="https://x.com/Phenom_RJ"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="X (Twitter): RJPhenom"
				className="rounded-full transition text-black transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-cyan-500 p-1"
			>
				<FaXTwitter />
			</a>

			<a
				href="https://www.linkedin.com/in/robertjohnmacklem/"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="LinkedIn: RJ Macklem"
				className="rounded-full transition text-blue-500 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-cyan-500 p-1"
			>
				<FaLinkedin />
			</a>
		</div>
	);
}
