import { TheadingProps } from "@/types";

export default function Heading({ title, classname }: TheadingProps) {
	return (
		<h1
			className={`font-bold bg-gradient-to-b from-black to-[#001E7F] text-transparent bg-clip-text ${classname}`}>
			{title}
		</h1>
	);
}
