import PFP from "../assets/vector_pfp.png";

export default function Avatar() {
	return (
		<img
			src={PFP}
			alt="RJ Macklem"
			className="
        w-80 h-80
				sm:w-96 sm:h-96
        object-cover
        rounded-full
				bg-sky-300
      "
		/>
	);
}
