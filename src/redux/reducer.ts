import {
  SET_DATA,
  SEARCH_USER,
  SORT_USERS,
  SET_ALPHABETICALLY_SORT,
} from './actions';
import {LeaderBoardUser, ReduxState} from '../types/commonTypes';
import {Alert} from 'react-native';
import {
  organizeDataAndAddRank,
  addSearchedUserToTopUsers,
  sortUsersByName,
  unSortUsers,
} from '../utils/reducerFunctions';

type ActionProps = {
  type: string;
  payload: any;
};

const initialState: ReduxState = {
  data: [],
  filteredData: [],
  sortAlphabetically: false,
  filter: '',
};

const rootReducer = (state = initialState, action: ActionProps) => {
  switch (action.type) {
    case SET_DATA:
      const dataArray: LeaderBoardUser[] = Object.values(action.payload);

      // Remove name = '' users from array, sort the data by bananas and last day played and add the rank to each user
      const initialData = organizeDataAndAddRank(dataArray);

      return {
        ...state,
        data: initialData,
        filteredData: initialData,
      };
    case SEARCH_USER:
      const userName = action.payload.toLowerCase();

      // If the user name is empty, return the full list of users
      if (userName === '') {
        return {
          ...state,
          filteredData: state.data,
          sortAlphabetically: false,
          filter: '',
        };
      }

      // Find the users that match the search criteria
      const users = state.data.filter(user =>
        user.name.toLowerCase().includes(userName.toLowerCase()),
      );

      // If the users does not exist, return the current state and show an alert
      if (!users || users.length === 0) {
        Alert.alert(
          'This user name does not exist! Please specify an existing user name!',
        );
        return state;
      }

      const topUsers = addSearchedUserToTopUsers([...state.data], users);

      return {
        ...state,
        filteredData: topUsers,
        filter: userName,
        sortAlphabetically: false,
      };
    case SET_ALPHABETICALLY_SORT:
      const isSorted = action.payload;
      return {
        ...state,
        sortAlphabetically: isSorted,
      };
    case SORT_USERS:
      const sortAlphabetically = state.sortAlphabetically;
      if (sortAlphabetically) {
        const sortedData = sortUsersByName([...state.filteredData]);
        return {
          ...state,
          filteredData: sortedData,
        };
      } else {
        const unSortedData = unSortUsers([...state.filteredData]);
        return {
          ...state,
          filteredData: unSortedData,
        };
      }
    default:
      return state;
  }
};

export default rootReducer;
