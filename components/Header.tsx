"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components";
import { navVariants } from "@/motion";
import { MobileMenu } from "@/animations";
import { navigationItems } from "@/constants";
import { arrowRightWhite, logo } from "@/public";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

export default function Navbar() {
	const { scrollY } = useScroll();
	const [hidden, setHidden] = useState(false);

	useMotionValueEvent(scrollY, "change", (latest) => {
		if (latest > 0) {
			setHidden(true);
		} else {
			setHidden(false);
		}
	});
	return (
		<>
			<motion.div
				initial="initial"
				whileInView="enter"
				variants={navVariants}
				className="fixed w-full top-0 z-50 xm:hidden sm:hidden">
				<motion.div
					className="w-full flex items-center justify-center gap-3 py-3 bg-black"
					variants={navVariants}
					animate={hidden ? "hidden" : "vissible"}>
					<div className="xm:hidden sm:hidden">
						<h1 className="text-[#FFFFFF99] text-[18px] font-normal leading-tight">
							Streamline your workflow and boost your productivity.
						</h1>
					</div>
					<div className="flex gap-2 items-center">
						<button className="text-white text-[16px] leading-tight font-normal">
							Get started for free
						</button>
						<Image
							src={arrowRightWhite}
							alt="arrowRightWhite"
							width={20}
							height={20}
							className="text-white"
						/>
					</div>
				</motion.div>
				<motion.div
					className="w-full flex items-center justify-between gap-2 padding-x py-3 backdrop-blur-sm"
					animate={hidden ? { y: -48 } : { y: 0 }}
					transition={{ duration: 0.5, ease: "easeInOut" }}>
					<div>
						<Image
							src={logo}
							alt="logo"
							width={40}
							height={40}
						/>
					</div>
					<div className="flex items-center gap-4 xm:hidden sm:hidden">
						{navigationItems.map((item) => (
							<Link
								href={item.href}
								key={item.id}
								className="text-[18px] font-normal leading-tight text-[#00000099]">
								{item.title}
							</Link>
						))}
						<Button
							className="text-white bg-black px-4 py-2"
							title="Get for free"
						/>
					</div>
				</motion.div>
			</motion.div>
			<div className="fixed w-full top-0 z-50 hidden xm:block sm:block">
				<MobileMenu />
			</div>
		</>
	);
}
