// CV.jsx
import { Link } from "react-router-dom";

export default function CV() {
	return (
		<div className="w-full h-full">
			<div className="mx-auto max-w-3xl px-6 text-center min-h-screen pt-[12svh] pb-4">
				<h1 className="text-8xl sm:text-8xl font-medium mb-6">CV</h1>
				<div className="flex justify-center items-center">
					<Link
						to="/"
						className="inline-block text-xl rounded-xl mt-2 md:mt-5 px-5 py-2 text-white bg-sky-500 hover:bg-sky-700 transition"
					>
						&larr; Back
					</Link>
				</div>

				{/* EXPERIENCE */}
				<section className="mt-16 sm:mt-24">
					<h3 className="text-5xl sm:text-6xl ">Experience</h3>

					<div className="mt-16 space-y-24">
						<article>
							<h4 className="text-3xl sm:text-4xl tracking-wide">Phenom Studios, Inc.</h4>
							<p className="text-lg mt-2 leading-relaxed">Founder & Senior Software Engineer</p>
							<p className="text-md opacity-70 mt-1">October 2022 – Present</p>

							<p className="text-lg mt-6 leading-relaxed">
								⁃ Acquired and delivered projects for clients like CanadianBanker.ca.
							</p>
							<p className="text-lg mt-2 leading-relaxed">
								⁃ Secured over $15,000 in federal funding in Interactive Digital Media.
							</p>
							<p className="text-lg mt-2 leading-relaxed">
								⁃ Developed the first fully-featured, network-replicated, open-source RTS Game Framework for
								Unreal Engine 5 (C++).
							</p>
						</article>

						<article>
							<h4 className="text-3xl sm:text-4xl tracking-wide">CanadianBanker.ca</h4>
							<p className="text-lg mt-2 leading-relaxed">Lead Developer</p>
							<p className="text-md opacity-70 mt-1">August 2025 – Present</p>

							<p className="text-lg mt-6 leading-relaxed">
								⁃ Developed a brand new podcasting site for one of The Globe and Mail's top columnists.
							</p>
							<p className="text-lg mt-2 leading-relaxed">
								⁃ Integrated Supabase auth, Stripe, and Sanity CMS in under a month.
							</p>
						</article>

						<article>
							<h4 className="text-3xl sm:text-4xl tracking-wide">The Canadian Press</h4>
							<p className="text-lg mt-2 leading-relaxed">New Business Account Manager</p>
							<p className="text-md opacity-70 mt-1">May 2021 – Feb 2022</p>

							<p className="text-lg mt-6 leading-relaxed">
								⁃ Built entirely new book of business for new custom content division.
							</p>
							<p className="text-lg mt-2 leading-relaxed">
								⁃ Led new client acquisition in Public Relations and Insurance industries.
							</p>
						</article>

						<article>
							<h4 className="text-3xl sm:text-4xl tracking-wide">St. Joseph Communications</h4>
							<p className="text-lg mt-2 leading-relaxed">Account Executive</p>
							<p className="text-md opacity-70 mt-1">May 2019 – Apr 2023</p>

							<p className="text-lg mt-6 leading-relaxed">
								⁃ Jumped into active pipelines for major magazine publishers, establishing new revenue.
							</p>
							<p className="text-lg mt-2 leading-relaxed">
								⁃ Led the way in new customer acquisition in finance and healthcare.
							</p>
							<p className="text-lg mt-2 leading-relaxed">
								⁃ Closed over a quarter of a million dollars in projects at Toronto's top hospitals.
							</p>
						</article>

						<article>
							<h4 className="text-3xl sm:text-4xl tracking-wide">News Knowledge Media</h4>
							<p className="text-lg mt-2 leading-relaxed">Sales &amp; Marketing Executive</p>
							<p className="text-md opacity-70 mt-1">May 2019 – May 2021</p>

							<p className="text-lg mt-6 leading-relaxed">
								⁃ Built new B2B sales funnel from cold outreach to close.
							</p>
							<p className="text-lg mt-2 leading-relaxed">⁃ Scripted Marketing Automation via HubSpot CRM.</p>
							<p className="text-lg mt-2 leading-relaxed">⁃ Made kick-a** videos for my client products.</p>
						</article>

						<article>
							<h4 className="text-3xl sm:text-4xl tracking-wide">Laurentian Bank</h4>
							<p className="text-lg mt-2 leading-relaxed">Senior Administrative Officer</p>
							<p className="text-md opacity-70 mt-1">December 2016 – May 2019</p>

							<p className="text-lg mt-6 leading-relaxed">
								⁃ Led mortgage funding files for subsidiary B2B Bank clients
							</p>
							<p className="text-lg mt-2 leading-relaxed">⁃ Reconciled mortgage department ledger in IBM AS400.</p>
							<p className="text-lg mt-2 leading-relaxed">
								⁃ Tested, troubleshot, and documented new core banking software.
							</p>
						</article>

						<article>
							<h4 className="text-3xl sm:text-4xl tracking-wide">Bell Canada</h4>
							<p className="text-lg mt-2 leading-relaxed">Associate, Quality Audit</p>
							<p className="text-md opacity-70 mt-1">May 2013 – October 2016</p>

							<p className="text-lg mt-6 leading-relaxed">⁃ Audited contractor invoices to generate savings</p>
							<p className="text-lg mt-2 leading-relaxed">
								⁃ Automated Cisco router rental renewals with Microsoft VBA and Access SQL.
							</p>
							<p className="text-lg mt-2 leading-relaxed">⁃ Trained team's interns on new audit processes.</p>
						</article>
					</div>
				</section>

				{/* EDUCATION */}
				<section className="mt-24">
					<h3 className="text-5xl sm:text-6xl">Education</h3>

					<div className="mt-16 mb-48 space-y-12">
						<div>
							<h4 className="text-3xl sm:text-4xl tracking-wide">University of Toronto</h4>
							<p className="text-lg opacity-70 mt-1">B.A. (Hons.), Philosophy</p>
							<p className="text-md opacity-70 mt-1">May 2021</p>
						</div>

						<div>
							<h4 className="text-3xl sm:text-4xl tracking-wide">Durham College</h4>
							<p className="text-lg opacity-70 mt-1">Ontario Diploma · Computer Programming</p>
							<p className="text-md opacity-70 mt-1">August 2025</p>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}
