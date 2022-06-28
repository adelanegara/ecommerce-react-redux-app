import React from 'react';

import Loader from '../Loader/index';
import loadable from '../../Utils/loadable';

export default loadable(() => import('./index'), {
  fallback: <Loader isLoading />,
});