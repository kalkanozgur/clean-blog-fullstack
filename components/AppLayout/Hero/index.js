import Image from "next/image";
import React from "react";

function HeroBar(props) {
	console.log(props);
	const { imgSrc, title, h1, h2 } = props;
	console.log("imgScr", imgSrc);
	console.log("title", title);
	console.log("h1", h1);
	console.log("h2", h2);
	return (
		<>
			<div className="flex flex-col container ">
				<>
					<Image
						src={"/bg/home.jpg"}
						alt={"imgSrc"}
						objectFit="cover"
						width={1920}
						height={540}
					/>
				</>
				<div className="absolute w-full  flex-1 ">
					{/* {title &&  */}
					<h1>{title}title</h1>
					{/* } */}
					{/* {h1 &&  */}
					<h1>{h1}h1</h1>
					{/* } */}
					{/* {h2 &&  */}
					<h2>{h2}h2</h2>
					{/* } */}
				</div>
			</div>
		</>
	);
}

export default HeroBar;
