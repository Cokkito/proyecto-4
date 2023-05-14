import HomeView from 'views/HomeView';
import { Route, Routes } from 'react-router-dom';

import { ROOT } from './constants';

function RouterConfig() {
	return (
		<Routes>
			<Route path={ROOT} element={<HomeView />} />
		</Routes>
	);
}

export default RouterConfig;
