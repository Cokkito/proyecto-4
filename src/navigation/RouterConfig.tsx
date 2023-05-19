import { Route, Routes } from 'react-router-dom';

import Home from 'pages/Home';
import Info from 'pages/Info';

import { INFO, ROOT, FAQ as FAQRoute } from './constants';
import FAQ from 'pages/FAQ';

function RouterConfig() {
	return (
		<Routes>
			<Route path={ROOT} element={<Home />} />
			<Route path={INFO} element={<Info />} />
			<Route path={FAQRoute} element={<FAQ />} />
		</Routes>
	);
}

export default RouterConfig;
