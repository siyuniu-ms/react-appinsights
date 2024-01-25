import { AppInsightsContext } from "@microsoft/applicationinsights-react-js";
import { reactPlugin } from "../components/ApplicationInsightsService";
import type { AppProps } from 'next/app';
import ContainerBoard from '@/components/containerBoard';

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
        <AppInsightsContext.Provider value={reactPlugin}>
        
            <p>some word</p>
            <ContainerBoard containercompletionTime="someValue" />
      </AppInsightsContext.Provider>
	);
}

