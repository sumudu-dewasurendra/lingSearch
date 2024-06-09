import {SET_DATA, SEARCH_USER, SORT_USERS} from './actions';
import {LeaderBoardUser} from '../types/commonTypes';
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

const initialState = {
  data: [] as LeaderBoardUser[],
  filteredData: [] as LeaderBoardUser[],
  sortAlphabetically: false as boolean,
  filter: '' as string,
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
          filter: '',
        };
      }

      // Find the user in the list of users
      const user = state.data.find(
        user => user.name.toLowerCase() === userName,
      );

      // If the user does not exist, return the current state and show an alert
      if (!user) {
        Alert.alert(
          'This user name does not exist! Please enter an existing user name!',
        );
        return state;
      }

      const topUsers = addSearchedUserToTopUsers([...state.data], user);

      return {
        ...state,
        filteredData: topUsers,
        filter: userName,
      };
    case SORT_USERS:
      const sortAlphabetically = action.payload;
      if (sortAlphabetically) {
        const sortedData = sortUsersByName([...state.filteredData]);
        return {
          ...state,
          filteredData: sortedData,
          sortAlphabetically: sortAlphabetically,
        };
      } else {
        const unSortedData = unSortUsers([...state.filteredData]);
        return {
          ...state,
          filteredData: unSortedData,
          sortAlphabetically: sortAlphabetically,
        };
      }
    default:
      return state;
  }
};

export default rootReducer;
