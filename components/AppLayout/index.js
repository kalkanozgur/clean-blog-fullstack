import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import HeroBar from "./Hero";

function AppLayout({ children }) {
	return (
		<div className="LayoutContainer">
			<NavBar />
			<HeroBar />
			<main>{children}</main>
			<Footer />
		</div>
	);
}

export default AppLayout;
