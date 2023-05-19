import MainLayout from 'components/MainLayout';
import GalleryView from './GalleryView';

function Gallery() {
	return <MainLayout selectedView={<GalleryView />} />;
}

export default Gallery;
