import Button from "./Button";
import Navbar from "./Header";
import Image from "next/image";
import { motion } from "framer-motion";
import { TextMask } from "@/animations";
import { ArrowRight, cog, cylinder, noodle } from "@/public";

export default function Hero() {
	const phares1 = ["Pathway to ", "productivity"];
	const phares2 = [
		"Celebrate the joy of accomplishment with an app",
		"designed to track your progress, motivate your efforts,",
		"and celebrate your successes.",
	];
	const phares3 = [
		"Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes.",
	];
	return (
		<div className="w-full h-screen bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_80%)]">
			<Navbar />
			<div className="w-full padding-x sm:pt-40 xm:pt-40 h-full items-center flex gap-4 justify-between overflow-hidden xm:flex-col sm:flex-col">
				<div className="flex-1 flex flex-col gap-6 relative xm:flex-col sm:flex-col">
					<motion.div
						initial={{ opacity: 0, scale: 0, x: -100 }}
						whileInView={{ opacity: 1, scale: 1, x: 0 }}
						transition={{
							duration: 1,
							delay: 0.5,
							type: "spring",
						}}
						viewport={{ once: true }}>
						<button className="w-fit py-2 px-3 rounded-full border border-[#2222221A] text-black font-dmSans text-sm font-medium leading-tight tracking-[-0.02188rem]">
							Version 2.0 is here
						</button>
					</motion.div>
					<div>
						<h1 className="heading leading-tight font-bold tracking-[-0.225rem] bg-gradient-to-b from-black to-[#001E7F] bg-clip-text">
							<TextMask>{phares1}</TextMask>
						</h1>
					</div>
					<div>
						<h1 className="text-[#010D3E] font-dmSans text-xl font-normal leading-tight block xm:hidden sm:hidden">
							<TextMask>{phares2}</TextMask>
						</h1>
						<h1 className="text-[#010D3E] font-dmSans text-xl font-normal leading-tight hidden xm:block sm:block">
							<TextMask>{phares3}</TextMask>
						</h1>
					</div>
					<motion.div
						initial={{ opacity: 0, scale: 0, x: -100 }}
						whileInView={{ opacity: 1, scale: 1, x: 0 }}
						transition={{
							duration: 1,
							delay: 0.5,
							type: "spring",
						}}
						viewport={{ once: true }}>
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
					</motion.div>
					<div className="absolute -right-24 -top-14 xm:hidden sm:hidden">
						<Image
							src={cylinder}
							alt="cylinder-hero-img"
							width={200}
							height={200}
						/>
					</div>
				</div>
				<div className="w-full h-full relative items-center justify-center flex-1 flex pb-5">
					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{
							duration: 1,
							delay: 0.8,
							type: "spring",
						}}
						viewport={{ once: true }}
						className="w-full flex items-center justify-center">
						<Image
							src={cog}
							alt="cog-hero-img"
							width={800}
							height={400}
							className="w-[70%] h-auto object-cover"
						/>
					</motion.div>
					<div className="absolute right-5 bottom-10 rotate-[30deg] xm:hidden sm:hidden">
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
