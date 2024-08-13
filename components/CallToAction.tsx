import { ArrowRight, spring, star } from "@/public";
import Image from "next/image";
import Button from "./Button";

export default function CallToAction() {
	return (
		<div className="w-full py-10 relative bg-gradient-to-b from-white to-[#d2dcff]">
			<div className="w-full flex items-center gap-5">
				<div className="">
					<Image
						src={star}
						alt="star-hero-img"
						width={800}
						height={400}
					/>
				</div>
				<div className="w-full flex items-center flex-col gap-3">
					<div>
						<h1 className="text-[4.5rem] font-bold tracking-tight bg-gradient-to-b from-black to-[#001E7F] text-transparent bg-clip-text">
							Sign up for free today
						</h1>
					</div>
					<div>
						<p className="text-[#010D3E] font-dmSans text-xl font-normal text-center">
							Celebrate the joy of accomplishment with an app <br /> designed to
							track your progress and motivate your
							<br /> efforts.
						</p>
					</div>
					<div className="flex gap-4 items-center mt-3">
						<Button
							className="text-white bg-black py-2 px-4"
							title="Get for free"
						/>
						<div className="flex items-center gap-2">
							<Button
								className="text-black"
								title="Learn more"
							/>
							<Image
								src={ArrowRight}
								alt="ArrowRight"
								width={20}
								height={20}
								className="text-black"
							/>
						</div>
					</div>
				</div>
				<div className="">
					<Image
						src={spring}
						alt="spring-hero-img"
						width={800}
						height={400}
					/>
				</div>
			</div>
		</div>
	);
}
