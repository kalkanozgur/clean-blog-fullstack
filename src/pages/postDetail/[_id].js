import { useRouter } from "next/router";
import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import HeroBar from "../../components/Hero";

function PostPage() {
	const router = useRouter();
	const { _id, title, detail, content } = router.query;
	return (
		<>
			<HeroBar imgSrc="/bg/home.jpg">
				<h1>{title}</h1>
				<h2>{detail}</h2>
			</HeroBar>
			<div className="w-6/12 mx-auto mt-20">
				<ReactMarkdown>{content}</ReactMarkdown>
			</div>
		</>
	);
}

export default PostPage;
