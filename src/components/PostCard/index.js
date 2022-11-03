import Link from "next/link";
import React from "react";

function PostCard({ post }) {
	return (
		<>
			<div className="post-preview text-black">
				<Link href={`/postDetail/${post._id}`}>
					<div className="hover:text-blue-600">
						<h1 className="post-title ">
							<strong>{post.title}</strong>
						</h1>
						<h3 class="post-subtitle">{post.detail}</h3>
					</div>
				</Link>
				<p class="post-meta text-gray-600">
					Posted by{" "}
					<Link href={"#"}>
						<a className="text-black underline">User Name</a>
					</Link>{" "}
					{post.dateCreated}
				</p>
			</div>
		</>
	);
}

export default PostCard;
