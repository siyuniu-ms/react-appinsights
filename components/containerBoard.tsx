import { useAppInsightsContext } from "@microsoft/applicationinsights-react-js";
import { useEffect } from "react";

export interface containerType {
  containercompletionTime: string;
}

export interface UserProfile {
  name: string;
  jobtitle: string;
}
export const useTrackPageView = (pageName: string, userProfile: UserProfile) => {
  console.log('useTrackPageView', pageName);

  const appInsights = useAppInsightsContext();

  useEffect(() => {
    const pageViewProps = {
      name: pageName,
      properties: {
        UserName: userProfile?.name || '',
        JobTitle: userProfile?.jobtitle || ''
      }
    };
    appInsights.trackPageView(pageViewProps);
  }, [appInsights, pageName, userProfile]);
};

const ContainerBoard  = ({
  containercompletionTime
}: containerType) => {
  useTrackPageView('container board', { name: 'test', jobtitle: 'test' });
  return (
    <div>
      <p>container board content</p>
    </div>
  );
};
export default ContainerBoard ;