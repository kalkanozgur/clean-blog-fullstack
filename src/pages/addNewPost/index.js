import { useRouter } from "next/router";
import React, { useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import HeroBar from "../../components/Hero";

function AddNewPostPage() {
	const router = useRouter();
	const [title, setTitle] = useState("");
	const [detail, setDetail] = useState("");
	const [content, setContent] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		// {title === "" && content === ""} ? return : setTitle("")
		if (title === "" && content === "") {
			return;
		}
		if (detail === "") setDetail(content);
		router.push("/");
	};
	return (
		<>
			<HeroBar imgSrc="/bg/post.jpg">
				{title === "" ? <h1>AddNewPostPage</h1> : <h1>{title}</h1>}
				{detail === "" ? <h2>Post Detail</h2> : <h2>{detail}</h2>}
			</HeroBar>

			<div className="w-6/12 mx-auto mt-20">
				<form className="flex flex-col gap-4" onSubmit={handleSubmit}>
					<button type="btn " onSubmit={handleSubmit}>
						POST
					</button>
					<input
						type="text"
						placeholder="Type blog title here!"
						className="input input-ghost"
						value={title}
						onChange={(e) => {
							setTitle(e.target.value);
						}}
					/>
					<input
						type="text"
						placeholder="Type blog detail here!"
						className="input input-ghost"
						value={detail}
						onChange={(e) => {
							setDetail(e.target.value);
						}}
					/>
					<textarea
						name=""
						id=""
						// cols="30"
						rows="10"
						placeholder="Lets write content here!"
						className="textarea textarea-ghost"
						value={content}
						onChange={(e) => {
							setContent(e.target.value);
						}}
					/>
				</form>
				{content === "" || title === "" ? (
					""
				) : (
					<div className="pb-[50px]">
						<div className="divider">CONTENT</div>
						<div className="py-3">
							<h1 className="py-3">{title}</h1>
							<ReactMarkdown>{content}</ReactMarkdown>
						</div>
						<div className="divider">END OF CONTENT</div>
					</div>
				)}
			</div>
		</>
	);
}

export default AddNewPostPage;
