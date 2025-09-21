import PFP from "../assets/vector_pfp.png";

export default function Avatar() {
	return (
		<img
			src={PFP}
			alt="RJ Macklem"
			className="
        w-86 h-86
        object-cover
        ring-2 ring-black
        rounded-full
      "
		/>
	);
}
