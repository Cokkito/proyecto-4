import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { Container, Background, Loading } from './styles';
import loadingAnimation from '../../assets/animations/loadingAnimation.json';

function FullScreenLoading() {
	const { isLoading } = useSelector((state: RootState) => state.loading);
	if (isLoading) {
		return (
			<Container>
				<Background>
					<Loading
						options={{
							loop: true,
							autoplay: true,
							animationData: loadingAnimation,
						}}
						isClickToPauseDisabled={true}
					/>
				</Background>
			</Container>
		);
	}
	return null;
}

export default FullScreenLoading;
