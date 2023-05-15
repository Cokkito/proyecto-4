import Footer from 'components/Footer';
import Header from 'components/Header';
import { MainSection } from './styles';

interface Props {
	selectedView: any;
}

function MainLayout({ selectedView }: Props) {
	return (
		<>
			<Header />
			<MainSection className='App-header'>{selectedView}</MainSection>
			<Footer />
		</>
	);
}

export default MainLayout;
