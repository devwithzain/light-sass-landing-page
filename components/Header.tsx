import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components";
import { ArrowRight, arrowRightWhite, logo } from "@/public";
import { navigationItems } from "@/constants";

export default function Navbar() {
	return (
		<div className="fixed w-full top-0 z-50 backdrop-blur-sm">
			<div className="w-full flex items-center justify-center gap-3 py-3 bg-black">
				<div>
					<h1 className="text-[#FFFFFF99] text-[18px] font-normal leading-5">
						Streamline your workflow and boost your productivity.
					</h1>
				</div>
				<div className="flex gap-2 items-center">
					<button className="text-white text-[16px] leading-normal font-normal">
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
			</div>
			<div className="w-full flex items-center justify-between gap-2 px-20 py-3">
				<div>
					<Image
						src={logo}
						alt="logo"
						width={40}
						height={40}
					/>
				</div>
				<div className="flex items-center gap-4">
					{navigationItems.map((item) => (
						<Link
							href={item.href}
							key={item.id}
							className="text-[18px] font-normal leading-6 text-[#00000099]">
							{item.title}
						</Link>
					))}
					<Button
						className="text-white bg-black px-4 py-2"
						title="Get for free"
					/>
				</div>
			</div>
		</div>
	);
}
