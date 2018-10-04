/**
 *
 * Asynchronously loads the component for AddStringForm
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
