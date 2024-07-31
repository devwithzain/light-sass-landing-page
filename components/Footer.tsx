import { footerItems, footerSocialsItems } from "@/constants";
import { logo } from "@/public";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
	return (
		<div className="w-full bg-black py-10 px-20">
			<div className="w-full flex items-center justify-center flex-col gap-7">
				<div>
					<Image
						src={logo}
						alt="logo"
						width={40}
						height={40}
					/>
				</div>
				<div className="flex items-center gap-4">
					{footerItems.map((item) => (
						<Link
							href={item.href}
							key={item.id}
							className="text-md font-normal leading-6 text-[#BCBCBC]">
							{item.title}
						</Link>
					))}
				</div>
				<div className="flex items-center gap-4">
					{footerSocialsItems.map((item) => (
						<Link
							href={item.href}
							key={item.id}>
							<Image
								src={item.src}
								alt="logo"
								width={30}
								height={30}
							/>
						</Link>
					))}
				</div>
				<div className="flex items-center">
					<p className="text-[#BCBCBC] text-md font-normal">
						© 2024 Your Company, Inc. All rights reserved.
					</p>
				</div>
			</div>
		</div>
	);
}
