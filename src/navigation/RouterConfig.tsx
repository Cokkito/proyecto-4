import TestComponent from 'components/TestComponent';
import { Route, Routes } from 'react-router-dom';

import { ROOT } from './constants';

function RouterConfig() {
  return (
    <Routes>
      <Route path={ROOT} element={<TestComponent />} />
    </Routes>
  );
}

export default RouterConfig;
