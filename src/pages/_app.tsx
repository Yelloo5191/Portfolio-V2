import { ChakraProvider } from "@chakra-ui/react";
import Footer from "@components/footer";
import Header from "@components/header";
import theme from "@styles/theme";
import { pageview } from "@lib/gtag";
import { META } from "config";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import "@fontsource/montserrat/400.css";

import SplashAnimation from "@components/splash";

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	const router = useRouter();
	useEffect(() => {
		const handleRouteChange = (url: unknown) => {
			pageview(url);
		};
		router.events.on("routeChangeComplete", handleRouteChange);
		return () => {
			router.events.off("routeChangeComplete", handleRouteChange);
		};
	}, [router.events]);

	const Splash = ({ children }) => {
		const [loading, setLoading] = useState(true);
		useEffect(() => {
			setTimeout(() => {
				setLoading(false);
			}, 2500);
		}, []);
		return !loading ? children : <SplashAnimation />;
	};
	return (
		<>
			<Splash>
				<Head>
					<title>{META.title}</title>
					<link rel="icon" href="/images/favicon.ico" />
				</Head>
				<ChakraProvider theme={theme}>
					<Header />

					<Component {...pageProps} />

					<Footer />
				</ChakraProvider>
			</Splash>
		</>
	);
}
