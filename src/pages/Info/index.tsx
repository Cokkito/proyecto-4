import MainLayout from 'components/MainLayout';
import InfoView from './InfoView';

function Info() {
	return <MainLayout selectedView={<InfoView />} />;
}

export default Info;
