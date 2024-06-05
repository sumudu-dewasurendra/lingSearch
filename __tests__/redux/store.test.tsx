import {createStore, Store} from 'redux';
import rootReducer from '../../src/redux/reducer';
import {expect, describe, beforeEach, it} from '@jest/globals';

describe('store', () => {
  let store: Store;

  beforeEach(() => {
    store = createStore(rootReducer);
  });

  it('should have the correct initial state', () => {
    const initialState = store.getState();
    expect(initialState).toEqual({
      data: [],
      filteredData: [],
      sortAlphabetically: false,
    });
  });

  // it('should update state correctly when actions are dispatched', () => {
  //   // Add your test logic here
  // });
});
