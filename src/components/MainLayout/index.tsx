import TawkMessengerReact from '@tawk.to/tawk-messenger-react';

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
					<TawkMessengerReact
						propertyId='6465a56e74285f0ec46c1e86'
						widgetId='1h0mgsdqp'
					/>
				</Row>
			</Container>
		</>
	);
}

export default MainLayout;
