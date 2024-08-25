"use client";
import Navbar from "./Navbar";
import Image from "next/image";
import { logo } from "@/public";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { navVariants } from "@/motion";

export default function LeftSideHome() {
	const pathname = usePathname();
	const [isActive, setIsActive] = useState(false);

	useEffect(() => {
		if (isActive) setIsActive(false);
	}, [pathname]);

	return (
		<>
			<motion.div
				variants={navVariants}
				initial="initial"
				whileInView="enter"
				viewport={{ once: true }}
				className="w-full flex items-center justify-between gap-5 padding-x py-[12px] relative z-[999] backdrop-blur-sm">
				<div>
					<Image
						src={logo}
						alt="logo"
						width={40}
						height={40}
					/>
				</div>
				<div className="z-10">
					<div
						onClick={() => {
							setIsActive(!isActive);
						}}
						className="w-[40px] h-[40px] rounded-full bg-black cursor-pointer flex items-center justify-center relative">
						<div
							className={`w-[50%] h-[2px] bg-white absolute ${
								!isActive && "top-[45%]"
							} transform -translate-x-1/2 -translate-y-1/2`}
							style={{
								transform: isActive ? "rotate(45deg)" : "none",
								transition: "transform 0.3s",
							}}
						/>
						<div
							className={`w-[50%] h-[2px] bg-white absolute ${
								!isActive && "top-[55%]"
							} transform -translate-x-1/2 -translate-y-1/2`}
							style={{
								transform: isActive ? "rotate(-45deg)" : "none",
								transition: "transform 0.3s",
							}}
						/>
					</div>
				</div>
			</motion.div>
			<AnimatePresence mode="wait">{isActive && <Navbar />}</AnimatePresence>
		</>
	);
}
