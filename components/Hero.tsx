import Image from "next/image";
import { motion } from "framer-motion";
import { TextMask } from "@/animations";
import { Button, Navbar } from "@/components";
import { phares1, phares2 } from "@/constants";
import { imageAnimation, textAnimation } from "@/motion";
import { ArrowRight, cog, cylinder, noodle } from "@/public";

export default function Hero() {
	return (
		<div className="w-full h-screen bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_80%)]">
			<Navbar />
			<div className="w-full padding-x h-full items-center flex gap-4 justify-between overflow-hidden xm:flex-col sm:flex-col xm:pt-20 sm:pt-20">
				<div className="w-1/2 xm:w-full sm:w-full flex flex-col gap-6 xm:gap-4 sm:gap-4 relative xm:flex-col sm:flex-col">
					<div className="overflow-hidden">
						<motion.button
							className="w-fit py-2 px-3 rounded-full border border-[#2222221A] text-black font-dmSans text-sm font-medium leading-tight tracking-[-0.02188rem]"
							variants={textAnimation}
							initial="initial"
							animate="enter">
							Version 2.0 is here
						</motion.button>
					</div>
					<div>
						<h1 className="heading leading-tight font-bold tracking-[-0.225rem] bg-gradient-to-b from-black to-[#001E7F] bg-clip-text">
							<TextMask>{phares1}</TextMask>
						</h1>
					</div>
					<div>
						<h1 className="text-[#010D3E] font-dmSans text-xl font-normal leading-tight">
							<TextMask>{phares2}</TextMask>
						</h1>
					</div>
					<div className="overflow-hidden">
						<motion.div
							className="flex gap-4 items-center"
							variants={textAnimation}
							initial="initial"
							animate="enter">
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
						</motion.div>
					</div>
				</div>
				<div className="w-1/2 xm:w-full sm:w-full h-full relative items-center justify-center flex">
					<motion.div
						variants={imageAnimation}
						initial="initial"
						whileInView="enter"
						viewport={{ once: true }}
						className="w-full flex items-center justify-center">
						<Image
							src={cog}
							alt="cog-hero-img"
							width={800}
							height={400}
							className="w-[70%] xm:w-full sm:w-full h-auto object-cover"
						/>
					</motion.div>
					<motion.div
						className="absolute -right-16 bottom-10 rotate-[30deg] xm:hidden sm:hidden"
						variants={imageAnimation}
						initial="initial"
						whileInView="enter"
						viewport={{ once: true }}>
						<Image
							src={noodle}
							alt="noodle-hero-img"
							width={200}
							height={200}
						/>
					</motion.div>
					<motion.div
						className="absolute -left-20 top-20 xm:hidden sm:hidden"
						variants={imageAnimation}
						initial="initial"
						whileInView="enter"
						viewport={{ once: true }}>
						<Image
							src={cylinder}
							alt="cylinder-hero-img"
							width={200}
							height={200}
						/>
					</motion.div>
				</div>
			</div>
		</div>
	);
}
