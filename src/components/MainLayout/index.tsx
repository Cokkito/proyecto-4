import Footer from 'components/Footer';
import Header from 'components/Header';
import { Container, Row, ScreenContainer, ScreenContent } from './styles';

interface Props {
	selectedView: any;
}

function MainLayout({ selectedView }: Props) {
	return (
		<>
			<Container square>
				<Header />
				<Row>
					<ScreenContainer>
						<ScreenContent>{selectedView}</ScreenContent>
						<Footer />
					</ScreenContainer>
				</Row>
			</Container>
		</>
	);
}

export default MainLayout;
