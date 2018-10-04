import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the addStringForm state domain
 */

const selectAddStringFormDomain = state =>
  state.get('addStringForm', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by AddStringForm
 */

const makeSelectAddStringForm = () =>
  createSelector(selectAddStringFormDomain, substate => substate.toJS());

export default makeSelectAddStringForm;
export { selectAddStringFormDomain };
