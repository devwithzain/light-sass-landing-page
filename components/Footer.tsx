import Link from "next/link";
import Image from "next/image";
import { logo } from "@/public";
import { footerItems, footerSocialsItems } from "@/constants";

export default function Footer() {
	return (
		<div className="w-full bg-black py-10 padding-x">
			<div className="w-full flex items-center justify-center flex-col gap-7">
				<div>
					<Image
						src={logo}
						alt="logo"
						width={40}
						height={40}
					/>
				</div>
				<div className="flex items-center gap-4  xm:flex-col sm:flex-col">
					{footerItems.map((item) => (
						<Link
							href={item.href}
							key={item.id}
							className="paragraph font-normal leading-tight text-[#BCBCBC]">
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
					<p className="text-[#BCBCBC] paragraph font-normal">
						© 2024 Your Company, Inc. All rights reserved.
					</p>
				</div>
			</div>
		</div>
	);
}
