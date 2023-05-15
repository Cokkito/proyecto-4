import Home from 'pages/Home';
import { Route, Routes } from 'react-router-dom';

import { ROOT } from './constants';

function RouterConfig() {
	return (
		<Routes>
			<Route path={ROOT} element={<Home />} />
		</Routes>
	);
}

export default RouterConfig;
