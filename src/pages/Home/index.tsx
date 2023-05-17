import MainLayout from 'components/MainLayout';

import HomeView from './HomeView';

function Home() {
	return <MainLayout selectedView={<HomeView />} />;
}

export default Home;
