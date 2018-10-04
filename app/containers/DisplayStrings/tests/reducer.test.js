import { fromJS } from 'immutable';
import displayStringsReducer from '../reducer';

describe('displayStringsReducer', () => {
  it('returns the initial state', () => {
    expect(displayStringsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
