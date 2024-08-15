import Image from "next/image";
import Heading from "./Heading";
import { avatar1 } from "@/public";
import { testimonials } from "@/constants";

export default function Testimonials() {
	return (
		<div className="w-full flex flex-col items-center px-20 py-10 gap-20 bg-white">
			<div className="flex flex-col items-center gap-5">
				<div>
					<button className="w-fit py-2 px-3 rounded-full border border-[#2222221A] text-black font-dmSans text-sm font-medium leading-tight tracking-[-0.02188rem]">
						Version 2.0 is here
					</button>
				</div>
				<div>
					<h1 className="text-[4.5rem] font-bold leading-tight tracking-[-0.225rem] bg-gradient-to-b from-black to-[#001E7F] text-transparent bg-clip-text">
						What our users say
					</h1>
				</div>
				<div>
					<p className="text-[#010D3E] font-dmSans text-xl font-normal leading-tight text-center">
						From intuitive design to powerful features, our app has <br />
						become an essential tool for users around the world.
					</p>
				</div>
			</div>
			<div className="w-[80%] flex gap-5">
				<div className="w-1/3 flex flex-col gap-5">
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
				<div className="w-1/3 flex flex-col gap-5">
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
				<div className="w-1/3 flex flex-col gap-5">
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
