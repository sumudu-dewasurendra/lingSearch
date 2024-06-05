import {SET_DATA, SEARCH_USER, SORT_USERS} from './actions';
import {LeaderBoardUser} from '../types/commonTypes';
import {Alert} from 'react-native';

type ActionProps = {
  type: string;
  payload: any;
};

const initialState = {
  data: [] as LeaderBoardUser[],
  filteredData: [] as LeaderBoardUser[],
  sortAlphabetically: false,
};

const rootReducer = (state = initialState, action: ActionProps) => {
  switch (action.type) {
    case SET_DATA:
      const dataArray: LeaderBoardUser[] = Object.values(action.payload);

      // Remove name = '' users from array, sort the data by bananas and last day played and add the rank to each user
      const initialData = dataArray
        .filter((user: LeaderBoardUser) => user.name !== '')
        .sort((a, b) => {
          if (b.bananas === a.bananas) {
            return (
              new Date(b.lastDayPlayed).getTime() -
              new Date(a.lastDayPlayed).getTime()
            );
          }
          return b.bananas - a.bananas;
        })
        .map((user, index) => ({
          ...user,
          rank: index + 1,
        }));

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

      // If the user exists, find the top 10 users and check if the user is in the top 10
      let topUsers = [...state.data]
        .sort((a, b) => b.bananas - a.bananas)
        .slice(0, 10);
      const userInTop10 = topUsers.find(u => u.uid === user.uid);

      // If the user is not in the top 10, add the user to the top 10 list
      if (!userInTop10) {
        topUsers = topUsers.slice(0, 9);
        topUsers.push({
          ...user,
        });
      }

      return {
        ...state,
        filteredData: topUsers,
      };
    case SORT_USERS:
      const sortAlphabetically = action.payload;
      if (sortAlphabetically) {
        const sortedData = [...state.filteredData].sort((a, b) =>
          a.name.localeCompare(b.name),
        );
        return {
          ...state,
          filteredData: sortedData,
          sortAlphabetically: sortAlphabetically,
        };
      } else {
        const unSortedData = [...state.filteredData].sort((a, b) => {
          if (b.bananas === a.bananas) {
            return (
              new Date(b.lastDayPlayed).getTime() -
              new Date(a.lastDayPlayed).getTime()
            );
          }
          return b.bananas - a.bananas;
        });
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
