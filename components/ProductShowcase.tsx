import { productImage, pyramid, tube } from "@/public";
import Image from "next/image";

export default function ProductShowcase() {
	return (
		<div className="w-full px-20 py-10 bg-gradient-to-b from-white to-[#d2dcff]">
			<div className="w-full flex flex-col gap-10">
				<div className="w-full flex items-center flex-col gap-3">
					<div>
						<button className="w-fit py-2 px-3 rounded-full border border-[#2222221A] text-black font-dmSans text-sm font-medium leading-5 tracking-[-0.02188rem]">
							Boost your productivity
						</button>
					</div>
					<div>
						<h1 className="text-[54px] text-center font-bold leading-[65px] tracking-[-2.7px] bg-gradient-to-b from-black to-[#001E7F] text-transparent bg-clip-text">
							A more effective way <br /> to track progress
						</h1>
					</div>
					<div>
						<p className="text-[#010D3E] text-center font-dmSans text-xl font-normal leading-7">
							Celebrate the joy of accomplishment with an app <br /> designed to
							track your progress and motivate your <br /> efforts.
						</p>
					</div>
				</div>
				<div className="relative">
					<Image
						src={productImage}
						alt="productImage"
					/>
					<div className="absolute -left-40 bottom-20">
						<Image
							src={tube}
							alt="tube-hero-img"
							width={250}
							height={250}
						/>
					</div>
					<div className="absolute -right-32 -top-20">
						<Image
							src={pyramid}
							alt="pyramid-hero-img"
							width={250}
							height={250}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
