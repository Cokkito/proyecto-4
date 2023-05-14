import MainLayout from 'components/MainLayout';
import { VideoContainer } from './styles';

function HomeView() {
	return (
		<MainLayout
			selectedView={
				<VideoContainer className='App-header'>
					<iframe
						width='560'
						height='315'
						src='https://www.youtube.com/embed/W-9vb_-qzaQ'
						title='YouTube video player'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
						allowFullScreen
					></iframe>
				</VideoContainer>
			}
		/>
	);
}

export default HomeView;
