export default function ProjectCard({
	imgSrc,
	imgAlt = "Project preview",
	title,
	byline,
	byHref,
	description,
	tags = [],
	codeHref,
	pageHref,
	href,
	buttonLabel = "Visit →",
	buttonColour = "bg-blue-500",
	buttonHoverColour = "hover:bg-blue-400",
}) {
	const linkHref = href || pageHref || codeHref || "#";

	return (
		<div className={"mx-auto w-full max-w-[552px]"}>
			<div className="max-w-[552px] h-[167px] rounded-3xl ring-1 ring-zinc-800 overflow-hidden backdrop-blur-md">
				<div className="h-full grid grid-cols-[167px_1fr] gap-4 p-4">
					{/* Left: image */}
					<div className="h-full w-[167px] overflow-hidden rounded-xl bg-zinc-800">
						{imgSrc ? (
							<img
								src={imgSrc}
								alt={imgAlt}
								className="w-full h-full object-cover object-left no-shadow"
								loading="lazy"
							/>
						) : null}
					</div>

					{/* Right: content */}
					<div className="min-w-0 h-full flex flex-col justify-center text-left">
						<h3 className="text-md sm:text-2xl font-light tracking-wide md:truncate">{title}</h3>
						<a
							className="mt-0.5 text-sm opacity-80 truncate underline hover:no-underline"
							href={byHref}
							target="_blank"
							rel="noreferrer"
						>
							{byline}
						</a>
						<p className="hidden md:block mt-1 text-sm font-light truncate">{description}</p>

						{/* Tags + button */}
						<div className="mt-3 flex items-center gap-0 md:gap-2 text-xl">
							<div className="hidden md:flex items-center gap-1 whitespace-nowrap overflow-hidden min-w-0">
								{tags.map((cls, i) => (
									<span
										key={i}
										className="px-2 py-0.5 font-light no-shadow flex items-center gap-1"
									>
										<i
											className={`${cls}`}
											aria-hidden="true"
										/>
									</span>
								))}
							</div>

							<a
								href={linkHref}
								target="_blank"
								rel="noopener noreferrer"
								className={`shrink-0 inline-flex items-center px-3 py-1 rounded-lg ${buttonColour} ${buttonHoverColour} text-sm text-white no-shadow font-medium no-underline`}
								aria-label={`Go to ${title}`}
							>
								{buttonLabel}
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
