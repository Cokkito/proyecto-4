import { Route, Routes } from 'react-router-dom';

import Home from 'pages/Home';
import Info from 'pages/Info';
import FAQ from 'pages/FAQ';
import Gallery from 'pages/Gallery';
import Shop from 'pages/Shop';
import Checkout from 'pages/Checkout';

import {
	INFO,
	ROOT,
	FAQ as FAQ_ROUTE,
	SHOP,
	GALLERY,
	CHECKOUT,
} from './constants';

function RouterConfig() {
	return (
		<Routes>
			<Route path={ROOT} element={<Home />} />
			<Route path={INFO} element={<Info />} />
			<Route path={FAQ_ROUTE} element={<FAQ />} />
			<Route path={GALLERY} element={<Gallery />} />
			<Route path={SHOP} element={<Shop />} />
			<Route path={CHECKOUT} element={<Checkout />} />
		</Routes>
	);
}

export default RouterConfig;
