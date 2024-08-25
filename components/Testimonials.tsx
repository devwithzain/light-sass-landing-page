import Image from "next/image";
import { Heading } from "@/components";
import { motion } from "framer-motion";
import { textAnimation } from "@/motion";
import { testimonials } from "@/constants";

export default function Testimonials() {
	const phares = ["What our users say"];
	const phares1 = [
		"From intuitive design to powerful features, our app has",
		"become an essential tool for users around the world.",
	];
	return (
		<div className="w-full flex flex-col items-center padding-x py-10 gap-20 bg-white xm:gap-10 sm:gap-10">
			<div className="flex flex-col items-center gap-5">
				<div className="overflow-hidden">
					<motion.button
						className="w-fit py-2 px-3 rounded-full border border-[#2222221A] text-black font-dmSans text-sm font-medium leading-tight tracking-[-0.02188rem]"
						variants={textAnimation}
						initial="initial"
						whileInView="enter"
						viewport={{ once: true }}>
						Version 2.0 is here
					</motion.button>
				</div>
				<div>
					<Heading
						classname="heading font-bold xm:text-center sm:text-center"
						title={phares}
					/>
				</div>
				<div>
					<Heading
						classname="paragraph text-center font-normal xm:text-center sm:text-center"
						title={phares1}
					/>
				</div>
			</div>
			<motion.div className="w-full flex gap-5 xm:flex-col sm:flex-col xm:w-full py-10 sm:w-full overflow-hidden h-[750px] [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] mt-10">
				<motion.div
					animate={{ y: "-50%" }}
					transition={{
						repeat: Infinity,
						repeatType: "loop",
						ease: "linear",
						duration: 13,
					}}
					className="w-1/3 flex flex-col h-fit xm:w-full sm:w-full">
					{[...testimonials.slice(0, 3), ...testimonials.slice(0, 3)].map(
						(item) => (
							<div
								className="flex flex-col gap-5"
								key={item.id}>
								<div className="p-10 mb-5 shadow border border-[#222222]/10 rounded-[30px] bg-white flex flex-col gap-5">
									<p className="text-[#010D3E] font-dmSans text-xl font-normal leading-tight">
										{item.text}
									</p>
									<div className="flex items-center gap-5">
										<Image
											src={item.src}
											alt="asd"
											width={60}
											height={60}
										/>
										<div className="flex flex-col">
											<h1 className="text-[#010D3E] font-dmSans text-xl font-normal leading-tight">
												{item.name}
											</h1>
											<p className="text-[#010D3E] font-dmSans text-xl font-normal leading-tight">
												{item.username}
											</p>
										</div>
									</div>
								</div>
							</div>
						),
					)}
				</motion.div>
				<motion.div
					className="w-1/3 flex flex-col h-fit xm:hidden sm:hidden"
					animate={{ y: "-50%" }}
					transition={{
						repeat: Infinity,
						repeatType: "loop",
						ease: "linear",
						duration: 15,
					}}>
					{[...testimonials.slice(3, 6), ...testimonials.slice(3, 6)].map(
						(item) => (
							<div
								className="flex flex-col gap-5"
								key={item.id}>
								<div className="p-10 mb-5 shadow border border-[#222222]/10 rounded-[30px] bg-white flex flex-col gap-5">
									<p className="text-[#010D3E] font-dmSans text-xl font-normal leading-tight">
										{item.text}
									</p>
									<div className="flex items-center gap-5">
										<Image
											src={item.src}
											alt="asd"
											width={60}
											height={60}
										/>
										<div className="flex flex-col">
											<h1 className="text-[#010D3E] font-dmSans text-xl font-normal leading-tight">
												{item.name}
											</h1>
											<p className="text-[#010D3E] font-dmSans text-xl font-normal leading-tight">
												{item.username}
											</p>
										</div>
									</div>
								</div>
							</div>
						),
					)}
				</motion.div>
				<motion.div
					className="w-1/3 flex flex-col h-fit xm:hidden sm:hidden"
					animate={{ y: "-50%" }}
					transition={{
						repeat: Infinity,
						repeatType: "loop",
						ease: "linear",
						duration: 16,
					}}>
					{[...testimonials.slice(6), ...testimonials.slice(6)].map((item) => (
						<div
							className="flex flex-col gap-5"
							key={item.id}>
							<div className="p-10 mb-5 shadow border border-[#222222]/10 rounded-[30px] bg-white flex flex-col gap-5">
								<p className="text-[#010D3E] font-dmSans text-xl font-normal leading-tight">
									{item.text}
								</p>
								<div className="flex items-center gap-5">
									<Image
										src={item.src}
										alt="asd"
										width={60}
										height={60}
									/>
									<div className="flex flex-col">
										<h1 className="text-[#010D3E] font-dmSans text-xl font-normal leading-tight">
											{item.name}
										</h1>
										<p className="text-[#010D3E] font-dmSans text-xl font-normal leading-tight">
											{item.username}
										</p>
									</div>
								</div>
							</div>
						</div>
					))}
				</motion.div>
			</motion.div>
		</div>
	);
}
