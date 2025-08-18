// CV.jsx
import { Link } from "react-router-dom";

export default function CV() {
	return (
		<div className="w-full h-full">
			<div className="mx-auto max-w-3xl px-6 text-center min-h-screen pt-[30svh] pb-4">
				<h1 className="text-5xl sm:text-7xl font-extralight !tracking-[.3em]">CV</h1>

				<div className="mt-6">
					<Link
						to="/"
						className="text-lg sm:text-xl font-extralight hover:underline mr-3"
					>
						&larr; Back
					</Link>
				</div>

				{/* EXPERIENCE */}
				<section className="mt-24">
					<h3 className="text-2xl sm:text-3xl font-extralight tracking-[.25em] uppercase">Experience</h3>

					<div className="mt-8 space-y-12">
						<article>
							<h4 className="text-xl sm:text-2xl font-light tracking-wide">Phenom Studios</h4>
							<p className="mt-2 font-thin leading-relaxed">Founder</p>
							<p className="text-sm opacity-70 mt-1">Oct 2022 – Present</p>
						</article>

						<article>
							<h4 className="text-xl sm:text-2xl font-light tracking-wide">The Canadian Press</h4>
							<p className="mt-2 font-thin leading-relaxed">New Business Account Manager</p>
							<p className="text-sm opacity-70 mt-1">May 2021 – Feb 2022</p>
						</article>

						<article>
							<h4 className="text-xl sm:text-2xl font-light tracking-wide">St. Joseph Communications</h4>
							<p className="mt-2 font-thin leading-relaxed">Account Executive</p>
							<p className="text-sm opacity-70 mt-1">May 2019 – Apr 2023</p>
						</article>

						<article>
							<h4 className="text-xl sm:text-2xl font-light tracking-wide">News Knowledge Media</h4>
							<p className="mt-2 font-thin leading-relaxed">Sales &amp; Marketing Executive</p>
							<p className="text-sm opacity-70 mt-1">May 2019 – May 2021</p>
						</article>
					</div>
				</section>

				{/* EDUCATION */}
				<section className="mt-24">
					<h3 className="text-2xl sm:text-3xl font-extralight tracking-[.25em] uppercase">Education</h3>

					<div className="mt-8 mb-64 space-y-12">
						<div>
							<h4 className="text-xl sm:text-2xl font-light tracking-wide">University of Toronto</h4>
							<p className="text-sm opacity-70 mt-1">B.A. (Hons.), Philosophy</p>
							<p className="text-sm opacity-70 mt-1">May 2021</p>
						</div>

						<div>
							<h4 className="text-xl sm:text-2xl font-light tracking-wide">Durham College</h4>
							<p className="text-sm opacity-70 mt-1">Ontario Diploma · Computer Programming</p>
							<p className="text-sm opacity-70 mt-1">Aug 2026</p>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}
