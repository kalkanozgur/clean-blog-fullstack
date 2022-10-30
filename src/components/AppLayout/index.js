import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import HeadSet from "./../Head/index";
import { wrapper } from "/src/app/store";

function AppLayout({ children }) {
	return (
		<div className="LayoutContainer   ">
			<HeadSet />
			<NavBar />
			<main>{children}</main>
			<Footer />
		</div>
	);
}

export default wrapper.withRedux(AppLayout);
