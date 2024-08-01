import { TbuttonProps } from "@/types";

export default function Button({ className, title }: TbuttonProps) {
	return (
		<button
			className={`text-[18px] leading-normal rounded-[8px] font-normal ${className}`}>
			{title}
		</button>
	);
}