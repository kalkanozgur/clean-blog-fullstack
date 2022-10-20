import Link from "next/link";
import React from "react";

function NavBar() {
	return (
		<header className="">
			<navbar>
				<ul className="flex flex-row justify-between z-10">
					<li className="p-5">
						<Link href={"/"}>
							<a>Clean Blog</a>
						</Link>
					</li>
					<li className="">
						<ul className="flex flex-row">
							<li className="p-3">
								<Link href={"/"}>
									<a>Home</a>
								</Link>
							</li>
							<li className="p-3">
								<Link href={"/about"}>
									<a>About</a>
								</Link>
							</li>
							<li className="p-3">
								<Link href={"/addNewPost"}>
									<a>Add New Post</a>
								</Link>
							</li>
						</ul>
					</li>
				</ul>
			</navbar>
		</header>
	);
}

export default NavBar;
