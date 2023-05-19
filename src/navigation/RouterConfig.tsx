import { Route, Routes } from 'react-router-dom';

import Home from 'pages/Home';
import Info from 'pages/Info';
import FAQ from 'pages/FAQ';
import Gallery from 'pages/Gallery';

import { INFO, ROOT, FAQ as FAQRoute, GALLERY } from './constants';

function RouterConfig() {
	return (
		<Routes>
			<Route path={ROOT} element={<Home />} />
			<Route path={INFO} element={<Info />} />
			<Route path={FAQRoute} element={<FAQ />} />
			<Route path={GALLERY} element={<Gallery />} />
		</Routes>
	);
}

export default RouterConfig;
