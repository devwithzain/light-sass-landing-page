"use client";
import Link from "next/link";
import { TlinksProps } from "@/types";
import { slide, scale } from "@/motion";
import { motion } from "framer-motion";

export default function Links({
	data,
	isActive,
	setSelectedIndicator,
}: TlinksProps) {
	const { title, href, index } = data;

	return (
		<motion.div
			className="relative flex items-center"
			onMouseEnter={() => {
				setSelectedIndicator(href);
			}}
			custom={index}
			variants={slide}
			initial="initial"
			animate="enter"
			exit="exit">
			<motion.div
				variants={scale}
				animate={isActive ? "open" : "closed"}
				className="w-[10px] h-[10px] bg-white rounded-full absolute left-[-20px]"
			/>
			<Link href={href}>{title}</Link>
		</motion.div>
	);
}
