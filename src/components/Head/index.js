import React from "react";
import Head from "next/head";

function HeadSet({ title, content, iconPath }) {
	title === undefined ? (title = "Clean Blog") : title;
	content === undefined
		? (content = "Simple Blog App with NextJS, TailwindCSS")
		: content;
	iconPath === undefined ? (iconPath = "/favicon.ico") : iconPath;
	return (
		<Head>
			<title>{title}</title>
			<meta name="description" content={content} />
			<link rel="icon" href={iconPath} />
		</Head>
	);
}

export default HeadSet;
