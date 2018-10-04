import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the displayStrings state domain
 */

const selectDisplayStringsDomain = state =>
  state.get('displayStrings', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by DisplayStrings
 */

const makeSelectDisplayStrings = () =>
  createSelector(selectDisplayStringsDomain, substate => substate.toJS());

export default makeSelectDisplayStrings;
export { selectDisplayStringsDomain };
