import Image from "next/image";
import React from "react";

function HeroBar({ children, imgSrc }) {
	imgSrc === undefined ? (imgSrc = "/bg/home.jpg") : imgSrc;

	return (
		<div className="contents">
			<figure className="flex flex-col container relative w-screen">
				<Image
					className="opacity-70 w-full h-full"
					src={imgSrc}
					alt={imgSrc}
					objectFit="cover"
					width={1920}
					height={540}
				/>
				<figcaption className="gap-4 absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-40 text-slate-50 flex flex-col justify-center items-center">
					{children}
				</figcaption>
			</figure>
		</div>
	);
}

export default HeroBar;
