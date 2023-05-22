import MainLayout from 'components/MainLayout';
import ContactUsView from './ContactUsView';

function ContactUs() {
	return <MainLayout selectedView={<ContactUsView />} />;
}

export default ContactUs;
