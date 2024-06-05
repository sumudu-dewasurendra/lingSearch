export const SET_DATA = 'SET_DATA';
export const SEARCH_USER = 'SEARCH_USER';
export const SORT_USERS = 'SORT_USERS';

export const setData = (data: Object) => ({
  type: SET_DATA,
  payload: data,
});

export const searchUser = (userName: string) => ({
  type: SEARCH_USER,
  payload: userName,
});

export const sortUsers = (sortAlphabetically: boolean) => ({
  type: SORT_USERS,
  payload: sortAlphabetically,
});
