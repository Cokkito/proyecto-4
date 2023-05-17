import { Route, Routes } from 'react-router-dom';

import Home from 'pages/Home';
import Info from 'pages/Info';

import { INFO, ROOT } from './constants';

function RouterConfig() {
	return (
		<Routes>
			<Route path={ROOT} element={<Home />} />
			<Route path={INFO} element={<Info />} />
		</Routes>
	);
}

export default RouterConfig;
