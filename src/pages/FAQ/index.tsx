import MainLayout from 'components/MainLayout';
import FAQView from './FAQView';

function FAQ() {
	return <MainLayout selectedView={<FAQView />} />;
}

export default FAQ;
