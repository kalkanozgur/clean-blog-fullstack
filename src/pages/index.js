import axios from "axios";
import Link from "next/link";
import PostCard from "../components/PostCard";
import HeroBar from "./../components/Hero";
export default function Home({ data }) {
	const { blogs } = data;
	console.log(blogs);
	return (
		<>
			<HeroBar imgSrc="/bg/home.jpg">
				<h1>Clean Blog</h1>
				<h2>A Blog Theme by Start TailwindCSS</h2>
			</HeroBar>
			{/* {JSON.stringify(blogs)} */}
			<div className="w-6/12 mx-auto mt-20">
				{blogs.map((post) => (
					<PostCard key={post._id} post={post} />
				))}
			</div>
		</>
	);
}

export async function getStaticProps(context) {
	const { data } = await axios({
		url: "http://localhost:5000",
	});
	return {
		props: {
			data,
		}, // will be passed to the page component as props
	};
}
