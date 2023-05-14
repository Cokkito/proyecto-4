import Footer from 'components/Footer';
import Header from 'components/Header';

interface Props {
	selectedView: any;
}

function MainLayout({ selectedView }: Props) {
	return (
		<>
			<Header />
			{selectedView}
			<Footer />
		</>
	);
}

export default MainLayout;
