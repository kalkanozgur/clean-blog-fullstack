import Link from "next/link";
import HeroBar from "./../components/Hero";
export default function Home() {
	return (
		<>
			<HeroBar imgSrc="/bg/home.jpg">
				<h1>Clean Blog</h1>
				<h2>A Blog Theme by Start TailwindCSS</h2>
			</HeroBar>
			<div className="w-6/12 mx-auto mt-20">
				<div className="post-preview text-black">
					<Link href={"/#"}>
						<div className="hover:text-blue-600">
							<h1 className="post-title ">
								<strong>
									Man must explore, and this is exploration at its greatest
								</strong>
							</h1>
							<h3 class="post-subtitle">
								Problems look mighty small from 150 miles up
							</h3>
						</div>
					</Link>
					<p class="post-meta text-gray-600">
						Posted by{" "}
						<Link href={"#"}>
							<a className="text-black underline">User Name</a>
						</Link>{" "}
						on September 24, 2019
					</p>
				</div>
			</div>
		</>
	);
}
