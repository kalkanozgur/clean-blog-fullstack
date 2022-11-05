import { useRouter } from "next/router";
import React, { useState } from "react";
import apiClient from "./../../features/api";

import HeroBar from "../../components/Hero";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

function AddNewPostPage() {
	const router = useRouter();
	const [disabled, setDisabled] = useState(true);
	const [title, setTitle] = useState("");
	const [detail, setDetail] = useState("");
	const [content, setContent] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		// {title === "" && content === ""} ? return : setTitle("")
		if (title === "" || content === "") {
			return;
		}
		if (detail === "") setDetail(content);
		try {
			apiClient.post("/blogs", { title, detail, content });
			setDisabled(true);
		} catch (err) {
			console.log(err);
			setDisabled(true);
		} finally {
			setDisabled(false);
			router.push("/");
		}
	};
	return (
		<>
			<HeroBar imgSrc="/bg/post.jpg">
				{title === "" ? <h1>AddNewPostPage</h1> : <h1>{title}</h1>}
				{detail === "" ? <h2>Post Detail</h2> : <h2>{detail}</h2>}
			</HeroBar>

			<div className="w-6/12 mx-auto mt-20">
				<form className="flex flex-col gap-4 " onSubmit={handleSubmit}>
					<div className="w-1/4 mx-auto">
						<button className={"btn glass btn-wide"} onSubmit={handleSubmit}>
							POST
						</button>
					</div>
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
