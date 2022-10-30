import "../styles/globals.css";
import AppLayout from "../components/AppLayout";

import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<AppLayout>
				<Component {...pageProps} />
			</AppLayout>
		</>
	);
}
export default MyApp;
