import { fromJS } from 'immutable';
import addStringFormReducer from '../reducer';

describe('addStringFormReducer', () => {
  it('returns the initial state', () => {
    expect(addStringFormReducer(undefined, {})).toEqual(fromJS({}));
  });
});
