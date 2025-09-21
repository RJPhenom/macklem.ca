// CV.jsx
import { Link } from "react-router-dom";

export default function CV() {
	return (
		<div className="w-full h-full">
			<div className="mx-auto max-w-3xl px-6 text-center min-h-screen pt-[30svh] pb-4">
				<h1 className="text-9xl sm:text-9xl font-medium mb-6">CV</h1>
				<div className="flex justify-center items-center">
					<Link
						to="/"
						className="inline-block text-xl rounded-xl mt-2 md:mt-5 px-5 py-2 border border-black hover:bg-black/10 transition"
					>
						&larr; Back
					</Link>
				</div>

				{/* EXPERIENCE */}
				<section className="mt-24">
					<h3 className="text-5xl sm:text-6xl ">Experience</h3>

					<div className="mt-8 space-y-12">
						<article>
							<h4 className="text-xl sm:text-2xl tracking-wide">Phenom Studios, Inc.</h4>
							<p className="text-lg mt-2 leading-relaxed">Founder & Senior Software Engineer</p>
							<p className="text-md opacity-70 mt-1">October 2022 – Present</p>
						</article>

						<article>
							<h4 className="text-xl sm:text-2xl tracking-wide">CanadianBanker.ca</h4>
							<p className="text-lg mt-2 leading-relaxed">Lead Developer</p>
							<p className="text-md opacity-70 mt-1">August 2025 – Present</p>
						</article>

						<article>
							<h4 className="text-xl sm:text-2xl tracking-wide">The Canadian Press</h4>
							<p className="text-lg mt-2 leading-relaxed">New Business Account Manager</p>
							<p className="text-md opacity-70 mt-1">May 2021 – Feb 2022</p>
						</article>

						<article>
							<h4 className="text-xl sm:text-2xl tracking-wide">St. Joseph Communications</h4>
							<p className="text-lg mt-2 leading-relaxed">Account Executive</p>
							<p className="text-md opacity-70 mt-1">May 2019 – Apr 2023</p>
						</article>

						<article>
							<h4 className="text-xl sm:text-2xl tracking-wide">News Knowledge Media</h4>
							<p className="text-lg mt-2 leading-relaxed">Sales &amp; Marketing Executive</p>
							<p className="text-md opacity-70 mt-1">May 2019 – May 2021</p>
						</article>
					</div>
				</section>

				{/* EDUCATION */}
				<section className="mt-24">
					<h3 className="text-5xl sm:text-6xl">Education</h3>

					<div className="mt-8 mb-64 space-y-12">
						<div>
							<h4 className="text-xl sm:text-2xl tracking-wide">University of Toronto</h4>
							<p className="text-md opacity-70 mt-1">B.A. (Hons.), Philosophy</p>
							<p className="text-md opacity-70 mt-1">May 2021</p>
						</div>

						<div>
							<h4 className="text-xl sm:text-2xl tracking-wide">Durham College</h4>
							<p className="text-md opacity-70 mt-1">Ontario Diploma · Computer Programming</p>
							<p className="text-md opacity-70 mt-1">August 2025</p>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}
