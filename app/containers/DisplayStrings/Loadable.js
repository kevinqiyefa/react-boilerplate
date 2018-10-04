/**
 *
 * Asynchronously loads the component for DisplayStrings
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
