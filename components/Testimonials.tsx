import Image from "next/image";
import Heading from "./Heading";
import { avatar1 } from "@/public";
import { testimonials } from "@/constants";

export default function Testimonials() {
	return (
		<div className="w-full flex flex-col items-center padding-x py-10 gap-20 bg-white xm:gap-10 sm:gap-10">
			<div className="flex flex-col items-center gap-5">
				<div>
					<button className="w-fit py-2 px-3 rounded-full border border-[#2222221A] text-black font-dmSans text-sm font-medium leading-tight tracking-[-0.02188rem]">
						Version 2.0 is here
					</button>
				</div>
				<div>
					<Heading
						classname="text-[60px] xm:text-center sm:text-center"
						title="What our users say"
					/>
				</div>
				<div>
					<p className="text-[#010D3E] font-dmSans text-xl font-normal leading-tight text-center">
						From intuitive design to powerful features, our app has{" "}
						<br className="xm:hidden sm:hidden" />
						become an essential tool for users around the world.
					</p>
				</div>
			</div>
			<div className="w-[80%] flex gap-5 xm:flex-col sm:flex-col xm:w-full sm:w-full">
				<div className="w-1/3 flex flex-col gap-5 xm:w-full sm:w-full">
					{testimonials.slice(0, 3).map((item) => (
						<div
							className="flex flex-col gap-5"
							key={item.id}>
							<div className="p-12 shadow border border-[#222222]/10 rounded-[30px] bg-white flex flex-col gap-5">
								<p className="text-[#010D3E] font-dmSans text-xl font-normal leading-tight">
									{item.text}
								</p>
								<div className="flex items-center gap-5">
									<Image
										src={item.src}
										alt="asd"
										width={80}
										height={80}
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
				</div>
				<div className="w-1/3 flex flex-col gap-5 xm:w-full sm:w-full">
					{testimonials.slice(3, 6).map((item) => (
						<div
							className="flex flex-col gap-5"
							key={item.id}>
							<div className="p-12 shadow border border-[#222222]/10 rounded-[30px] bg-white flex flex-col gap-5">
								<p className="text-[#010D3E] font-dmSans text-xl font-normal leading-tight">
									{item.text}
								</p>
								<div className="flex items-center gap-5">
									<Image
										src={item.src}
										alt="asd"
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
				</div>
				<div className="w-1/3 flex flex-col gap-5 xm:w-full sm:w-full">
					{testimonials.slice(6).map((item) => (
						<div
							className="flex flex-col gap-5"
							key={item.id}>
							<div className="p-12 shadow border border-[#222222]/10 rounded-[30px] bg-white flex flex-col gap-5">
								<p className="text-[#010D3E] font-dmSans text-xl font-normal leading-tight">
									{item.text}
								</p>
								<div className="flex items-center gap-5">
									<Image
										src={item.src}
										alt="asd"
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
				</div>
			</div>
		</div>
	);
}
