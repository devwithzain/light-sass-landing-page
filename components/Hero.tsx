import Button from "./Button";
import Navbar from "./Header";
import Image from "next/image";
import { ArrowRight, cog, cylinder, noodle } from "@/public";

export default function Hero() {
	return (
		<div className="w-full h-screen bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_80%)]">
			<Navbar />
			<div className="w-full h-full items-center flex gap-4 justify-between pl-20 overflow-hidden">
				<div className="flex-1 flex flex-col gap-6 relative">
					<div>
						<button className="w-fit py-2 px-3 rounded-full border border-[#2222221A] text-black font-dmSans text-sm font-medium leading-5 tracking-[-0.02188rem]">
							Version 2.0 is here
						</button>
					</div>
					<div>
						<h1 className="text-[4.5rem] font-bold leading-[4.5rem] tracking-[-0.225rem] bg-gradient-to-b from-black to-[#001E7F] text-transparent bg-clip-text">
							Pathway to <br /> productivity
						</h1>
					</div>
					<div>
						<p className="text-[#010D3E] font-dmSans text-xl font-normal leading-7">
							Celebrate the joy of accomplishment with an app <br />
							designed to track your progress, motivate your efforts,
							<br /> and celebrate your successes.
						</p>
					</div>
					<div>
						<div className="flex gap-4 items-center">
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
					<div className="absolute -right-24 -top-14">
						<Image
							src={cylinder}
							alt="cylinder-hero-img"
							width={200}
							height={200}
						/>
					</div>
				</div>
				<div className="w-full h-full relative items-center justify-center flex-1 flex pb-5">
					<Image
						src={cog}
						alt="cog-hero-img"
						width={800}
						height={400}
						className="w-[70%] h-auto object-cover"
					/>
					<div className="absolute right-5 bottom-10 rotate-[30deg]">
						<Image
							src={noodle}
							alt="noodle-hero-img"
							width={200}
							height={200}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
