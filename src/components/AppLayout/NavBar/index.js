import Link from "next/link";
import React from "react";

function NavBar() {
	return (
		<header className="nav-bar absolute top-0 min-w-full z-50">
			<navbar className="flex justify-center items-center">
				<ul className="flex flex-row justify-between w-9/12 ">
					<li className="p-3">
						<Link href={"/"}>
							<a className="btn btn-ghost normal-case text-3xl font-bold ">
								Clean Blog
							</a>
						</Link>
					</li>
					<li>
						<ul className="menu menu-horizontal p-3 gap-2">
							<li className="">
								<Link href={"/"}>
									<a className="btn btn-ghost normal-case text-2xl font-bold">
										Home
									</a>
								</Link>
							</li>
							<li className="">
								<Link href={"/about"}>
									<a className="btn btn-ghost normal-case text-2xl font-bold">
										About
									</a>
								</Link>
							</li>
							<li className="">
								<Link href={"/addNewPost"}>
									<a className="btn btn-ghost normal-case text-2xl font-bold">
										Add New Post
									</a>
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
