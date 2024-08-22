"use client";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import { logo } from "@/public";

export default function LeftSideHome() {
	const pathname = usePathname();
	const [isActive, setIsActive] = useState(false);

	useEffect(() => {
		if (isActive) setIsActive(false);
	}, [pathname]);

	return (
		<>
			<div className="w-full flex items-center justify-between gap-5 padding-x pt-[8px]">
				<div>
					<Image
						src={logo}
						alt="logo"
						width={50}
						height={50}
					/>
				</div>
				<div className="z-10">
					<div
						onClick={() => {
							setIsActive(!isActive);
						}}
						className="w-[50px] h-[50px] rounded-full bg-black cursor-pointer flex items-center justify-center relative">
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
			</div>
			<AnimatePresence mode="wait">{isActive && <Navbar />}</AnimatePresence>
		</>
	);
}
