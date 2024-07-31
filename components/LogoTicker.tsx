import Image from "next/image";
import LogoMarquee from "./LogoMarquee";
import { logoMarqueeItems } from "@/constants";

export default function LogoTicker() {
	return (
		<div>
			<LogoMarquee baseVelocity={1.5}>
				{logoMarqueeItems.map((item) => (
					<div
						className={`w-[200px] flex ${item.id == 6 && "mr-14"}`}
						key={item.id}>
						<Image
							src={item.src}
							alt="asd"
							className="w-full"
						/>
					</div>
				))}
			</LogoMarquee>
		</div>
	);
}
