import { GetStaticProps } from 'next';
import { appInsights } from '@/components/ApplicationInsightsService';

export default function HomePage() {


  return <p>test</p>

}

export const getServerSideProps: GetStaticProps = async context => {
  return { props: {} };
};
