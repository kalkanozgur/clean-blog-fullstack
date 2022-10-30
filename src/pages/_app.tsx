import "../styles/globals.css";
import AppLayout from "../components/AppLayout";

import { AppProps } from "next/app";
// import { wrapper } from "./../app/store";

function MyApp({ Component, pageProps }: AppProps) {
	console.log("pageProps", pageProps);
	return (
		<>
			<AppLayout>
				{/* <NavBar /> */}
				{/* <HeroBar /> */}
				<Component {...pageProps} />
				{/* <Footer /> */}
			</AppLayout>
		</>
	);
}
export default MyApp;
