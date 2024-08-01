import Button from "./Button";
import Image from "next/image";
import Heading from "./Heading";
import { pricingItems } from "@/constants";
import { check, checkwhite } from "@/public";

export default function Pricing() {
	return (
		<div className="w-full px-20 py-20 bg-white">
			<div className="w-full flex flex-col gap-20">
				<div className="w-full flex items-center flex-col gap-3">
					<div>
						<Heading
							classname="text-[60px]"
							title="Pricing"
						/>
					</div>
					<div>
						<p className="text-[#010D3E] text-center font-dmSans text-xl font-normal leading-7">
							Free forever. Upgrade for unlimited tasks, better <br /> security,
							and exclusive features.
						</p>
					</div>
				</div>
				<div className="w-full flex justify-center items-end gap-10">
					{pricingItems.map((item) => (
						<div
							className={`w-full flex flex-col gap-10 rounded-3xl border border-[#F1F1F1] shadow-[0px_7px_14px_0px_#EAEAEA] p-14 ${
								item.id == 2 ? "bg-black text-white " : "bg-white text-black"
							}`}
							key={item.id}>
							<div className="w-full flex flex-col gap-10">
								<h1
									className={`text-[#00000080] text-[30px] font-bold leading-7 tracking-[-0.9px] ${
										item.id == 2 ? "text-[#FFFFFF80]" : "text-[#00000080] "
									}`}>
									{item.title}
								</h1>
								<div className="flex gap-3">
									<h1
										className={`text-black font-dmSans text-[40px] font-bold leading-9 tracking-[-0.045em] ${
											item.id == 2 ? "text-white" : "text-black "
										}`}>
										${item.price}
									</h1>
									<span
										className={`text-[20px] font-bold tracking-[-0.9px] ${
											item.id == 2 ? "text-[#FFFFFF80]" : "text-[#00000080] "
										}`}>
										/month
									</span>
								</div>
								<Button
									title={item.btn}
									className={`w-full py-3 rounded-lg font-bold ${
										item.id == 2
											? "bg-white text-black"
											: "bg-black text-white "
									}`}
								/>
							</div>
							<div className="w-full flex flex-col gap-8">
								{item.features.map((feature) => (
									<div
										className="w-full flex gap-5"
										key={feature.id}>
										{item.id == 2 ? (
											<Image
												className="w-5 h-5 object-cover"
												src={checkwhite}
												alt="checkwhite"
												width={20}
												height={20}
											/>
										) : (
											<Image
												className="w-5 h-5 object-cover"
												src={check}
												alt="check"
												width={20}
												height={20}
											/>
										)}
										<p
											className={`leading-5 text-[16px] ${
												item.id == 2 ? "text-white" : "text-black"
											}`}>
											{feature.feature}
										</p>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
