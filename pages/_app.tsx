import "../styles/globals.css";
import AppLayout from "../components/AppLayout";

import { wrapper } from "./../app/store";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
	console.log("pageProps", pageProps);
	console.log("Component", JSON.stringify(Component));
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
