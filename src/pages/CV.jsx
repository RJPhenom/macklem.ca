// CV.jsx
import { Link } from "react-router-dom";

export default function CV() {
	return (
		<div className="w-full h-full">
			<div className="mx-auto max-w-xl text-center min-h-screen pt-[12svh] pb-4">
				<h1 className="text-6xl xs:text-8xl font-medium mb-6">CV</h1>

				{/* EXPERIENCE */}
				<section className="mt-16 sm:mt-24">
					<h3 className="text-3xl xs:text-5xl sm:text-6xl">Experience</h3>

					<div className="mt-16 space-y-16 xs:space-y-24">
						<article>
							<h4 className="text-2xl xs:text-3xl sm:text-4xl font-medium xs:font-normal tracking-wide">
								Phenom Studios, Inc.
							</h4>
							<p className="text-md xs:text-lg mt-2 leading-relaxed">Founder & Senior Software Engineer</p>
							<p className="text-md opacity-70 mt-1">October 2022 – Present</p>

							<div className="text-lg mt-6 leading-relaxed text-left hang">
								‣ Acquired and delivered projects for clients like CanadianBanker.ca.
							</div>
							<div className="text-lg mt-2 leading-relaxed text-left hang">
								‣ Secured over $15,000 in federal funding in Interactive Digital Media.
							</div>
							<div className="text-lg mt-2 leading-relaxed text-left hang">
								‣ Developed the first fully-featured, network-replicated, open-source RTS Game Framework for
								Unreal Engine 5 (C++).
							</div>
						</article>

						<article>
							<h4 className="text-2xl xs:text-3xl sm:text-4xl font-medium xs:font-normal tracking-wide">
								CanadianBanker.ca
							</h4>
							<p className="text-md xs:text-lg mt-2 leading-relaxed">Lead Developer</p>
							<p className="text-md opacity-70 mt-1">August 2025 – Present</p>

							<div className="text-lg mt-6 leading-relaxed text-left hang">
								‣ Developed a brand new podcasting site for one of The Globe and Mail&apos;s top banking and
								finance columnists.
							</div>
							<div className="text-lg mt-2 leading-relaxed text-left hang">
								‣ Integrated Supabase auth, Stripe, and Sanity CMS in under a month.
							</div>
						</article>

						<article>
							<h4 className="text-2xl xs:text-3xl sm:text-4xl font-medium xs:font-normal tracking-wide">
								The Canadian Press
							</h4>
							<p className="text-md xs:text-lg mt-2 leading-relaxed">New Business Account Manager</p>
							<p className="text-md opacity-70 mt-1">May 2021 – Feb 2022</p>

							<div className="text-lg mt-6 leading-relaxed text-left hang">
								‣ Built entirely new book of business for new custom content division.
							</div>
							<div className="text-lg mt-2 leading-relaxed text-left hang">
								‣ Led new client acquisition in Public Relations and Insurance industries.
							</div>
						</article>

						<article>
							<h4 className="text-2xl xs:text-3xl sm:text-4xl font-medium xs:font-normal tracking-wide">
								St. Joseph Communications
							</h4>
							<p className="text-md xs:text-lg mt-2 leading-relaxed">Account Executive</p>
							<p className="text-md opacity-70 mt-1">May 2019 – Apr 2023</p>

							<div className="text-lg mt-6 leading-relaxed text-left hang">
								‣ Jumped into active pipelines for major magazine publishers, establishing new revenue.
							</div>
							<div className="text-lg mt-2 leading-relaxed text-left hang">
								‣ Led the way in new customer acquisition in finance and healthcare.
							</div>
							<div className="text-lg mt-2 leading-relaxed text-left hang">
								‣ Closed over a quarter of a million dollars in projects at Toronto&apos;s top hospitals.
							</div>
						</article>

						<article>
							<h4 className="text-2xl xs:text-3xl sm:text-4xl font-medium xs:font-normal tracking-wide">
								News Knowledge Media
							</h4>
							<p className="text-md xs:text-lg mt-2 leading-relaxed">Sales &amp; Marketing Executive</p>
							<p className="text-md opacity-70 mt-1">May 2019 – May 2021</p>

							<div className="text-lg mt-6 leading-relaxed text-left hang">
								‣ Built new B2B sales funnel from cold outreach to close.
							</div>
							<div className="text-lg mt-2 leading-relaxed text-left hang">
								‣ Scripted Marketing Automation via HubSpot CRM.
							</div>
							<div className="text-lg mt-2 leading-relaxed text-left hang">
								‣ Made kick-a** videos for my client products.
							</div>
						</article>

						<article>
							<h4 className="text-2xl xs:text-3xl sm:text-4xl font-medium xs:font-normal tracking-wide">
								Laurentian Bank
							</h4>
							<p className="text-md xs:text-lg mt-2 leading-relaxed">Senior Administrative Officer</p>
							<p className="text-md opacity-70 mt-1">December 2016 – May 2019</p>

							<div className="text-lg mt-6 leading-relaxed text-left hang">
								‣ Led mortgage funding files for subsidiary B2B Bank clients
							</div>
							<div className="text-lg mt-2 leading-relaxed text-left hang">
								‣ Reconciled mortgage department ledger in IBM AS400.
							</div>
							<div className="text-lg mt-2 leading-relaxed text-left hang">
								‣ Tested, troubleshot, and documented new core banking software.
							</div>
						</article>

						<article>
							<h4 className="text-2xl xs:text-3xl sm:text-4xl font-medium xs:font-normal tracking-wide">
								Bell Canada
							</h4>
							<p className="text-md xs:text-lg mt-2 leading-relaxed">Associate, Quality Audit</p>
							<p className="text-md opacity-70 mt-1">May 2013 – October 2016</p>

							<div className="text-lg mt-6 leading-relaxed text-left hang">
								‣ Audited contractor invoices to generate savings
							</div>
							<div className="text-lg mt-2 leading-relaxed text-left hang">
								‣ Automated Cisco router rental renewals with Microsoft VBA and Access SQL.
							</div>
							<div className="text-lg mt-2 leading-relaxed text-left hang">
								‣ Trained team&apos;s interns on new audit processes.
							</div>
						</article>
					</div>
				</section>

				{/* EDUCATION */}
				<section className="mt-24">
					<h3 className="text-3xl xs:text-5xl sm:text-6xl">Education</h3>

					<div className="mt-16 mb-16 space-y-12">
						<div>
							<h4 className="text-2xl sm:text-3xl tracking-wide">University of Toronto</h4>
							<p className="text-md mt-1">B.A. (Hons.), Philosophy</p>
							<p className="text-md opacity-70 mt-1">May 2021</p>
						</div>

						<div>
							<h4 className="text-2xl sm:text-3xl tracking-wide">Durham College</h4>
							<p className="text-md mt-1">Ontario Diploma · Computer Programming</p>
							<p className="text-md opacity-70 mt-1">August 2025</p>
						</div>
					</div>
				</section>

				{/* BACK BUTTON */}
				<div className="mb-12 flex justify-center items-center">
					<Link
						to="/"
						className="inline-block text-xl rounded-xl mt-2 md:mt-5 px-5 py-2 text-white bg-sky-500 hover:bg-sky-300 transition"
					>
						&larr; Back
					</Link>
				</div>
			</div>
		</div>
	);
}
