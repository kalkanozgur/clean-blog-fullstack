import { useRouter } from "next/router";
import React from "react";
import HeroBar from "../../components/Hero";

function PostPage() {
	const router = useRouter();
	const { _id, post } = router.query;
	return (
		<div>
			<HeroBar imgSrc="/bg/home.jpg">
				<h1>Clean Blog</h1>
				<h2>A Blog Theme by Start TailwindCSS</h2>
			</HeroBar>
			{JSON.stringify(router)}
		</div>
	);
}

export default PostPage;
