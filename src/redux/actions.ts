export const SET_FILTER = 'SET_FILTER';
export const SET_DATA = 'SET_DATA';
export const SEARCH_USER = 'SEARCH_USER';

export const setFilter = (filter: string) => ({
  type: SET_FILTER,
  payload: filter,
});

export const setData = (data: Object) => ({
  type: SET_DATA,
  payload: data,
});

export const searchUser = (userName: string) => ({
  type: SEARCH_USER,
  payload: userName,
});
