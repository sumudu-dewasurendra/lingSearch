import {createStore, Store} from 'redux';
import rootReducer from '../../src/redux/reducer';
import {expect, describe, beforeEach, it} from '@jest/globals';
import {setData, searchUser, sortUsers} from '../../src/redux/actions';
import leaderboardData from '../../src/data/leaderboard.json';
import {
  leaderboardConvertedData,
  leaderboardConvertedFilterData,
  sortedLeaderboardConvertedData,
} from '../../testData/reduxStoreData';

describe('store', () => {
  let store: Store;

  beforeEach(() => {
    store = createStore(rootReducer);
    store.dispatch(setData(leaderboardData));
  });

  it('should update state correctly when setData action dispatched', () => {
    store.dispatch(setData(leaderboardData));
    const newState = store.getState();

    expect(newState.filteredData).toEqual(leaderboardConvertedData);
  });

  it('should update state.filteredData correctly searchUser action dispatched (when search user name "")', () => {
    store.dispatch(searchUser(''));
    const newState = store.getState();

    expect(newState.filteredData).toEqual(leaderboardConvertedData);
  });

  it('should update state.filteredData correctly searchUser action dispatched (when search user name A B)', () => {
    store.dispatch(searchUser('A B'));
    const newState = store.getState();

    expect(newState.filteredData).toEqual(leaderboardConvertedFilterData);
  });

  it('should update state.filteredData correctly sortUsers action dispatched (when sorted true)', () => {
    store.dispatch(sortUsers(true));
    const newState = store.getState();

    expect(newState.filteredData).toEqual(sortedLeaderboardConvertedData);
  });
});
