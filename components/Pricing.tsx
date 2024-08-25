import Image from "next/image";
import { motion } from "framer-motion";
import { pricingItems } from "@/constants";
import { check, checkwhite } from "@/public";
import { Heading, Button } from "@/components";

export default function Pricing() {
	const phares = ["Pricing"];
	const phares1 = [
		"Free forever. Upgrade for unlimited tasks, better",
		"security, and exclusive features.",
	];
	return (
		<div className="w-full padding-x py-20 bg-white xm:py-10 sm:py-10">
			<div className="w-full flex flex-col gap-10">
				<div className="w-full flex items-center flex-col gap-3">
					<div>
						<Heading
							classname="heading font-bold"
							title={phares}
						/>
					</div>
					<div>
						<Heading
							classname="paragraph text-center"
							title={phares1}
						/>
					</div>
				</div>
				<div className="w-full flex justify-center items-end gap-10 xm:flex-col sm:flex-col">
					{pricingItems.map((item) => (
						<div
							className={`w-full flex flex-col gap-10 rounded-3xl border border-[#F1F1F1] shadow-[0px_7px_14px_0px_#EAEAEA] p-14 xm:p-8 sm:p-8 ${
								item.id == 2 ? "bg-black text-white " : "bg-white text-black"
							}`}
							key={item.id}>
							<div className="w-full flex flex-col gap-10">
								{item.id == 2 ? (
									<div className="w-full flex items-center justify-between">
										<h1
											className={`text-[#00000080] text-[30px] font-bold leading-tight tracking-[-0.9px] ${
												item.id == 2 ? "text-[#FFFFFF80]" : "text-[#00000080] "
											}`}>
											{item.title}
										</h1>
										<motion.span
											className="border border-white/20 rounded-md text-sm px-3 py-1 bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DFF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF)] text-transparent bg-clip-text [background-size:200%]"
											animate={{ backgroundPositionX: "-100%" }}
											transition={{
												duration: 1.5,
												repeat: Infinity,
												repeatType: "loop",
												ease: "linear",
											}}>
											Popular
										</motion.span>
									</div>
								) : (
									<h1
										className={`text-[#00000080] text-[30px] font-bold leading-tight tracking-[-0.9px] ${
											item.id == 2 ? "text-[#FFFFFF80]" : "text-[#00000080] "
										}`}>
										{item.title}
									</h1>
								)}
								<div className="flex gap-3">
									<h1
										className={`text-black font-dmSans text-[40px] font-bold leading-tight tracking-[-0.045em] ${
											item.id == 2 ? "text-white" : "text-black "
										}`}>
										${item.price}
									</h1>
									<span
										className={`text-[20px] font-bold tracking-[-0.9px] ${
											item.id == 2 ? "text-[#FFFFFF80]" : "text-[#00000080] "
										}`}>
										/month
									</span>
								</div>
								<Button
									title={item.btn}
									className={`w-full py-3 rounded-lg font-bold ${
										item.id == 2
											? "bg-white text-black"
											: "bg-black text-white "
									}`}
								/>
							</div>
							<div className="w-full flex flex-col gap-8">
								{item.features.map((feature) => (
									<div
										className="w-full flex gap-5"
										key={feature.id}>
										{item.id == 2 ? (
											<Image
												className="w-5 h-5 object-cover"
												src={checkwhite}
												alt="checkwhite"
												width={20}
												height={20}
											/>
										) : (
											<Image
												className="w-5 h-5 object-cover"
												src={check}
												alt="check"
												width={20}
												height={20}
											/>
										)}
										<p
											className={`leading-tight text-[16px] ${
												item.id == 2 ? "text-white" : "text-black"
											}`}>
											{feature.feature}
										</p>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
