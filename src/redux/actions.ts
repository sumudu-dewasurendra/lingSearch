export const SET_DATA = 'SET_DATA';
export const SEARCH_USER = 'SEARCH_USER';
export const SORT_USERS = 'SORT_USERS';
export const SET_ALPHABETICALLY_SORT = 'SET_ALPHABETICALLY_SORT';

export const setData = (data: Object) => ({
  type: SET_DATA,
  payload: data,
});

export const searchUser = (userName: string) => ({
  type: SEARCH_USER,
  payload: userName,
});

export const sortUsers = () => ({
  type: SORT_USERS,
});

export const setAlphabeticallySort = (isSorted: boolean) => ({
  type: SET_ALPHABETICALLY_SORT,
  payload: isSorted,
});
