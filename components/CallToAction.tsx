import Button from "./Button";
import Image from "next/image";
import { motion } from "framer-motion";
import { TextMask } from "@/animations";
import { ArrowRight, spring, star } from "@/public";

export default function CallToAction() {
	const phares1 = ["Sign up for free today"];
	const phares2 = [
		"Celebrate the joy of accomplishment with an app",
		"designed to track your progress and motivate your",
		"efforts.",
	];
	const phares3 = [
		"Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.",
	];
	return (
		<div className="w-full padding-x py-10 relative bg-gradient-to-b from-white to-[#d2dcff]">
			<div className="w-full flex items-center gap-5">
				<motion.div
					initial={{ opacity: 0, scale: 0 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{
						duration: 1,
						type: "spring",
					}}
					viewport={{ once: true }}
					className="xm:hidden sm:hidden">
					<Image
						src={star}
						alt="star-hero-img"
						width={800}
						height={400}
					/>
				</motion.div>
				<div className="w-full flex items-center flex-col gap-3">
					<div>
						<h1 className="heading font-bold tracking-tight bg-gradient-to-b from-black to-[#001E7F] bg-clip-text xm:text-center sm:text-center leading-tight">
							<TextMask>{phares1}</TextMask>
						</h1>
					</div>
					<div>
						<h1 className="text-[#010D3E] font-dmSans paragraph font-normal text-center block xm:hidden sm:hidden">
							<TextMask>{phares2}</TextMask>
						</h1>
						<h1 className="text-[#010D3E] font-dmSans paragraph font-normal text-center hidden xm:block sm:block">
							<TextMask>{phares3}</TextMask>
						</h1>
					</div>
					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{
							duration: 1,
							delay: 0.5,
							type: "spring",
						}}
						viewport={{ once: true }}
						className="flex gap-4 items-center mt-3">
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
				<motion.div
					className="xm:hidden sm:hidden"
					initial={{ opacity: 0, scale: 0 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{
						duration: 1,
						type: "spring",
					}}
					viewport={{ once: true }}>
					<Image
						src={spring}
						alt="spring-hero-img"
						width={800}
						height={400}
					/>
				</motion.div>
			</div>
		</div>
	);
}
