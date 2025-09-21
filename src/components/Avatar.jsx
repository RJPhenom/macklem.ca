import PFP from "../assets/vector_pfp.png";

export default function Avatar() {
	return (
		<img
			src={PFP}
			alt="RJ Macklem"
			className="
        w-80 h-80
				sm:w-128 sm:h-128
        object-cover
        rounded-full
      "
		/>
	);
}
