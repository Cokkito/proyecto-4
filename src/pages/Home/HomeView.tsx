import Carousel from 'components/Carousel';
import { Container, ContainerColumn } from './styles';
import TextBanner from 'components/TextBanner';

function HomeView() {
	return (
		<>
			<TextBanner
				header={'BIENVENIDO A PETZ'}
				content={
					'La limpieza y tranquilidad de tu mascota es nuestra prioridad'
				}
			/>
			<Container>
				<ContainerColumn>
					<iframe
						width='600'
						height='400'
						src='https://www.youtube.com/embed/8odbsnTxt5Y'
						title='YouTube video player'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
						allowFullScreen
					/>
					<iframe
						width='600'
						height='400'
						src='https://www.youtube.com/embed/etef28WDEEk'
						title='YouTube video player'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
						allowFullScreen
					/>
				</ContainerColumn>
				<ContainerColumn>
					<Carousel />
				</ContainerColumn>
			</Container>
		</>
	);
}

export default HomeView;
