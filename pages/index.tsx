import { GetStaticProps } from 'next';

export default function HomePage() {
	return <div>HomePage having leak</div>
}

export const getServerSideProps: GetStaticProps = async context => {
	return { props: {} }
};
