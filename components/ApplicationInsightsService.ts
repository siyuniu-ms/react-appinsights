import {ApplicationInsights, ITelemetryItem} from '@microsoft/applicationinsights-web';
import {ReactPlugin} from '@microsoft/applicationinsights-react-js';
const reactPlugin = new ReactPlugin();
const appInsights = new ApplicationInsights({
  config: {
    connectionString: "InstrumentationKey=814a172a-92fd-4950-9023-9cf13bb65696;IngestionEndpoint=https://eastus-8.in.applicationinsights.azure.com/;LiveEndpoint=https://eastus.livediagnostics.monitor.azure.com/",
    extensions: [reactPlugin]
  }
});
console.log("connectionString: " + appInsights.config.connectionString);


// const snippet2 = substituteConnectionString(appInsights.config.connectionString || "");


appInsights.loadAppInsights();
appInsights.trackEvent({name: "testEvent", properties: {testProperty: "testValue"}});
console.log("----------------debug in appInsights-----------------")

// appInsights.addTelemetryInitializer((env:ITelemetryItem) => {
//     env.tags = env.tags || [];
//     env.tags["ai.cloud.role"] = "testTag";
// });

if (typeof window !== 'undefined') {
  // Expose appInsights to the global scope for browser console access
  (window as any).appInsights = appInsights;
}

export { reactPlugin, appInsights };