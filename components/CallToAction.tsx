import Image from "next/image";
import { motion } from "framer-motion";
import { Button, Heading } from "@/components";
import { ArrowRight, spring, star } from "@/public";
import { imageAnimation, textAnimation } from "@/motion";

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
					variants={imageAnimation}
					initial="initial"
					whileInView="enter"
					viewport={{ once: true }}
					className="xm:hidden sm:hidden">
					<Image
						src={star}
						alt="star-hero-img"
						width={400}
						height={400}
					/>
				</motion.div>
				<div className="w-full flex items-center flex-col gap-3">
					<div>
						<Heading
							classname="heading font-bold xm:text-center sm:text-center"
							title={phares1}
						/>
					</div>
					<div>
						<Heading
							classname="paragraph font-normal text-center block xm:hidden sm:hidden"
							title={phares2}
						/>
						<Heading
							classname="paragraph font-normal text-center hidden xm:block sm:block"
							title={phares3}
						/>
					</div>
					<motion.div
						variants={textAnimation}
						initial="initial"
						whileInView="enter"
						viewport={{ once: true }}
						className="flex gap-4 items-center mt-3 overflow-hidden">
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
					variants={imageAnimation}
					initial="initial"
					whileInView="enter"
					viewport={{ once: true }}>
					<Image
						src={spring}
						alt="spring-hero-img"
						width={400}
						height={400}
					/>
				</motion.div>
			</div>
		</div>
	);
}
