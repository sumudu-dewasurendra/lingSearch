import {createStore, Store} from 'redux';
import rootReducer from '../../src/redux/reducer';
import {expect, describe, beforeEach, it} from '@jest/globals';
import {
  setData,
  searchUser,
  sortUsersByName,
  sortUsersByRank,
  setSortByName,
  setSortByRank,
} from '../../src/redux/actions';
import leaderboardData from '../../src/data/leaderboard.json';
import {
  leaderboardConvertedData,
  leaderboardConvertedFilterData1,
  leaderboardConvertedFilterData2,
  sortedLeaderboardConvertedData1,
  sortedLeaderboardConvertedData2,
} from '../testData/reduxStoreData';

describe('store', () => {
  let store: Store;

  beforeEach(() => {
    store = createStore(rootReducer);
    store.dispatch(setData(leaderboardData));
  });

  it('should update state correctly when setData action dispatched', () => {
    const newState = store.getState();

    expect(newState.data).toEqual(leaderboardConvertedData);
  });

  it('should update state.filteredData correctly searchUser action dispatched (when search user name "")', () => {
    store.dispatch(searchUser(''));
    const newState = store.getState();

    expect(newState.filteredData).toEqual(leaderboardConvertedData);
  });

  it('should update state.filteredData correctly searchUser action dispatched (when search user name Ivy, sortAlphabetically = false, sortByRank = false)', () => {
    store.dispatch(searchUser('Ivy'));
    const newState = store.getState();

    expect(newState.filteredData).toEqual(leaderboardConvertedFilterData1);
  });

  it('should update state.filteredData correctly searchUser action dispatched (when search user name A B, sortAlphabetically = false, sortByRank = false)', () => {
    store.dispatch(searchUser('A B'));
    const newState = store.getState();

    expect(newState.filteredData).toEqual(leaderboardConvertedFilterData2);
  });

  it('should update state.filteredData correctly setSortByName action dispatched', () => {
    store.dispatch(setSortByName(true)); // First update redux state.sortAlphabetically to true
    store.dispatch(sortUsersByName());
    const newState = store.getState();

    expect(newState.filteredData).toEqual(sortedLeaderboardConvertedData1);
  });

  it('should update state.filteredData correctly setSortByRank action dispatched', () => {
    store.dispatch(setSortByRank(true)); // First update redux state.sortByRank to true
    store.dispatch(sortUsersByRank());
    const newState = store.getState();

    expect(newState.filteredData).toEqual(sortedLeaderboardConvertedData2);
  });

  it('should update state.sortAlphabetically correctly setSortByName action dispatched (when sorted by name true)', () => {
    store.dispatch(setSortByName(true));
    const newState = store.getState();

    expect(newState.sortAlphabetically).toEqual(true);
  });

  it('should update state.sortAlphabetically correctly setSortByRank action dispatched (when sorted by rank true)', () => {
    store.dispatch(setSortByRank(true));
    const newState = store.getState();

    expect(newState.sortByRank).toEqual(true);
  });
});
