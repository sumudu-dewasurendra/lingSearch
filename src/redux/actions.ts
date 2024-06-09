export const SET_DATA = 'SET_DATA';
export const SEARCH_USER = 'SEARCH_USER';
export const SORT_USERS_BY_NAME = 'SORT_USERS_BY_NAME';
export const SORT_USERS_BY_RANK = 'SORT_USERS_BY_RANK';
export const SET_ALPHABETICALLY_SORT = 'SET_ALPHABETICALLY_SORT';
export const SET_SORT_BY_RANK = 'SET_SORT_BY_RANK';

export const setData = (data: Object) => ({
  type: SET_DATA,
  payload: data,
});

export const searchUser = (userName: string) => ({
  type: SEARCH_USER,
  payload: userName,
});

export const sortUsersByName = () => ({
  type: SORT_USERS_BY_NAME,
});

export const sortUsersByRank = () => ({
  type: SORT_USERS_BY_RANK,
});

export const setSortByName = (isSorted: boolean) => ({
  type: SET_ALPHABETICALLY_SORT,
  payload: isSorted,
});

export const setSortByRank = (isSorted: boolean) => ({
  type: SET_SORT_BY_RANK,
  payload: isSorted,
});
