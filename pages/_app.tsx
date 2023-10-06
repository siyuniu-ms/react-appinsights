import { AppInsightsContext } from "@microsoft/applicationinsights-react-js";
import { reactPlugin } from "../components/ApplicationInsightsService";
import type { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
        <AppInsightsContext.Provider value={reactPlugin}>
            <Component {...pageProps} />
        </AppInsightsContext.Provider>
	);
}

